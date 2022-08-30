// const dinero = 600
// const totalAPagar = 500

// if (dinero > totalAPagar) {
//     console.log("Podemos pagar")
// } else{
//     console.log("Fondos insuficientes")
// }

// const usuario = true;
// const puedePagar = false;

// if (usuario && puedePagar) {
//     console.log("Puedes comprar");
// } else if (usuario) {
//     console.log("No puedes comprar");
// } else if (puedePagar) {
//     console.log ("No puedes pagar");
// }

// const efectivo = 300
// const credito = 500
// const disponible = efectivo + credito   
// const totalAPagarse = 600

// if (
//     efectivo > totalAPagarse ||
//     credito > totalAPagarse ||
//     disponible > totalAPagarse
//     )   {
//         console.log("Podemos comprar")
//     }
//     else{
//         console.log("Fondos insuficientes")
//     } 

// let nombreAlumno = prompt ("Ingresa el nombre del alumno")

// let apellidoAlumno = prompt ("Ingresa el apellido del alumno")

// if (nombreAlumno !== "" && apellidoAlumno !== "") {
//     alert( "Nombre: " + nombreAlumno + " Apellido " + apellidoAlumno)
// }   else{
//     alert("No ingreso datos")
// }a


for (let i = 1; i <= 15; i++) {
    if (i === 13){
    continue;
}
    alert(`El valor de I es ${i}`)
}



let precio = function (a, b){
 return a * b;   
};

let resultado = precio(3, 6);
 
console.log(resultado);

const advertencia = function () {
    return "Peligro"

};

