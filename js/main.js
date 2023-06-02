
const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')

const btnSave = document.querySelector('.save')

const tbody = document.querySelector('table tbody')

let myList = JSON.parse(localStorage.getItem('itemList') || '[]')
console.log(myList)

let id = Number(localStorage.getItem('lastId') || '1')

function render() {
  for (let i = 0; i < myList.length; i++) {
    let items = myList[i]
    
    let row = tbody.insertRow()

    let td_id = row.insertCell()
    let td_name = row.insertCell()
    let td_price = row.insertCell()
    let td_action = row.insertCell()

    td_id.innerHTML = items.id
    td_name.innerHTML = items.name
    td_price.innerHTML = items.price
    td_action.innerHTML = items.action
  }
}
render()

btnSave.addEventListener('click', function () {
  const products = getDataUser()
  myList.push(products)
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

  products.id = id++
  products.name = productName
  products.price = productPrice
  products.action = '##'

  td_id.innerHTML = products.id
  td_name.innerHTML = products.name
  td_price.innerHTML = products.price
  td_action.innerHTML = products.action

  return products
}

function save() {
  localStorage.setItem('itemList', JSON.stringify(myList))
  localStorage.setItem('lastId', id.toString())
}
