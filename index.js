let isModelOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor
  const y = event.clientY * scaleFactor
  
 
  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !==0
    const boolint = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * boolint}px, ${y * boolint}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".model__overlay--loading");
  const success = document.querySelector(".model__overlay--success");
  loading.classList += " model__overlay--visible";
  emailjs
    .sendForm(
      "service_yoetu6p",
      "template_30c95x5",
      event.target,
      "fSbCRO9LdD3eZqkRH"
    ).then(() => {
      loading.classList.remove("model__overlay--visible");
      success.classList += " model__overlay--visible";
    }).catch(() => {
      loading.classList.remove("model__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at jgarn02@gmail.com"
      );
    });
}

function toggleModel() {
  if (isModelOpen) {
    isModelOpen = false
    return document.body.classList.remove("model__open")
  }
  isModelOpen = true
  document.body.classList += " model__open"
}