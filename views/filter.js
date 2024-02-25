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
    //console.log(data);
    let categoriaMap;
    let categoriaFiltrada= new Map();
    let productosFiltrados = [];
    let categoriaName;
    let sectionProducts = document.getElementById("HerramientasTotal");
    const summaryClass = document.getElementsByTagName("summary");
    console.log("Divs: ", sectionProducts)
    for (let i = 0; i< summaryClass.length; i++) {
        summaryClass[i].childNodes[0].addEventListener("click", (e) => {
            e.preventDefault();
            categoriaMap = mapCategorias.get(summaryClass[i].childNodes[0].innerText);
            while (sectionProducts.firstChild) {
                sectionProducts.removeChild(sectionProducts.lastChild);
              }
            //console.log(categoriaMap);
            data.forEach(el => {
                if (el.categoria == categoriaMap) {
                    categoriaName = categoriaMap;
                    productosFiltrados.push(el);
                }
            })
            
            categoriaFiltrada[categoriaName] = productosFiltrados;
            //categoriaArrayMap.push(categoriaFiltrada);
            console.log("categoria Filtrada",categoriaFiltrada[categoriaName]);
            mostrarProductosEnHTML(categoriaFiltrada);
            categoriaFiltrada = new Map();
            console.log("Comprobar categoriaFiltrada", categoriaFiltrada)
            productosFiltrados = [];
        })    
    }
}

//productosCategoria();