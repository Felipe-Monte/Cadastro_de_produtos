
const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')

const btnSave = document.querySelector('.save')

const tbody = document.querySelector('table tbody')

const data = []
let id = 1

function render() {
  let myList = JSON.parse(localStorage.getItem('itemList'))
  console.log(myList)
}
render()

btnSave.addEventListener('click', function () {
  const products = getDataUser()
  data.push(products)
  save()
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
  products.action = '##'

  td_id.innerHTML = id++
  td_name.innerHTML = products.name
  td_price.innerHTML = products.price
  td_action.innerHTML = products.action

  return products
}

function save() {
  localStorage.setItem('itemList', JSON.stringify(data))
}
