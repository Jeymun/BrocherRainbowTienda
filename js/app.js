
const formulario = document.getElementsByClassName("caja--index");

console.log(formulario);

const testdelete = document.querySelector(".testdelete");

testdelete.remove();

 let agregar = document.createElement("p")
 agregar.innerHTML = "<h5>Test Dom</h5>";
 document.body.appendChild(agregar);

 function comprarboton () {
    document.getElementById("comprarBoton").innerHTML = "Agregaste al carrito";
  };

  function comprarboton1 () {
    document.getElementById("comprarBoton1").innerHTML = "Agregaste al carrito";
  };

  function comprarBoton2 () {
    document.getElementById("comprarBoton2").innerHTML = "Agregaste al carrito";
  };
