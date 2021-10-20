
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
  img.classList.add("card-img-top")
  link.appendChild(img)
  card.appendChild(link)

  cardsDiv.appendChild(card)
const nameDiv = document.createElement('h3')
card.appendChild(nameDiv)
nameDiv.innerHTML="nom:" + teddy.name

const descriptionDiv=document.createElement('p')
card.appendChild(descriptionDiv)
descriptionDiv.innerHTML= teddy.description
cardsDiv.appendChild(card)

const priceDiv = document.createElement('p')
card.appendChild(priceDiv)
priceDiv.innerHTML="prix: " +(teddy.price/100).toFixed(2) +"€"
 

const colorDiv=document.createElement('div')
card.appendChild(colorDiv)
colorDiv.classList.add('color-lozenge')


const colorDivA=document.createElement('div')
card.appendChild(colorDivA)
colorDivA.classList.add('color-lozenge-a')


const colorDivB=document.createElement('div')
card.appendChild(colorDivB)
colorDivB.classList.add('color-lozenge-b')


const colorDivC=document.createElement('div')
card.appendChild(colorDivC)
colorDivC.classList.add('color-lozenge-c')

const moncercle = document.getElementById('cercle')



// if (teddy.price> 3000) {
//   descriptionDiv.classList.add('bonjour')
// }

}
}




fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => {
  createcard (response);
})
.catch(error => console.error(error));

fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
.then(response => response.json())
.then(response => {
  createcard (response);
})
.catch(error => console.error(error));

