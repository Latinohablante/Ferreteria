import { control } from "../controller/controller.js";
import { registroUsuario} from "./registrousuario.js";
import {} from "./iniciosesion.js" 

control("ObtenerProducto");

let categorias = [];

let listaproductos = []


export function mostrarProductosEnHTML(categorias) {
  let productoHTML = "";
  for (const categoria in categorias) {
    if (categorias.hasOwnProperty(categoria)) {
        //console.log(categoria)
      const productos = categorias[categoria];

      const contenedor = document.getElementById('HerramientasTotal');
      
      if (contenedor) {
        productos.forEach(producto => {
          productoHTML = `<div class="herramientasDIV box is-mobile"> ${producto.nombre} <br> 
           <img src="${producto.urlImg}" alt=""> 
          
          <div id="contenedorPrecio">
          Precio: ${producto.precio}
          </div>
          <div id="Botones-Cont">
          <div class="field has-addons">
          <div class="control">
            <button class="button is-primary restar">-</button>
          </div>
          <div class="control">
            <button class="button is-link contador">0</button>
          </div>
          <div class="control">
            <button class="button is-primary aumentar">+</button>
          </div>
          </div> 
          </div> 
          `;
          contenedor.innerHTML += productoHTML;
          
        });
        
      } else {
        console.error(`No se encontró un contenedor para la categoría ${categoria}.`);
      }
    }
  }
}





  let enviarbusqueda = document.getElementById("enviarbusqueda")

  enviarbusqueda.addEventListener("click",()=>{
    let bproducto = document.getElementById("bproducto")
    let valorbusqueda = bproducto.value
    console.log("")
  
  })






export function Mostrarproductos(data) {

  listaproductos = data
  //
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

    //console.log(categorias);

    mostrarProductosEnHTML(categorias);
  } else {
    console.error("La respuesta del servidor no es un array válido o está vacía.");
  }
}




