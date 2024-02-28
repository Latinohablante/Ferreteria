const BotonIngre = document.getElementById("Binicio");
const ContIni = document.getElementById("containerInicio");
const botonIniciarSesion = document.getElementById("IngresarInicio");


BotonIngre.addEventListener("click", () => {
  ContIni.style.display = ContIni.style.display === "flex" ? "none" : "flex";
});

botonIniciarSesion.addEventListener("click", () => {
  let formData = new FormData(document.getElementById("formularioInicioSesion"));
  let usuarioInicioSesion = {};

  formData.forEach((value, key) => {
    usuarioInicioSesion[key] = value;
  });


  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  console.log("Lista de usuarios:", listaUsuarios)
 
  let usuarioRegistrado = listaUsuarios.find(
    (usuario) =>
      usuario.nombreusuario === usuarioInicioSesion.inicioUsuario &&
      usuario.contraseña === usuarioInicioSesion.inicioContraseña
  );

  if (usuarioRegistrado) {
 
    sessionStorage.setItem("usuarioSesion", JSON.stringify({
      nombreusuario: usuarioRegistrado.nombreusuario
      
    
    }));
 
    window.location.href = "/ruta-de-la-pagina-principal";
  } else {
    alert("Usuario no registrado");
  }
});
