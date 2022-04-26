// JavaScript Document

// hulp gehad van Timo en Sanne
console.log("Howdy!");
var mario2006 = document.querySelector('.mario2006');
var munt = document.querySelector('.munt');
var A = document.querySelector('.A');

A.addEventListener("click", mariospringt);

function mariospringt () {
    mario2006.classList.add("mariospringt");
    munt.classList.add("mariospringt");

    munt.addEventListener("animationend", animatieKlaar);   
}

function animatieKlaar() {
    mario2006.classList.remove("mariospringt");
    munt.classList.remove("mariospringt");
}
