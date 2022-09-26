

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

// Botones de compra

 function comprarboton () {
    document.getElementById("comprarBoton").innerHTML = "Agregaste al carrito";
  };

  function comprarboton1 () {
    document.getElementById("comprarBoton1").innerHTML = "Agregaste al carrito";
  };

  function comprarBoton2 () {
    document.getElementById("comprarBoton2").innerHTML = "Agregaste al carrito";
  };



