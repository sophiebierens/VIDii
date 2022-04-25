// JavaScript Document
console.log("Howdy!");
var mario2006 = document.querySelector('.mario2006');
var munt = document.querySelector('.munt');
var A = document.querySelector('.A');
var links = document.querySelector('.links');
var rechts = document.querySelector('.rechts');

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