/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button = document.getElementById("knop");
var element = document.getElementById("kunstwerk");
var standaard = document.getElementById("standaard");
var extra = document.getElementById("balanseren");
var zwaai = document.getElementById("zwaai");
var deel1 = document.getElementById("deel_1");
var deel2 = document.getElementById("deel_2");
var riet = document.getElementById("riet");
var onderframe = document.getElementById("onderste_frame");
var oor = document.getElementById("oorstaafje");
var blob1 = document.getElementById("blob_1");
var blob2 = document.getElementById("blob_2");
var blob3 = document.getElementById("blob_3");
var blob4 = document.getElementById("blob_4");
var blad1 = document.getElementById("blad_1");
var blad2 = document.getElementById("blad_2");
var pluis1 = document.getElementById("pluis_1");
var pluis2 = document.getElementById("pluis_2");
var pluis3 = document.getElementById("pluis_3");
var rood = document.getElementById("rode_blob");
var babyknop = document.getElementById("baby");
var arm = document.querySelector("#kind");

button.addEventListener("click", function () {
    element.classList.toggle("swing");
});

standaard.addEventListener("mouseover", function () {
    extra.classList.toggle("balanseren");
});

standaard.addEventListener("click", function () {
    extra.classList.toggle("balanseren");
});

zwaai.addEventListener("click", function () {
    deel1.classList.toggle("zwaai");
    deel2.classList.toggle("zwaai");
    riet.classList.toggle("zwaai");
    onderframe.classList.toggle("zwaai");
    oor.classList.toggle("zwaai");
    blob3.classList.toggle("zwaai");
    blob4.classList.toggle("zwaai");
});

zwaai.addEventListener("click", function () {
    deel2.classList.toggle("zwaai2");
    riet.classList.toggle("zwaai2");
    onderframe.classList.toggle("zwaai2");
    oor.classList.toggle("zwaai2");
    blob3.classList.toggle("zwaai2");
    blob4.classList.toggle("zwaai2");
});

function toggle(event) {
    if (event.keyCode === 82) {
        blad1.classList.toggle("regenboog");
        blad2.classList.toggle("regenboog");
        pluis1.classList.toggle("regenboog");
        pluis2.classList.toggle("regenboog");
        pluis3.classList.toggle("regenboog");
        blob1.classList.toggle("regenboog");
        blob2.classList.toggle("regenboog");
        blob3.classList.toggle("regenboog");
        blob4.classList.toggle("regenboog");
        rood.classList.toggle("regenboog");
    }
}

window.addEventListener("keydown", toggle);

rood.addEventListener("click", function () {
    blad1.classList.toggle("regenboog");
    blad2.classList.toggle("regenboog");
    pluis1.classList.toggle("regenboog");
    pluis2.classList.toggle("regenboog");
    pluis3.classList.toggle("regenboog");
    blob1.classList.toggle("regenboog");
    blob2.classList.toggle("regenboog");
    blob3.classList.toggle("regenboog");
    blob4.classList.toggle("regenboog");
    rood.classList.toggle("regenboog");
});

babyknop.addEventListener("click", function () {
    arm.classList.toggle("grijp");
    setTimeout(function () {
        arm.classList.toggle("grijp");
    }, 3000);
});
