import { control } from "../controller/controller.js";
import { registroUsuario} from "./registrousuario.js";
import {} from "./iniciosesion.js" 

control("ObtenerProducto");


let categorias = [];

let cont= 0



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
            <button class="button is-primary">-</button>
          </div>
          <div class="control">
            <button class="button is-primary">0</button>
          </div>
          <div class="control">
            <button class="button is-primary">+</button>
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
    console.log(typeof(valorbusqueda))
    console.log(listaproductos)
    let lp = listaproductos.filter( (list)=>{
        list.nombre.includes(valorbusqueda)
    });
    console.log(lp)
  
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


let ves = 0;

// document.addEventListener("DOMContentLoaded", function () {

//   let contador = document.getElementById("DatosContador")
//   contador.textContent = 0;

//   let cont = document.getElementById('aumentar');
//   let contMenos = document.getElementById('disminuir');

//   if (cont && contMenos && p) {
//     cont.addEventListener('click', () => {
//       ves++;
//       contador.textContent = ves;
//     });

//     contMenos.addEventListener('click', () => {
//       if (ves > 0) {
//         ves--;
//       }
//       contador.textContent = ves;
//     });
//   } else {
//     console.error("No se encontraron algunos elementos en el DOM.");
//   }
// });

//window.addEventListener("DOMContentLoaded", function (event) {
    
//});



  // window.addEventListener("load", function (event) {
  //   let btnAumentar = document.getElementById("aumentar")
  //   btnAumentar.addEventListener("click",()=>{
  //     console.log("btn aumentar")
  //   })
  // });



