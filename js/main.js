class Product {
  constructor(root) {
    this.root = document.querySelector(root)
    this.id = 1

    const btn = this.root.querySelector('.save')

    btn.onclick = () => {
      this.save()
    }
  }

  save() {
    let product = this.getUserDate()
    console.log(product)
  }

  getUserDate() {
    let products = {}

    products.id = this.id
    products.productName = document.querySelector('#product').value
    products.productPrice = Number(document.querySelector('#price').value)
    
    return products
  }

}

const product = new Product(".app")

// function createTR() {
//   const tr = document.createElement('tr')
//   let productName = inputProduct.value
//   let productPrice = Number(inputPrice.value)

//   tr.innerHTML = `
//   <td class="product_number">1</td>
//   <td class="product_name">${productName}</td>
//   <td class="product_price">${productPrice}</td>
//   <td class="table_button">
//     <button class="edit">Editar</button>
//     <button class="delete">Deletar</button>
//   </td>  
//   `
//   return tr
// }  

