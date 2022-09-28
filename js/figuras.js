// JSON CON SPREAD

const producto1 ={
  titulo : 'Nekopara - Chocola Pop Up Parade Figure (Re-Run',
  precio : 39.99,
  disponible: true
}

const producto1Str = JSON.stringify(producto1)

localStorage.setItem("producto" , producto1Str)

const producto2 ={ ...producto1}
  producto2.titulo = 'The Legend Of Heroes - Altina Orion Figure',
  producto2.precio = '149.99',
  
[]
const producto2Str = JSON.stringify(producto2)

localStorage.setItem("producto1" , producto2Str)

const producto3 ={ ...producto1}
  producto3.titulo = 'Princess Connect! Re: Dive - Pecorine Nendoroid',
  producto3.precio = '64.99',


[]
const producto3Str = JSON.stringify(producto3)

localStorage.setItem("producto2" , producto3Str)


