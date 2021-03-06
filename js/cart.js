// lire la key cart

let data = localStorage.getItem("cart");
// console.log("cart : " + data);
let cartData = JSON.parse(data);

const cartContent = document.getElementById("cartContent");
const cartEmpty = document.getElementById("cartEmpty");
const tableContent = document.getElementById("tableContent");
console.log(cartData);

let avecQuantite = [];
// pour chaque nounours de cartData
// cherche dans avecQuantite si nounours y est deja
// - si il est deja la, je rajoute 1 a sa quantite
// - si il est pas la, insere nounours dans avecQuantite, en lui mettant sa quantite a 1
let montantTotal = 0;
// la fonction crée un tableau de chaques produits selectionnés par l'utilisateur
if (cartData) {
  // le panier est rempli
  cartEmpty.style.display = "none";

  cartData.forEach((nounours) => {
    montantTotal += nounours.price;
    let tr = document.createElement("tr");
    tableContent.appendChild(tr);
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = nounours.name;

    td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = nounours.color;

    td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(nounours.price / 100);
  });
  tr = document.createElement("tr");
  cartContent.appendChild(tr);
  td = document.createElement("td");
  tr.appendChild(td);
  td.innerHTML = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(montantTotal / 100);
  // la fonction vide les données du local storage et indique que le panier est vide
  const emptyBasket = document.getElementById("emptyBasket");
  emptyBasket.addEventListener("click", (e) => {
    localStorage.removeItem("cart");
    alert("le panier a été vider");
    window.location.href = "cart.html";
  });

  console.log(montantTotal);
} else {
  // le panier est vide la fonction masque le tableau
  cartContent.style.display = "none";
  display_form.style.display = "none";
  display_section.style.display = "none";
}

// La fonction indique si les champs du formulaire son correctement rempli
const validedForm = () => {
  "use strict";

  let forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          event.stopPropagation();

          let validMail = form[2].value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
          let validNom = form[0].value
            .toLowerCase()
            .match(/^[a-z-\é\è\ê\ë\ï]+$/);
          let validPrenom = form[1].value
            .toLowerCase()
            .match(/^[a-z-\é\è\ê\ë\ï]+$/);

          if (!validNom) {
            alert(
              "Le nom ne peut contenir que des lettres compris entre a et z"
            );
          } else {
            if (!validPrenom) {
              alert(
                "Le prénom ne peut contenir que des lettres compris entre a et z"
              );
            } else {
              if (!validMail) {
                alert("L'adresse email est invalide");
              } else {
                sendOrder(form);
              }
            }
          }
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
};
validedForm();

const sendOrder = (form) => {
  //récupérer les infos du formulaire => objet json contact

  let contact = {
    lastName: form[0].value,
    firstName: form[1].value,
    email: form[2].value,
    address: form[3].value,
    city: form[4].value,
  };

  // créer un tableau products qui contient les Id des produits dans le panier

  let products = [];
  for (i of cartData) {
    products.push(i._id);
  }

  // envoyer une requête fetch POST avec contact et products
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    body: JSON.stringify({ contact, products }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => {
      localStorage.clear();
      localStorage.setItem("contact", JSON.stringify(contact));
      localStorage.setItem("total", montantTotal);
      localStorage.setItem("orderId", response.orderId);

      window.location.href = "confirmation.html";
    })
    .catch((error) => {
      alert("Erreur : " + error);
    });
};
// mettre les infos de la commande en local storage et rediriger vers confirmation.js
