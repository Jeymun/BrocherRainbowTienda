

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



