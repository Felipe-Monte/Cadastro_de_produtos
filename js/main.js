class Product {
  constructor(root) {
    this.root = document.querySelector(root)
    this.productArray = []

    const itens = JSON.parse(localStorage.getItem("list") || "[]")

    for(let i = 0; i < itens.length; i++){
      console.log(itens[i])
    }

    const btnSave = document.querySelector('.save')

    btnSave.onclick = () => { this.update() }
  }

  update() {
    let products = this.getUserData()
    this.productArray.push(products)
    this.save()


    const tbody = document.querySelector('table tbody')
    const row = tbody.insertRow()

    const row_id = row.insertCell()
    const row_name = row.insertCell()
    const row_price = row.insertCell()
    const row_action = row.insertCell()

    row_id.innerHTML = products.id
    row_name.innerHTML = products.name
    row_price.innerHTML = products.price
    row_action.innerHTML = products.action
  }

  getUserData() {
    let products = {}

    products.id = 1
    products.name = document.querySelector('#product').value
    products.price = Number(document.querySelector('#price').value)
    products.action = ""

    return products
  }

  save() {
    localStorage.setItem("list", JSON.stringify(this.productArray))
  }
}

const product = new Product(".app")

