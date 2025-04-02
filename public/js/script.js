const btnIzq = document.querySelector(".btnIzquierda"),
        btnDer = document.querySelector(".btnDerecha"),
        sliderContenedor = document.querySelector("#sliderCarrusel"),
        sliderSection = document.querySelectorAll(".slider-section");

btnIzq.addEventListener("click", e => moveToLeft());
btnDer.addEventListener("click", e => moveToRight()); 

let operacion = 0;  
    counter = 0;
    widthImg = 100 / sliderSection.length;
function moveToRight(){
    if(counter >= sliderSection.length-1){
        operacion = 0;
        sliderContenedor.style.transform = `translate(-${operacion}%)`
        counter=0;
        sliderContenedor.style.transition = "none";
    }else{
        counter++;
        operacion = operacion + widthImg;
        sliderContenedor.style.transform = `translate(-${operacion}%)`
        sliderContenedor.style.transition = "all ease 1.5s";
    }

}

function moveToLeft(){
    counter--;
    if(counter < 0){
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        sliderContenedor.style.transform = `translate(-${operacion}%)`
        sliderContenedor.style.transition = "none";

    }else{
        operacion = operacion - widthImg;
        sliderContenedor.style.transform = `translate(-${operacion}%)`
        sliderContenedor.style.transition = "all ease 1.5s";
    }
}