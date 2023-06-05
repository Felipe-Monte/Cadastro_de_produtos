
const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')

const btnSave = document.querySelector('.save')
const btnDelete = document.querySelector('.cancel')

const tbody = document.querySelector('table tbody')

let myList = JSON.parse(localStorage.getItem('itemList') || '[]')

let id = Number(localStorage.getItem('lastId') || '1')

function render() {
  myList.forEach(element => {

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
  
  if (!productName || !productPrice) {
    return alert("Preencha os campos")
  }

  let products = {
    id: id++,
    name: productName,
    price: productPrice,
    action: td.innerHTML
  }

  myList.push(products)

  return products
}

btnDelete.addEventListener('click', function () {
  let row = document.querySelectorAll('tbody tr')

  if (checkConfirm()) {
    row.forEach(element => {
      element.remove()
    })

    localStorage.clear()
  }
})

function checkConfirm() {
  let isOk = confirm("Deseja deletar ?")
  if (isOk) {
    return true
  } else {
    return false
  }
}

function save() {
  localStorage.setItem('itemList', JSON.stringify(myList))
  localStorage.setItem('lastId', id.toString())
}

function createTD() {
  let td = document.createElement('td')
  td.innerHTML = `<button class="edit">Editar</button>
  <button class="delete">Deletar</button>`
  return td
}