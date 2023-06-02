const inputProduct = document.querySelector('#product');
const inputPrice = document.querySelector('#price');
const btnSave = document.querySelector('.save');
const tbody = document.querySelector('table tbody');

let myList = JSON.parse(localStorage.getItem('itemList')) || [];
let id = Number(localStorage.getItem('lastId')) || 1;

function render() {
  tbody.innerHTML = '';

  for (let i = 0; i < myList.length; i++) {
    let item = myList[i];

    let row = tbody.insertRow();

    let td_id = row.insertCell();
    let td_name = row.insertCell();
    let td_price = row.insertCell();
    let td_action = row.insertCell();

    td_id.textContent = item.id;
    td_name.textContent = item.name;
    td_price.textContent = item.price;
    td_action.textContent = item.action;
  }
}

render();

btnSave.addEventListener('click', function () {
  const productName = inputProduct.value;
  const productPrice = Number(inputPrice.value);

  if (!productName || !productPrice) {
    alert('Preencha todos os campos antes de salvar.');
    return;
  }

  const products = {
    id: id++,
    name: productName,
    price: productPrice,
    action: '##'
  };

  myList.push(products);
  save();
  render();

  inputProduct.value = '';
  inputPrice.value = '';
});

function save() {
  localStorage.setItem('itemList', JSON.stringify(myList));
  localStorage.setItem('lastId', id.toString());
}