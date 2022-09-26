// JSON

const producto1 ={
  titulo : "Nekopara - Chocola Pop Up Parade Figure (Re-Run",
  precio : 39.99,
  disponible: true
}

const producto1Str = JSON.stringify(producto1)

localStorage.setItem("producto" , producto1Str)

const producto2 ={
  titulo : "The Legend Of Heroes - Altina Orion Figure",
  precio : 149.99,
  disponible: true
}

const producto2Str = JSON.stringify(producto2)

localStorage.setItem("producto1" , producto2Str)

const producto3 ={
  titulo : "Princess Connect! Re: Dive - Pecorine Nendoroid",
  precio : 64.99,
  disponible: true
}

const producto3Str = JSON.stringify(producto3)

localStorage.setItem("producto2" , producto3Str)