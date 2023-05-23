const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')
const btnSave = document.querySelector('.save')
const btnCancel = document.querySelector('.cancel')

const tr = document.querySelectorAll('tbody tr')

const Products = [
  {
    id: 1,
    product: "Joia",
    value: 90,
  },
  {
    id: 2,
    product: "Dado",
    value: 50,
  },
  {
    id: 3,
    product: "Livro",
    value: 36,
  }
]

// function userData() {
//   const tbody = document.querySelector('table tbody')

//   Products.forEach(data => {
//     const row = createTR()

//     row.querySelector('.product_number').innerHTML = `${data.id}`
//     row.querySelector('.product_name').innerHTML = `${data.product}`
//     row.querySelector('.product_price').innerHTML = `${data.value}`

//     tbody.append(row)
//   })
// }
// userData()

let id = 0
function createTR() {
  let productName = inputProduct.value
  let productPrice = Number(inputPrice.value)
  const tr = document.createElement('tr')
  tr.innerHTML = `
  <td class="product_number">${++id}</td>
  <td class="product_name">${productName}</td>
  <td class="product_price">${productPrice}</td>
  <td class="table_button">
    <button class="edit">Editar</button>
    <button class="delete">Deletar</button>
  </td>
  `
  return tr
}

function renderTable() {
  let tbody = document.querySelector('table tbody')
  let tr = createTR()
  tbody.append(tr)
}

btnSave.addEventListener('click', () => {
  let productName = inputProduct.value
  let productPrice = Number(inputPrice.value)

  if (!productName) {
    return alert('Product name is mandatory')
  }
  renderTable()
})

tr.forEach(data => {
  data.remove()
})

btnCancel.addEventListener('click', () => {
  inputProduct.value = ''
  inputPrice.value = ''
  inputProduct.focus()
})
