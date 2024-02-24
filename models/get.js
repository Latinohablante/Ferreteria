import { db } from "../db/db.js";
import {collection, getDocs} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"


// get entidad "productos"
export async function get(EntidadBd){
    let data = []
    try {
        const querySnapshot = await getDocs(collection(db, EntidadBd));
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
    } catch (error) {
        console.error(error)
        return []    
    }

    return data  
}









