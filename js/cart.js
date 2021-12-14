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

  const emptyBasket = document.getElementById("emptyBasket");
  emptyBasket.addEventListener("click", (e) => {
    localStorage.removeItem("cart");
    alert("le panier a été vider");
    window.location.href = "cart.html";
  });

  console.log(montantTotal);
} else {
  // le panier est vide
  cartContent.style.display = "none";
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
