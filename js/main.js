
const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')

const btnSave = document.querySelector('.save')
const btnDelete = document.querySelector('.cancel')

const tbody = document.querySelector('table tbody')

let myList = JSON.parse(localStorage.getItem('itemList') || '[]')

let id = Number(localStorage.getItem('lastId') || '1')

function render() {
  myList.forEach(element => {
    console.log(element)

    let row = tbody.insertRow()

    let td_id = row.insertCell()
    let td_name = row.insertCell()
    let td_price = row.insertCell()
    let td_action = row.insertCell()

    td_id.innerHTML = element.id
    td_name.innerHTML = element.name
    td_price.innerHTML = element.price
    td_action.innerHTML = element.action
  });
}
render()

btnSave.addEventListener('click', function () {
  tbody.innerHTML = ''

  getDataUser()
  save()
  render()
})

function getDataUser() {

  let productName = inputProduct.value
  let productPrice = Number(inputPrice.value)

  let products = {
    id: id++,
    name: productName,
    price: productPrice,
    action: "##"
  }

  myList.push(products)

  return products
}

btnDelete.addEventListener('click', function () {
  // myList.forEach(element => {
  //   element.remove()
  // })
  // render()
})

function save() {
  localStorage.setItem('itemList', JSON.stringify(myList))
  localStorage.setItem('lastId', id.toString())
}
