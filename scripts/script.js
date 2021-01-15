// JavaScript Document



//var menuButton = document.querySelector(".hamburgerbutton");
//var nav = document.querySelector(".tovermenu");

//function  changeButton() {
    //nav.classList.toggle(".tovermenu");
    //menuButton.classList.toggle(".displaynone");
 //}

//menuButton.addEventListener("click", changeButton);

var menuButton = document.querySelector(".hamburgerbutton");
var nav = document.querySelector(".displaynone");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("tovermenu");
});