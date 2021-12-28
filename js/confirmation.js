const ContactJson = localStorage.getItem("contact");
const Total = localStorage.getItem("total");
const Id = localStorage.getItem("orderId");

const Contact = JSON.parse(ContactJson);

let pOrder = document.createElement("p");
pOrder.innerHTML =
  "Merci " +
  Contact.lastName +
  " " +
  Contact.firstName +
  ", votre commande numéro: " +
  Id +
  ", d'un montant total de: " +
  Total / 100 +
  "€," +
  " a bien été enregistrée.";
container_recap.appendChild(pOrder);

if (Id == null || Total == null || Contact == null) {
  window.location.href = "index.html";
}
