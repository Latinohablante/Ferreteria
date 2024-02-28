import { control } from "../controller/controller.js";

control("CarritoCompras");

let categorias = []

console.log(categorias) 

const botonComprar = document.getElementById("BotonComprar")
const targeta = document.getElementById("ContCarrito")
botonComprar.addEventListener("click",()=>{
    targeta.style.display = (targeta.style.display === 'flex') ? 'none' : 'flex';
    targeta.innerHTML = `
    <div id="TargetaUnica" class="box">
    <button  class="delete is-large"></button>
      <p> Nombre: </p>
      <img src="" alt="">
      <p>Cantidad: </p>
      <p>Total: </p>
      <p>Total a pagar </p>
      
    </div>`
    console.log("hola")
    console.log(producto)
    AgregarProducto(producto)
})


export function AgregarProducto(producto) {
    if (Array.isArray(data) && data.length > 0) {
  
      data.forEach(producto => {
        if (producto.categoria) {
  
          if (!categorias[producto.categoria]) {
            categorias[producto.categoria] = [];
          }
          categorias[producto.categoria].push(producto);
        } else {
          console.error("El producto no tiene una propiedad 'categoria' definida.");
        }
      });
    } else {
      console.error("La respuesta del servidor no es un array válido o está vacía.");
    }
  }
