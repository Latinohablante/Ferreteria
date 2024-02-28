import { control } from "../controller/controller.js";
import { counter } from "./counter.js"
import { categorias } from "./mostrarProductos.js"
control("CarritoCompras");



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



export function AgregarProducto(data) {

    if (Array.isArray(data) && data.length > 0) {
  
      data.forEach(producto => {
        if (producto.categoria) {
  
          if (!categorias[producto.categoria]) {
            categorias[producto.categoria] = [];
          }
          categorias[producto.categoria].push(producto);
          console.log(Object.keys(categorias).length) 
        } else {
          console.error("El producto no tiene una propiedad 'categoria' definida.");
        }
      });
    } else {
      console.error("La respuesta del servidor no es un array válido o está vacía.");
    }
  }

  function cargarProductos() {
    productos.forEach(producto => {
      producto.elemento = document.getElementById(producto.id);
  
      fetch('productos.json')
        .then(respuesta => respuesta.json())
        .then(respuesta => {
          respuesta[producto.tipo].forEach(item => {
            const agg = document.createElement('header');
            agg.innerHTML = `
              <h1>${item.nombre}</h1>
              <img src="${item.img}" alt="${item.nombre}">
              <p>Precio: ${item.precio}</p>
              <div class ='ventaBoton'>
                <button id='botonAgregar' class='agregarAlcarro' data-precio='${item.precio}'>Agregar</button>
              </div>
            `;
            producto.elemento.appendChild(agg);
  
            const botonAgregar = agg.querySelector('.agregarAlcarro');
            botonAgregar.addEventListener('click', function() {
              const botonCanasta = document.getElementById('CarroCompras');
              botonCanasta.style.backgroundColor = 'rgb(58, 248, 0)';
              const precio = item.precio;
              const nombre = item.nombre;
              agregarAlCarrito(precio, nombre);
  
             
              if (listPro[nombre]) {
                listPro[nombre] += 1;
              } else {
                listPro[nombre] = 1;
              }
  
              console.log("Contador de productos:", listPro);
            });
          });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
    });
  }
