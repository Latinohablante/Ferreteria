const BotonIngre = document.getElementById("Binicio");
const ContIni = document.getElementById("containerInicio");
const botonIniciarSesion = document.getElementById("IngresarInicio");
const BotonElim = document.getElementById("BotonElim2");
const desIni = document.getElementById("Inicio")



BotonIngre.addEventListener("click", () => {
  ContIni.style.display = ContIni.style.display === "flex" ? "none" : "flex";
});


botonIniciarSesion.addEventListener("click", (e) => {
  e.preventDefault();
  let nombreU = document.getElementById("inicioUsuario").value
  let contraseñaU = document.getElementById( "inicioContraseña").value;

  let usuarioInicioSesion = {};
  console.log(nombreU)
  console.log(contraseñaU)


  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  console.log("Lista de usuarios:", listaUsuarios)
 
  let usuarioRegistrado = listaUsuarios.find(
    (usuario) =>
      usuario.nombreusuario === nombreU &&
      usuario.contraseña === contraseñaU

 
    
  );

  if (usuarioRegistrado) {
    let aggUs = document.getElementById("aggNombre")
    aggUs.textContent= nombreU
    ContIni.style.display = ContIni.style.display === "none" ? "flex" : "none";
    desIni.classList.toggle("inicio_sesion2");
    ContIni.classList.toggle("inicio_sesion2");
  
    sessionStorage.setItem("usuarioSesion", JSON.stringify({
      nombreusuario: usuarioRegistrado.nombreusuario
      
      
    
    }));
 
   
  } else {
    alert("Usuario no registrado");
  }
  e.stopPropagation();
});
