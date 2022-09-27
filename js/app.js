

// Formulario

const formulario = document.getElementsByClassName("caja--index");

console.log(formulario);


// Delete

const testdelete = document.querySelector(".testdelete");

testdelete.remove();

// Creando elemento desde javascript

 let agregar = document.createElement("p")
 agregar.innerHTML = "<h5>Test Dom</h5>";
 document.body.appendChild(agregar);


// Operador



// Botones de compra

//  function comprarboton () {
//     document.getElementById("comprarBoton").innerHTML = "Agregaste al carrito";
//   };

//   function comprarboton1 () {
//     document.getElementById("comprarBoton1").innerHTML = "Agregaste al carrito";
//   };

//   function comprarBoton2 () {
//     document.getElementById("comprarBoton2").innerHTML = "Agregaste al carrito";
//   };



// Librerias

const btn = document.querySelector("#comprarBoton")
btn.addEventListener('click', () => {
  Swal.fire(
    'Genial!',
    'Agregaste el producto al carrito',
    'success'
  )
})

const btn1 = document.querySelector("#comprarBoton1")
btn1.addEventListener('click', () => {
  Swal.fire(
    'Genial!',
    'Agregaste el producto al carrito',
    'success'
  )
})

const btn2 = document.querySelector("#comprarBoton2")
btn2.addEventListener('click', () => {
  Swal.fire(
    'Genial!',
    'Agregaste el producto al carrito',
    'success'
  )
})
