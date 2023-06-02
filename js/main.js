
const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')

const btnSave = document.querySelector('.save')

const tbody = document.querySelector('table tbody')

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

  let row = tbody.insertRow()

  let td_id = row.insertCell()
  let td_name = row.insertCell()
  let td_price = row.insertCell()
  let td_action = row.insertCell()

  products.name = productName
  products.price = productPrice
  products.action = 'action were'

  td_id.innerHTML = '0'
  td_name.innerHTML = products.name
  td_price.innerHTML = products.price
  td_action.innerHTML = products.action

  return products
}
