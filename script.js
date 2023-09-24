// const rightSide = document.querySelector('.right-side');
// const lefttSide = document.querySelector('.left-side');
// const slideLength = rightSide.querySelectorAll('div').length;
// const button = document.querySelector('button');
// const container = document.querySelector('.slider-containr');

// let counter = 0;
// lefttSide.style.top = `-${(slideLength - 1) * 100}%`;

// var slide =function(){
//     var screenHight = container.clientHeight;
//     counter++;
//     if(counter>=slideLength){
//         counter =0;
//     }
//     lefttSide.style.transform =`translateY(${counter * screenHight }px)`;
//     rightSide.style.transform = `translateY(-${counter * screenHight }px)`;
// };

// setInterval(slide, 2000);

const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const slideLenght = rightSide.querySelectorAll("div").length;
const container = document.querySelector(".slider-containr");
//console.log(slideLenght)
leftSide.style.top = `-${(slideLenght -1)* 100}vh`;

var counter = 0;
var Height = container.clientHeight; 

var slider = function(){
    counter ++;
    if(counter>= slideLenght){
        counter = 0;
    }
    leftSide.style.transform = `translateY(${counter * Height}px)`;
    rightSide.style.transform = `translateY(-${counter * Height}px)`;
};

setInterval(slider,2000);