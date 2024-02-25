import { control } from "../controller/controller.js";

control("ObtenerProducto");


let categorias = {};


export function Mostrarproductos(data) {
  console.log(data);

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

    console.log(categorias);

    mostrarProductosEnHTML(categorias);
  } else {
    console.error("La respuesta del servidor no es un array válido o está vacía.");
  }
}

function mostrarProductosEnHTML(categorias) {
  for (const categoria in categorias) {
    if (categorias.hasOwnProperty(categoria)) {
        console.log(categoria)
      const productos = categorias[categoria];

      const contenedor = document.getElementById('HerramientasTotal');
      
      if (contenedor) {
        productos.forEach(producto => {
          const productoHTML = `<div class="herramientasDIV box"> ${producto.nombre} <br>  <img src="${producto.urlImg}" alt=""> Precio: ${producto.precio}
          <div id="contenedorPrecio">
          <button class = "button is-link" id="disminuir">-</button>
          <p id="DatosContador">0</p>
          <button class = "button is-link" id="aumentar">+</button>
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
let ves = 0;

document.addEventListener("DOMContentLoaded", function () {
  let p = document.getElementById('DatosContador');
  let cont = document.getElementById('aumentar');
  let contMenos = document.getElementById('disminuir');

  if (cont && contMenos && p) {
    cont.addEventListener('click', () => {
      ves++;
      p.textContent = ves;
    });

    contMenos.addEventListener('click', () => {
      if (ves > 0) {
        ves--;
      }
      p.textContent = ves;
    });
  } else {
    console.error("No se encontraron algunos elementos en el DOM.");
  }
});

Mostrarproductos();
