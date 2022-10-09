// // Botones de compra

function comprarboton () {
    document.getElementsByClassName("boton-agregar").innerHTML = "Agregaste al carrito";
  };

  function comprarboton1 () {
    document.getElementsByClassName("boton-agregar").innerHTML = "Agregaste al carrito";
  };

  function comprarBoton2 () {
    document.getElementsByClassName("boton-agregar").innerHTML = "Agregaste al carrito";
  };



// // Librerias

const btn = document.querySelector(".boton-agregar")
btn.addEventListener('click', () => {
  Swal.fire(
    'Genial!',
    'Agregaste el producto al carrito',
    'success'
  )
})

const btn1 = document.querySelector(".boton-agregar")
btn1.addEventListener('click', () => {
  Swal.fire(
    'Genial!',
    'Agregaste el producto al carrito',
    'success'
  )
})

const btn2 = document.querySelector(".boton-agregar")
btn2.addEventListener('click', () => {
  Swal.fire(
    'Genial!',
    'Agregaste el producto al carrito',
    'success'
  )
})
