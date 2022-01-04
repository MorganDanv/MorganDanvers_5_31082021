// on récupère les données du local storage
const ContactJson = localStorage.getItem("contact");
const Total = localStorage.getItem("total");
const Id = localStorage.getItem("orderId");
// on transforme l'objet contact  en objet JSON
const Contact = JSON.parse(ContactJson);
// la fonction valide la commande de l'utilisateur via une phrase récapitulative des achats, si la commande est nule redirige vers la page d'accueil
orderValidation();
function orderValidation() {
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
}

// il faut remplir le tableau en fonction des différentes étapes que réalise une fonction
// exemple: première fonction page index - affichage de la carte de tout les produits -les boutons panier et accueil permettent une redirection vers les pages en question
// - le bouton voir le produit redirige sur la page du produit selectionné - le click sur la carte du produit redirige vers la page d'information du produit selectionné

//page product: la fonction permet de crée une carte personnalisée du produit selectionné, elle permet la selection de la couleur choisit par l'utilisateur du produit, elle permet l'affichage du prix en euro avec deux chiffres après la virgule. Elle permet l'ajout du produit dans le panier via le bouton ajouté au panier.
// page cart: la fonction permet l'affichage du tableau de récapitulation des produits selectionnés et permet la validation d'achat via le formulaire que la fonction crée. La fonction permet de vérifier le formulaire ainsi que de le valider.
// page confirmation: la fonction permet de confirmer le numéro de commande de l'utilisateur ainsi que le montant total et confirme son enregistrement.
