// // Botones de compra

function comprarboton () {
    document.getElementsByClassName("boton-buy").innerHTML = "Agregaste al carrito";
  };



// // Librerias

const btn = document.querySelector(".boton-buy")
btn.addEventListener('click', () => {
  Swal.fire(
    'Genial!',
    'Agregaste el producto al carrito',
    'success'
  )
})

