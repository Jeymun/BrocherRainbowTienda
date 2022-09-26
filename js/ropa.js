// JSON

const producto1 ={
  titulo : "My Hero Academia - Eraser Head T-Shirt",
  precio : 24.95,
  disponible: true
}

const producto1Str = JSON.stringify(producto1)

localStorage.setItem("producto" , producto1Str)

const producto2 ={
  titulo : "My Hero Academia - Deku Bakugo Plus Ultra Dye T-Shirt - Crunchyroll Exclusive!",
  precio : 29.95,
  disponible: true
}

const producto2Str = JSON.stringify(producto2)

localStorage.setItem("producto1" , producto2Str)

const producto3 ={
  titulo : "PMy Hero Academia - Himiko Toga Hoodie",
  precio : 54.95,
  disponible: true
}

const producto3Str = JSON.stringify(producto3)

localStorage.setItem("producto2" , producto3Str)