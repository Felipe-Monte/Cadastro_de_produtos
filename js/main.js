class Product {
  constructor(root) {
    this.root = document.querySelector(root)
    this.productArray = []


    const btn = document.querySelector('.save')

    btn.onclick = () => {
      this.update()
    }
  }

  update() {
    let products = this.getUserData()

    const tbody = document.querySelector('table tbody')
    const row = tbody.insertRow()
    row.insertCell()
    row.insertCell()
    row.insertCell()
    row.insertCell()
  }

  getUserData() {
    let products = {}

    products.id = 1
    products.name = document.querySelector('#product').value
    products.price = Number(document.querySelector('#price').value)
    products.action = ""

    return products
  }

}

const product = new Product(".app")

