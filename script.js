document.addEventListener('DOMContentLoaded',()=>{
    let signUpBtn = document.querySelector(".signUpContainer .btn");
    let rightOverlayBtn=document.querySelector(".rightOverlay .btn");
    let leftOverlayBtn=document.querySelector(".leftOverlay .btn")
    let signUpContainer = document.querySelector(".signUpContainer");
    let signInContainer = document.querySelector(".signInContainer");
    let overlayContainer = document.querySelector(".overlayContainer");
    let container = document.querySelector(".container");
overlayContainer.classList.remove("active");
signUpBtn.addEventListener('click',()=>{
    // console.log("Btn clicked")
    overlayContainer.classList.add("active");
    signInContainer.classList.remove("active");
    signUpContainer.classList.remove("active");
})
leftOverlayBtn.addEventListener('click',()=>{
    overlayContainer.classList.remove("active");
    signInContainer.classList.add("active");
    signUpContainer.classList.add("active");
})
})
