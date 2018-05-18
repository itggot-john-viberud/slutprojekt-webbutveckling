function toggleMenu(){
    console.log("omg")
    var element = document.querySelector(".menu_mobil");
    element.classList.toggle("show");
    var element = document.querySelector(".menu_mobil_fixed");
    element.classList.toggle("open");
    if(element.classList.contains("open"))
        {element.innerHTML = "close"}
        else
        {element.innerHTML = "menu"}

    // element = document.querySelector("main")
}