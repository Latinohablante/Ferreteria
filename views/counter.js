

export let arrayProductosCarrito = [];

export let counter = document.addEventListener("DOMContentLoaded", () => {
    let cont;
    let numCont;
    let numDIvCont;

    document.body.addEventListener("click", (e) => {
        
        const carritoDiv = document.getElementsByClassName("NumCarrito");
        let numCarrito = carritoDiv[0].innerText;
        let arrayProductoClick = [];
        let nombreProducto;
        let imgProducto;
        let precioProducto;
        let flag = "s";
        if (e.target.innerText == "+") {
            nombreProducto = document.elementFromPoint(e.x + 30, e.y).children[0].innerText;
            imgProducto =  document.elementFromPoint(e.x, e.y - 20).children[2].attributes[0].value;
            precioProducto = document.elementFromPoint(e.x, e.y - 20).children[3].innerText;

            //console.log("El div que hay arriba", document.elementFromPoint(e.x + 30, e.y).children[0].innerText)
            console.log("Precio", precioProducto.split(":")[1].trim());
            numCarrito = carritoDiv[0].innerText;
            cont = document.elementFromPoint(e.x - 30, e.y);
            numCont = document.elementFromPoint(e.x - 30, e.y).innerText;
            document.elementFromPoint(e.x -30, e.y).innerText = `${Number(numCont) + 1}`
            numDIvCont = document.elementFromPoint(e.x - 30, e.y).innerText;
            if (numCarrito == "") {
                carritoDiv[0].innerText = "1";
            } else {
                carritoDiv[0].innerText = `${Number(numCarrito) + 1}`
            }

            if (arrayProductosCarrito.length === 0) {

            }
            arrayProductoClick.push(nombreProducto, imgProducto, precioProducto.split(":")[1].trim(), numDIvCont);
            if (arrayProductosCarrito.length == 0) {
                arrayProductosCarrito.push(arrayProductoClick)
            } else {
                for(let j = 0; j < arrayProductosCarrito.length; j++){
                    if(arrayProductosCarrito[j][0] == nombreProducto ) {
                        arrayProductosCarrito[j][3] = numDIvCont
                        flag = "b"
                        break
                    }
                }

                if ( flag == "s"){
                    arrayProductosCarrito.push(arrayProductoClick)
                
                }
                }

            
            
            console.log("array Producto", arrayProductosCarrito)

            
        } else if (e.target.innerText == "-") {
            numCarrito = carritoDiv[0].innerText;
            cont = document.elementFromPoint(e.x + 30, e.y);
            numCont = document.elementFromPoint(e.x + 30, e.y).innerText;
            if (Number(numCont) <= 0) {
                document.elementFromPoint(e.x + 30, e.y).innerText == "0"
                numDIvCont = document.elementFromPoint(e.x + 30, e.y).innerText;
            } else {
                document.elementFromPoint(e.x + 30, e.y).innerText = `${Number(numCont) - 1}`
                numDIvCont = document.elementFromPoint(e.x + 30, e.y).innerText;
                carritoDiv[0].innerText = `${Number(numCarrito) - 1}`;
            }

            if (numCarrito == "") {
                carritoDiv[0].innerText = "0";
            } else if (numCarrito == "0") {
                carritoDiv[0].innerText = "0";
            }   else {
                
            }
            
            //console.log("DEBO RESTAR");
            //console.log(e.x, e.y);
        } else {
            //console.log(e.x, e.y);
        }
    })

})

