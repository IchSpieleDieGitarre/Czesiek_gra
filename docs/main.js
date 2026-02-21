const form = document.getElementById("form");
const openBtn = document.getElementById("openMail");
const closeBtn = document.getElementById("closeBtn");
form.style.display = "none";

openBtn.addEventListener("click", () =>{
    form.style.display = "flex";
});

closeBtn.addEventListener("click", () =>{
    form.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === form) {
    form.style.display = "none";
  }
});