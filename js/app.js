

// // Formulario

// const formulario = document.getElementsByClassName("caja--index");

// console.log(formulario);


// // Delete

// const testdelete = document.querySelector(".testdelete");

// testdelete.remove();

// // Creando elemento desde javascript

//  let agregar = document.createElement("p")
//  agregar.innerHTML = "<h5>Test Dom</h5>";
//  document.body.appendChild(agregar);


// // Operador



// // Botones de compra

// //  function comprarboton () {
// //     document.getElementById("comprarBoton").innerHTML = "Agregaste al carrito";
// //   };

// //   function comprarboton1 () {
// //     document.getElementById("comprarBoton1").innerHTML = "Agregaste al carrito";
// //   };

// //   function comprarBoton2 () {
// //     document.getElementById("comprarBoton2").innerHTML = "Agregaste al carrito";
// //   };



// // Librerias

// const btn = document.querySelector("#comprarBoton")
// btn.addEventListener('click', () => {
//   Swal.fire(
//     'Genial!',
//     'Agregaste el producto al carrito',
//     'success'
//   )
// })

// const btn1 = document.querySelector("#comprarBoton1")
// btn1.addEventListener('click', () => {
//   Swal.fire(
//     'Genial!',
//     'Agregaste el producto al carrito',
//     'success'
//   )
// })

// const btn2 = document.querySelector("#comprarBoton2")
// btn2.addEventListener('click', () => {
//   Swal.fire(
//     'Genial!',
//     'Agregaste el producto al carrito',
//     'success'
//   )
// })


// // Usuario con destructuracion

// let cliente = {
//   nombre: "Miles",
//   apellido: "Morales",
//   edad: 35
// }

// let {nombre,apellido,edad} = cliente;
// console.log(nombre,apellido,edad)

// let dinero = 500;
// let comprar = "Comprar";

// (dinero == 500) && (comprar== "Comprar") ? console.log("Podes comprar") : console.log("NO podes comprar")




const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById(`carrito-contenedor`)

const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
let carrito = []

botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
}
)

stockProductos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <img src=${producto.img} alt=""
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <p class="precioProducto">Precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart></i></button>
  `
  contenedorProductos.appendChild(div)

  const boton = document.getElementById('agregar${producto.id}')
  

  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
  })

})

const agregarAlCarrito = (prodId) => {
  const item = stockProductos.find ((prod) => prod.id === prodId)
  carrito.push(item)
  actualizarCarrito()
  console.log(carrito)
}

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""

  carrito.forEach((prod) => {
    const div =document.createElement('div')
    div.className = ('productoENCarrito')
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantiadad: <span id="cantidad">${prod.cantidad}</span></p>
    <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt></i>
    `
    contenedorCarrito.appendChild(div)
  })

  contenedorCarrito.innerText = carrito.length
}


