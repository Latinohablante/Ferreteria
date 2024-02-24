import { get } from "../models/get.js"
import { Mostrarproductos } from "../views/mostrarProductos.js";


export async function control(entidad){
   switch (entidad) {
        case "ObtenerProducto":
                let datos = await get("productos")
                Mostrarproductos(datos)
            break;
    
        default:
            break;
    }

}

