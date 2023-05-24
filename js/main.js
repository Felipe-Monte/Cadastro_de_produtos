const inputProduct = document.querySelector('#product')
const inputPrice = document.querySelector('#price')

const btnSave = document.querySelector('.save')
const btnCancel = document.querySelector('.cancel')

let items = []

btnSave.addEventListener('click', () => {
  const tbody = document.querySelector('table tbody')
  let productName = inputProduct.value
  let productPrice = Number(inputPrice.value)
  
  let row = createTR()
  items.push(row)
  tbody.append(row)
  console.log(items)
})  

btnCancel.addEventListener('click', () => {
  inputProduct.value = ''
  inputPrice.value = ''
  inputProduct.focus()
})

function createTR() {
  const tr = document.createElement('tr')
  let productName = inputProduct.value
  let productPrice = Number(inputPrice.value)

  tr.innerHTML = `
  <td class="product_number">1</td>
  <td class="product_name">${productName}</td>
  <td class="product_price">${productPrice}</td>
  <td class="table_button">
    <button class="edit">Editar</button>
    <button class="delete">Deletar</button>
  </td>  
  `
  return tr
}  

