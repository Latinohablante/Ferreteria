import { control } from "../controller/controller.js";

control("ObtenerProducto");


let categorias = [];


export function mostrarProductosEnHTML(categorias) {
  let productoHTML = "";
  for (const categoria in categorias) {
    if (categorias.hasOwnProperty(categoria)) {
        //console.log(categoria)
      const productos = categorias[categoria];

      const contenedor = document.getElementById('HerramientasTotal');
      
      if (contenedor) {
        productos.forEach(producto => {
          productoHTML = `<div class="herramientasDIV box is-mobile"> ${producto.nombre} <br>  <img src="${producto.urlImg}" alt=""> Precio: ${producto.precio}
          <div id="contenedorPrecio">
          <button style="cursor: pointer ;" class = "is-primary" id="disminuir">-</button>
          <p id="DatosContador">0</p>
          <button style="cursor: pointer ;" class = "is-primary" id="aumentar">+</button>
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


export function Mostrarproductos(data) {
  //console.log(data);

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

const Registrar = document.getElementById("Bresgistrar")
const DespIni = document.getElementById("Inicio")
const contDes = document.getElementById("containerInicio")
const BotonElim = document.getElementById("BotonElim")

Registrar.addEventListener("click", ()=>{
  DespIni.classList.toggle("Inicio_sesion2")
  contDes.classList.toggle("Inicio_sesion2")
  contDes.style.display = (contDes.style.display === 'flex') ? 'none' : 'flex';

}
)
BotonElim.addEventListener("click",()=>{
  contDes.style.display = (contDes.style.display === 'none') ? 'flex' : 'none';
  DespIni.classList.toggle("Inicio_sesion2")
  contDes.classList.toggle("Inicio_sesion2")
})

//Mostrarproductos();
