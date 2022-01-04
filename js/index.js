// la fonction crée la carte générale des produits
function createcard(teddies) {
  const cardsDiv = document.getElementById("products");

  for (const teddy of teddies) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-12");
    card.classList.add("col-sm-2");

    const link = document.createElement("a");
    link.href = "product.html?id=" + teddy._id;

    const img = document.createElement("img");
    img.src = teddy.imageUrl;
    img.classList.add("card-img-top");
    link.appendChild(img);
    card.appendChild(link);

    const nameDiv = document.createElement("h3");
    card.appendChild(nameDiv);
    nameDiv.innerHTML = "nom:" + teddy.name;

    const descriptionDiv = document.createElement("p");
    card.appendChild(descriptionDiv);
    descriptionDiv.innerHTML = teddy.description;

    const priceDiv = document.createElement("p");
    card.appendChild(priceDiv);
    priceDiv.innerHTML = "prix: " + (teddy.price / 100).toFixed(2) + "€";

    const boxColor = document.createElement("div");
    card.appendChild(boxColor);
    boxColor.classList.add("color-box");

    const btn = document.createElement("a");
    btn.href = "product.html?id=" + teddy._id;
    card.appendChild(btn);
    btn.innerHTML = "voir le produit";
    btn.classList.add("link-card");
    btn.style.backgroundColor = "#999999";
    btn.style.color = "#000000";
    btn.style.fontWeight = "bold";

    for (const color of teddy.colors) {
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("color-lozenge");
      if (color == "Pale brown") {
        colorDiv.style.backgroundColor = "#987654";
      } else if (color == "Dark brown") {
        colorDiv.style.backgroundColor = "#654321";
      } else {
        colorDiv.style.backgroundColor = color.toLowerCase().replace(/ /g, "@");
      }
      card.appendChild(colorDiv);
      boxColor.appendChild(colorDiv);
    }

    cardsDiv.appendChild(card);
  }
}
// le fetch methode GET récupère les produits en objets JSON
fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((response) => {
    createcard(response);
  })
  .catch((error) => console.error(error));
