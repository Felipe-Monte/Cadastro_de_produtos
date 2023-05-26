class Product {
  constructor(root) {
    this.root = document.querySelector(root)
    this.id = 1
    this.arrayProduct = []

    const btn = this.root.querySelector('.save')

    btn.onclick = () => { this.render() }
  }

  render() {
    let product = this.getUserDate()

    if (this.checkInputEmpty(product)) {
      return
    }

    this.arrayProduct.push(product)
    console.log(this.arrayProduct)

    const tbody = document.querySelector('table tbody')

    tbody.innerHTML = ''
    for (let i = 0; i < this.arrayProduct.length; i++) {
      let product = this.arrayProduct[i]

      const row = tbody.insertRow()

      let row_id = row.insertCell()
      let row_product = row.insertCell()
      let row_price = row.insertCell()
      let row_action = row.insertCell()

      row_id.innerHTML = product.id
      row_product.innerHTML = product.productName
      row_price.innerHTML = product.productPrice
      row_action = ''
    }

  }

  getUserDate() {
    let products = {}

    products.id = this.id
    products.productName = document.querySelector('#product').value
    products.productPrice = Number(document.querySelector('#price').value)

    return products
  }

  checkInputEmpty(product) {
    let msg = "Ambos os campos são obrigatórios"
    if (product.productName == '' || product.productPrice == '') {
      alert(msg)
      return true
    } else {
      return false
    }
  }
}

const product = new Product(".app")

