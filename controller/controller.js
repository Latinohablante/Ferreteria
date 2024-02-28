import { get } from "../models/get.js"
import {ObtenerProducto } from "../views/mostrarProductos.js";



export async function control(entidad){
    switch (entidad) {
        case "ObtenerProducto":
                let datos = await get("productos");
                ObtenerProducto(datos)
            break;
        default:
            break;
    }

}



