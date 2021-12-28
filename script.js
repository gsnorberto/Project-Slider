let totalSlides = document.querySelectorAll('.slider--img').length
let alturaSlide = document.querySelector('.slider').clientHeight;
console.log(alturaSlide);
let currentSlide = 0; // de 0 até totalSlides - 1

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider--controls').style.height = `${alturaSlide}px`

function goPrev(){
    currentSlide--;
    // Se tiver no primeiro slide e clicar em voltar, volta para o último
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext(){
    currentSlide++;
    // Se tiver no último slide e clicar em avançar, volta para o primeiro
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--img').clientWidth;
    //clientWidth = retorna a lagura em px visível na tela
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 2000)