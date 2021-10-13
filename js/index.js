
function createcard(teddies) {

  const cardsDiv = document.getElementById('products')

for (const teddy of teddies) {
  const card = document.createElement('div')
  card.classList.add('card')

  cardsDiv.appendChild(card)
  const link = document.createElement('a')
  link.href = 'product.html?id=' + teddy._id

  const img = document.createElement('img')
  img.src = teddy.imageUrl
  link.appendChild(img)

  card.appendChild(link)

  cardsDiv.appendChild(card)
const nameDiv = document.createElement('p')
card.appendChild(nameDiv)
nameDiv.innerHTML="nom:" + teddy.name

const descriptionDiv=document.createElement('p')
card.appendChild(descriptionDiv)
descriptionDiv.innerHTML= teddy.description
cardsDiv.appendChild(card)

const priceDiv = document.createElement('p')
card.appendChild(priceDiv)
priceDiv.innerHTML="prix:" + teddy.price

const colorDiv=document.createElement('p')
card.appendChild(colorDiv)
colorDiv.innerHTML= teddy.colors


if (teddy.price> 3000) {
  descriptionDiv.classList.add('bonjour')
}

}
}




fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => {
  createcard (response);
})
.catch(error => console.error(error));
