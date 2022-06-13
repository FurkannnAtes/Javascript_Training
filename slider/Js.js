
let counter = 0;
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector("#slider");
const max = document.querySelectorAll(".slide").length -1;
function sliderFunc(){
    if(counter< max){
        counter++;
        slider.style.left = "-" + 800 * counter + "px";
    }else{
        counter = 0;
        slider.style.left = "-" + 800 * counter + "px";
    }

}

let timer = setInterval(sliderFunc,3000);

sliderContainer.addEventListener("mouseover",()=>{
    clearInterval(timer);
    
})
sliderContainer.addEventListener("mouseout",()=>{
    timer = setInterval(sliderFunc,3000);
})

next.addEventListener("click",sliderFunc);

back.addEventListener("click",()=>{
    if(counter >= 0){
        counter--;
        slider.style.left = "-" + 800 * counter + "px";
    }
        
        
})