import { control } from "../controller/controller.js";
import { mostrarProductosEnHTML } from "../views/mostrarProductos.js";

control("FiltrarProducto");

const mapCategorias = new Map([
    ["Herramientas", "Herramientas"],
    ["Corriente", "Luz"],
    ["Autos", "Para Autos"],
    ["Llantas", "Llantas"]
])

export function productosCategoria (data) {
    //Declaración de variables
    let categoriaMap;
    let categoriaFiltrada= new Map();
    let productosFiltrados = [];
    let categoriaName;
    let sectionProducts = document.getElementById("HerramientasTotal");
    let headProductos = document.getElementById("ProdTitulo");
    const summaryClass = document.getElementsByTagName("summary");

    //Iteración para cada una de las categorías
        for (let i = 0; i< summaryClass.length; i++) {
        summaryClass[i].childNodes[0].addEventListener("click", (e) => {
            e.preventDefault();
            categoriaMap = mapCategorias.get(summaryClass[i].childNodes[0].innerText);

            //Cambiar el color del selecionado
            for (let j = 0; j< summaryClass.length; j++) {
                if (j != i) {
                    summaryClass[j].style.backgroundColor = "#39ca89";
                }
            }
            
            summaryClass[i].style.backgroundColor = "#52c08f";
            summaryClass[i].childNodes[0].style.color = "black";
            console.log("BackGround Color", summaryClass[i].style.backgroundColor);
            console.log("Color Style", summaryClass[i].childNodes[0].style.color);

            //Elimina todos los divs existentes en la sección con id "HerramientasTotales"
            while (sectionProducts.firstChild) {
                sectionProducts.removeChild(sectionProducts.lastChild);
              }
            
            //Se agarran todos los productos que coinciden con la categoría seleccionada
            data.forEach(el => {
                if (el.categoria == categoriaMap) {
                    categoriaName = categoriaMap;
                    productosFiltrados.push(el);
                }
            })

            //Se muestra en el HTML y se reinician variables para un siguiente evento
            headProductos.innerHTML = `Productos <em>(${productosFiltrados.length} disponibles)</em>`
            categoriaFiltrada[categoriaName] = productosFiltrados;
            mostrarProductosEnHTML(categoriaFiltrada);
            categoriaFiltrada = new Map();
            productosFiltrados = [];
        })    
    }
}


