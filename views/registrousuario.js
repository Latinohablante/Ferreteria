

const Registrar = document.getElementById("Bresgistrar");
const DespReg = document.getElementById("Registro");
const contDes = document.getElementById("containerRegistro");
const BotonElim = document.getElementById("BotonElim");

export let registrar = Registrar.addEventListener("click", () => {
  DespReg.classList.toggle("Registro_sesion2");
  contDes.classList.toggle("Registro_sesion2");
  contDes.style.display = contDes.style.display === "flex" ? "none" : "flex";
});

export let btnElim = BotonElim.addEventListener("click", () => {
  contDes.style.display = contDes.style.display === "none" ? "flex" : "none";
  DespReg.classList.toggle("Registro_sesion2");
  contDes.classList.toggle("Registro_sesion2");
});

export function registroUsuario() {

  let formData = new FormData(document.getElementById("formRegistro"));

  let usuario = {};
  formData.forEach((value, key) => {
    usuario[key] = value;
  });

  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  listaUsuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

  console.log("Usuario registrado con éxito:", usuario);
}

let btnRegUsu = document.getElementById("BotonRegistrarse");

btnRegUsu.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Estoy aquí");
  registroUsuario();
  let list = [];
  let frmdata = new FormData(document.getElementById("formRegistro"));

  for (let entry of frmdata) {
    list.push(entry[1]);
  }
  console.log(list);
  e.stopPropagation();
});

