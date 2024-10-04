// Select the buttons and the images
const leftBtn = document.getElementById("left");
const midBtn = document.getElementById("mid");
const rightBtn = document.getElementById("right");
const imageContainer = document.querySelector(".image");
const catImage = document.querySelector(".catimage");
const dogImage = document.querySelector(".dogimage");

leftBtn.addEventListener("click", () => {
  catImage.style.display = "block";         
  dogImage.style.display = "block";
  imageContainer.classList.remove("flex");
  catImage.style.zIndex = "2";
  dogImage.style.zIndex = "1";
  dogImage.style.opacity = "1";             
  catImage.style.opacity = "1";
});

midBtn.addEventListener("click", () => {
  catImage.style.display = "block";         
  dogImage.style.display = "block";
  dogImage.style.opacity = "1";              
  catImage.style.opacity = "1";
  imageContainer.classList.add("flex");
  
});

rightBtn.addEventListener("click", () => {
  catImage.style.display = "block";         
  dogImage.style.display = "block";
  imageContainer.classList.remove("flex");
  catImage.style.zIndex = "1";
  dogImage.style.zIndex = "2";
  dogImage.style.opacity = "1";            
  catImage.style.opacity = "1";
});
