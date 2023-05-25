class Product {
  constructor(root) {
    this.root = document.querySelector(root)
    this.id = 1
    this.arrayProduct = []

    const btn = this.root.querySelector('.save')

    btn.onclick = () => {
      this.render()
      this.getObject()
    }
  }

  render() {
    let product = this.getUserDate()

    if (this.checkInputEmpty(product)) {
      return
    }

    this.arrayProduct.push(product)
    // console.log(this.arrayProduct)
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

  getObject() {
    const products = this.getUserDate()

    if (products.productName == '' || products.productPrice == '') {
      return 
    }

    const tbody = document.querySelector('table tbody')
    const row = document.createElement('tr')
    row.innerHTML = `
    <td class="product_number">1</td>
    <td class="product_name">${products.productName}</td>
    <td class="product_price">${products.productPrice}</td>
    <td class="table_button">
     <button class="edit">Editar</button>
     <button class="delete">Deletar</button>
    </td>
    `
    tbody.append(row)
    console.log(row)
  }

}

const product = new Product(".app")

