

document.addEventListener("DOMContentLoaded", () => {


    document.body.addEventListener("click", (e) => {
        let cont;
        let numCont;
        const carritoDiv = document.getElementsByClassName("NumCarrito");
        let numCarrito = carritoDiv[0].innerText;
        //console.log(carritoDiv[0].innerText);
        if (e.target.innerText == "+") {
            //console.log("DEBO SUMAR");
            console.log("El div que hay arriba", document.elementFromPoint(e.x, e.y - 25).children[1].attributes[0].value)
            console.log("Precio", document.elementFromPoint(e.x, e.y - 20).children[2].innerText)
            numCarrito = carritoDiv[0].innerText;
            cont = document.elementFromPoint(e.x - 30, e.y);
            numCont = document.elementFromPoint(e.x - 30, e.y).innerText;
            document.elementFromPoint(e.x -30, e.y).innerText = `${Number(numCont) + 1}`
            if (numCarrito == "") {
                carritoDiv[0].innerText = "1";
            } else {
                carritoDiv[0].innerText = `${Number(numCarrito) + 1}`
            }
            //console.log(e.x, e.y);
        } else if (e.target.innerText == "-") {
            numCarrito = carritoDiv[0].innerText;
            cont = document.elementFromPoint(e.x + 30, e.y);
            numCont = document.elementFromPoint(e.x + 30, e.y).innerText;
            if (Number(numCont) <= 0) {
                document.elementFromPoint(e.x + 30, e.y).innerText == "0"
            } else {
                document.elementFromPoint(e.x + 30, e.y).innerText = `${Number(numCont) - 1}`
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
