


const Registrar = document.getElementById("Bresgistrar")
const DespReg = document.getElementById("Registro")
const contDes = document.getElementById("containerRegistro")
const BotonElim = document.getElementById("BotonElim")



//RegistroSesion



//RegistroSesion visualizacion
export let registrar = Registrar.addEventListener("click", ()=>{
    DespReg.classList.toggle("Registro_sesion2")
    contDes.classList.toggle("Registro_sesion2")
    contDes.style.display = (contDes.style.display === 'flex') ? 'none' : 'flex';
  }
  )


export let btnElim = BotonElim.addEventListener("click",()=>{
    contDes.style.display = (contDes.style.display === 'none') ? 'flex' : 'none';
    DespReg.classList.toggle("Registro_sesion2")
    contDes.classList.toggle("Registro_sesion2")
  })



export function registroUsuario(){
   
  }



let btnRegUsu = document.getElementById("BotonRegistrarse")

btnRegUsu.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("estoy aqui")
    registroUsuario()
    let list = []
    let frmdata = new FormData(document.getElementById("formRegistro"))


    for(e of frmdata){
      list.push(e[1])
    }
    console.log(list)
    e.stopPropagation


//   registroUsuario()

})

