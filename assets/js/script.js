/* Navbar */
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/* Texto Dinamico */
const text = document.querySelector(".sec-text");

const textLoad = ()=>{
    setTimeout(() =>{
        text.textContent = "Estudiante de Alura";
    }, 0);
    setTimeout(() =>{
        text.textContent = "Futuro Analista de Sistemas";
    }, 4000);
    setTimeout(() =>{
        text.textContent = "Futuro Desarrollador Web";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);



