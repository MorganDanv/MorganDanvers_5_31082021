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

if (cartData) {
  // le panier est rempli
  cartEmpty.style.display = "none";

  cartData.forEach((nounours) => {
    let tr = document.createElement("tr");
    tableContent.appendChild(tr);
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = nounours.name;

    td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = (nounours.price / 100).toFixed(2) + "€";

    td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = nounours.color;
  });
} else {
  // le panier est vide
  cartContent.style.display = "none";
}
