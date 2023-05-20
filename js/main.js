const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')
const btnSave = document.querySelector('.save')

const td = document.querySelectorAll('td')

const Products = [
  {
    id: 1,
    product: "Camisa",
    value: 90,
  },
  {
    id: 2,
    product: "Blusa",
    value: 50,
  },
  {
    id: 3,
    product: "Short",
    value: 36,
  }
]

btnSave.addEventListener('click', () => {
  let productName = inputProduct.value
  let productPrice = Number(inputPrice.value)

})

td.forEach(data => {
  console.log(data)
})