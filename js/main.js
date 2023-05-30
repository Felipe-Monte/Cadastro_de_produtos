class Product {
  constructor(root) {
    this.root = document.querySelector(root)
    
    const items = JSON.parse(localStorage.getItem("list") || "[]")
    this.productArray = items

    for (let i = 0; i < items.length; i++) {
      const tbody = document.querySelector('table tbody')
      const row = tbody.insertRow()
  
      const row_id = row.insertCell()
      const row_name = row.insertCell()
      const row_price = row.insertCell()
      const row_action = row.insertCell()

      row_id.innerHTML = items[i].id
      row_name.innerHTML = items[i].name
      row_price.innerHTML = items[i].price
      row_action.innerHTML = items[i].action
    }

    const btnSave = document.querySelector('.save')
    const btnDelete = document.querySelector('.cancel')

    this.checkClickInDelete()

    btnSave.onclick = () => { this.update() }

    btnDelete.onclick = () => {
      this.deleteAllRow()
      this.productArray = []
      this.save()
    }
  }

  update() {
    let products = this.getUserData()

    if(this.checkVerification(products)) {
      return alert('campo vazio')
    }

    this.productArray.push(products)
    this.save()

    document.querySelector("#product").value = ""
    document.querySelector('#price').value = ""
    document.querySelector("#product").focus()

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

    this.checkClickInDelete()
  }

  getUserData() {
    let products = {}

    products.id = 1
    products.name = document.querySelector('#product').value
    products.price = Number(document.querySelector('#price').value)
    products.action = `<button class="edit">Editar</button>
    <button class="delete">Deletar</button>`

    return products
  }

  save() {
    localStorage.setItem("list", JSON.stringify(this.productArray))
  }

  deleteAllRow() {
    const row = document.querySelectorAll('table tbody td')
    row.forEach(elements => {
      elements.remove()
    })
  }

  checkVerification(product) {
    if(product.name == "" || product.price == ""){
      return true
    } else {
      return false
    }
  }
 
  checkClickInDelete() {
    const allTr = document.querySelectorAll('tbody tr')

    allTr.forEach(item => {
      item.querySelector('.delete').onclick = () => {
        let isOk = confirm("Deseja deletar ?")
      }
    })
  }
}

const product = new Product(".app")

