
const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')

const btnSave = document.querySelector('.save')

const data = []

btnSave.addEventListener('click', function () {
  const products = getDataUser()
  data.push(products)

  console.log(data)
})

function getDataUser() {
  let products = {}

  let productName = inputProduct.value
  let productPrice = Number(inputPrice.value)

  products.name = productName
  products.price = productPrice
  products.action = 'action were'

  return products
}
