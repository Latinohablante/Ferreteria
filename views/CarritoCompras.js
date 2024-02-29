import { control } from "../controller/controller.js";
import { counter } from "./counter.js"
import { categorias } from "./mostrarProductos.js"
import  {arrayProductosCarrito} from "./counter.js"
control("CarritoCompras");

console.log(arrayProductosCarrito)




console.log(categorias)

function aggProdDom(prod){
  let targetacarrito = document.getElementById("ContCarrito")
  targeta = `
    <div id="TargetaUnica" class="">
      <p> Nombre: ${prod[0]} </p>
      <img src="${prod[1]}" alt="">
      <p>Cantidad: ${prod[3]} </p>
      <p>Precio unitario: $${prod[2]}</p>
      <p>Total:$${prod[2]*prod[3]} </p>
      
    </div>`

    targetacarrito.innerHTML += targeta

}
let total = 0;
const botonComprar = document.getElementById("BotonComprar")
let totalCArrito = document.getElementById("valorTotal")
let targeta = document.getElementById("ContCarrito")

botonComprar.addEventListener("click",()=>{
    targeta.style.display = (targeta.style.display === 'flex') ? 'none' : 'flex';
    arrayProductosCarrito.forEach(prod =>{
      total += prod[3] * prod[2]
      
      console.time(total)
      console.timeEnd(total)
      totalCArrito.innerText = `Valor a pagar: $${total}`
      
  aggProdDom(prod)
  
    })
    
})


const cerrarCarro = document.getElementById("CerrarCarrito")
const botonelimca = document.getElementById("ContCarrito")
cerrarCarro.addEventListener("click",()=>{
  botonelimca.style.display = "none"
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
