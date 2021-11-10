// on récupère l'id dans l'url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

let product = "";

fetch("http://localhost:3000/api/teddies/" + productId)
  .then((response) => response.json())
  .then((response) => {
    showProduct(response);
    // store product
    product = response;
  })
  .catch((error) => console.error(error));

const showProduct = (product) => {
  const prodCard = document.createElement("div");
  prodCard.classList.add("prod-card");

  const productImage = document.getElementById("productImage");
  productImage.src = product.imageUrl;
  productImage.alt = product.name;
  productImage.classList.add("product-img-top");

  const divFlex = document.createElement("div");
  divFlex.classList.add("div-flex");

  const productName = document.getElementById("productName");
  productName.innerHTML = product.name;

  const productDescription = document.getElementById("productDescription");
  productDescription.innerHTML = product.description;

  const productPrice = document.getElementById("productPrice");
  productPrice.innerHTML = (product.price / 100).toFixed(2) + "€";

  const mySelect = document.createElement("select");
  mySelect.classList.add("select-color");
  mySelect.id = "selectColor";
  const array_colors = product.colors;
  array_colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerHTML = color;
    mySelect.appendChild(option);
  });
  const productButton = document.createElement("BUTTON");
  productButton.classList.add("button-basket");
  productButton.innerHTML = "Ajouter au panier";
  productButton.addEventListener("click", addToCart);

  prodCard.appendChild(productImage);
  divFlex.appendChild(productName);
  divFlex.appendChild(productDescription);
  divFlex.appendChild(productPrice);
  divFlex.appendChild(mySelect);
  divFlex.appendChild(productButton);
  prodCard.appendChild(divFlex);
  unicCard.appendChild(prodCard);
};

const addToCart = () => {
  // session Storage
  // key -> cart
  // value -> array
  // tenter de récupérer le panier
  if (sessionStorage.getItem("cart")) {
    var data = sessionStorage.getItem("cart");
  } else {
    var data = [];
  }

  let coco = document.getElementById("selectColor");
  let cocoS = coco.options[coco.selectedIndex].text;
  let buyItem = product;
  buyItem.color = cocoS;
  data.push(buyItem);
  sessionStorage.setItem("cart", data);
  alert(data);

  // SI (la valeur est nulle )
  // ALORS créer la key avec comme valeur un array
  // ajouter le produit au panier

  // alert("produit numéro " + productId + " à été ajouté");
};
