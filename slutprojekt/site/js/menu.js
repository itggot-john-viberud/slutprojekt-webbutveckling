function toggleMenu() {
    console.log("omg")
    var element = document.querySelector(".menu_mobil");
    element.classList.toggle("show");
    var element = document.querySelector(".menu_mobil_fixed");
    element.classList.toggle("open");
    if (element.classList.contains("open")) { element.innerHTML = "close" }
    else { element.innerHTML = "menu" }

    // element = document.querySelector("main")
}

var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

var slideIndex3 = 1;
showDivs2(slideIndex3);

function plusDivs2(n) {
    showDivs2(slideIndex3 += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("mySlides3");
    if (n > x.length) { slideIndex3 = 1 }
    if (n < 1) { slideInde2x = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex3 - 1].style.display = "block";
}