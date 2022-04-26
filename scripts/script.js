// JavaScript Document

// hulp gehad van Timo en Sanne

// mario springt tegen blokje
var mario2006 = document.querySelector('.mario2006');
var munt = document.querySelector('.munt');

var A = document.querySelector('.A');



A.addEventListener("click", animatiestartA);

function animatiestartA () {
    mario2006.classList.add("mariospringt");
    munt.classList.add("mariospringt");

    munt.addEventListener("animationend", animatieKlaar);  
}

function animatieKlaar() {
    mario2006.classList.remove("mariospringt");
    munt.classList.remove("mariospringt");
}

// goomba ontploft

var goomba = document.querySelector('.goomba1985');
var B = document.querySelector('.B');

B.addEventListener("click", animatiestartB);

function animatiestartB () {
    goomba.classList.add("goombaboom");
    
    setTimeout(function(){
        goomba.classList.remove("goombaboom");
    }, 3000);
}