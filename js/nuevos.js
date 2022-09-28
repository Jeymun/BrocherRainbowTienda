// JSON CON SPREAD

const producto1 ={
  titulo : "Lycoris Recoil - Chisato Nishikigi PM Perching Figure",
  precio : 29.99,
  disponible: true
}

const producto1Str = JSON.stringify(producto1)

localStorage.setItem("producto" , producto1Str)

const producto2 ={ ...producto1}
  producto2.titulo = 'Lycoris Recoil - Takina Inoue PM Perching Figure',
  producto2.precio = '29.99',
  
[]
const producto2Str = JSON.stringify(producto2)

localStorage.setItem("producto1" , producto2Str)

const producto3 ={ ...producto1}
  producto3.titulo = "Genshin Impact - Xiao (Vigilant Yaksha Ver.) Figure",
  producto3.precio = '327.99',


[]
const producto3Str = JSON.stringify(producto3)

localStorage.setItem("producto2" , producto3Str)

