
const BotonIngre = document.getElementById("Binicio")
const DespIncio = document.getElementById("Inicio")
const ContIni = document.getElementById("containerInicio")
const BotonElim2 = document.getElementById("BotonElim2")


//InicioSesion
export let btningresar= BotonIngre.addEventListener("click", ()=>{
  DespIncio.classList.toggle("inicio_sesion2")
  ContIni.classList.toggle("inicio_sesion2")
  ContIni.style.display = (ContIni.style.display === 'flex') ? 'none' : 'flex';

}
)

export let btnelim2 = BotonElim2.addEventListener("click",()=>{
  ContIni.style.display = (ContIni.style.display === 'none') ? 'flex' : 'none';
  DespIncio.classList.toggle("Registro_sesion2")
  ContIni.classList.toggle("Registro_sesion2")
})

