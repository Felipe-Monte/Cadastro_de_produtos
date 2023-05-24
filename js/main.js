const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')

const btnSave = document.querySelector('.save')
const btnCancel = document.querySelector('.cancel')

const tr = document.querySelectorAll('tbody tr')

let idCounter = 0

let myObject = {}

function createTR() {
  let productName = inputProduct.value
  let productPrice = Number(inputPrice.value)

  const tr = document.createElement('tr')

  tr.innerHTML = `
  <td class="product_number">${++idCounter}</td>
  <td class="product_name">${productName}</td>
  <td class="product_price">${productPrice}</td>
  <td class="table_button">
    <button class="edit">Editar</button>
    <button class="delete">Deletar</button>
  </td>
  `

  myObject.name = productName
  myObject.value = productPrice
  console.log(myObject)

  return tr
}

function renderTable() {
  let tbody = document.querySelector('table tbody')
  let tr = createTR()

  tbody.append(tr)

  tr.querySelector('.delete').onclick = () => {
    const isDelete = confirm('Deseja deletar')
    if (!isDelete) return
  }
}

btnSave.addEventListener('click', () => {
  let productName = inputProduct.value

  if (!productName) {
    return alert('Product name is mandatory')
  }
  
  renderTable()
})

btnCancel.addEventListener('click', () => {
  inputProduct.value = ''
  inputPrice.value = ''
  inputProduct.focus()
})

