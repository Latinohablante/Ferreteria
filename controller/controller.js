import { get } from "../models/get.js"
import { Mostrarproductos } from "../views/mostrarProductos.js";
import { productosCategoria } from "../views/filter.js";


export async function control(entidad){
    let datos = await get("productos");
    switch (entidad) {
        case "ObtenerProducto":
                Mostrarproductos(datos)
            break;

        case "FiltrarProducto":
                productosCategoria(datos)
            break;
    
        default:
            break;
    }

}

