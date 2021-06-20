// Déclaration de variables

let myBody = document.querySelector('body');
console.log(myBody);
let myLi1 = document.querySelectorAll('li')[0];

let myLi2 = document.querySelectorAll('li')[1];
let myLi3 = document.querySelectorAll('li')[2];
let myLi4 = document.querySelectorAll('li')[3];
let myLi5 = document.querySelectorAll('li')[4];
let myLi6 = document.querySelectorAll('li')[5];

let imgLogo = document.getElementById('imgLogo');

let sect1 = document.querySelector('.section-1');
console.log(sect1);




// Mode nuit/jour

let modeNuit = document.getElementById('btnNoir');
console.log(modeNuit);

let modeJour = document.getElementById('btnBlanc');

modeNuit.addEventListener('click',() =>{
    document.body.style.backgroundColor = "black";
    myLi1.style.backgroundColor = "white";
    myLi2.style.backgroundColor = "white";
    myLi3.style.backgroundColor = "white";
    myLi4.style.backgroundColor = "white";
    myLi5.style.backgroundColor = "white";
    myLi6.style.backgroundColor = "white";
    imgLogo.style.backgroundColor = "white";
    sect1.style.backgroundColor = "black";
})


modeJour.addEventListener('click', () =>{
    document.body.style.backgroundColor = "white";
    myLi1.style.backgroundColor = "";
    myLi2.style.backgroundColor = "";
    myLi3.style.backgroundColor = "";
    myLi4.style.backgroundColor = "";
    myLi5.style.backgroundColor = "";
    myLi6.style.backgroundColor = "";
    imgLogo.style.backgroundColor = "";
    sect1.style.backgroundColor = "white";

})


// Navbar à gauche


let navbar = document.getElementsByTagName("header")[0];
console.log(navbar);
window.addEventListener("scroll", () =>{
    if(window.scrollY > 1){
        navbar.classList.add('scroll');
    }else {
        navbar.classList.remove('scroll')
    }
});

// Inscription 

let connexion = document.getElementById("btnConnexion");
console.log(connexion);


let closer = document.getElementById("fermer");
console.log(fermer);

let popUp = document.getElementById("popUp")




connexion.addEventListener("click", () =>{
    popUp.style.opacity = "1";
    popUp.style.zIndex = "3";
});

closer.addEventListener("click", () =>{
    popUp.style.opacity = "-1";
    popUp.style.zIndex = "-1";
});

let submit = document.getElementById("submit");

submit.addEventListener("click", ()=>{
    popUp.style.opacity = "-1";
    popUp.style.zIndex = "-1";
    alert("You are logged on.")
})
// popUp 2

let popUp2 = document.getElementById("popUp2");
let inscription = document.getElementById("inscription");


inscription.addEventListener("click", () =>{
    popUp2.style.opacity = "1";
    popUp2.style.zIndex = "4";
    popUp.style.opacity = "-1";
    popUp.style.zIndex = "-1";
});

let closer2= document.getElementById("fermer2");

closer2.addEventListener("click", ()=>{
    popUp2.style.opacity = "-1";
    popUp2.style.zIndex = "-1";
});

let connexion2 = document.getElementById("connexion2")

connexion2.addEventListener("click",()=>{
    popUp2.style.opacity = "-1";
    popUp2.style.zIndex = "-1";
    popUp.style.opacity = "1";
    popUp.style.zIndex = "3";
})

let submit2 = document.getElementById("submit1");

submit2.addEventListener("click",()=>{
    popUp2.style.opacity = "0";
    popUp2.style.zIndex = "0";
    alert("You account has been succesfully created.")
});


// Carousel 

// carousel 
let carousel = document.getElementById("images");
console.log(carousel);
let btn0 = document.getElementById("pos0");
let btn1 = document.getElementById("pos1");
let btn2 = document.getElementById("pos2");
let btn3 = document.getElementById("pos3");

btn1.addEventListener("click", ()=>{
    carousel.style.transform = "translateX(-360px)";
    carousel.style.overflow = "visible";
    carousel.style.transition = "ease 1s"
});
btn2.addEventListener("click", ()=>{
    carousel.style.transform = "translateX(-760px)";
    carousel.style.overflow = "visible";
    carousel.style.transition = "ease 1s";
});
btn3.addEventListener("click", ()=>{
    carousel.style.transform = "translateX(-1100px)";
    carousel.style.overflow = "visible";
    carousel.style.transition = "ease 1s"
});
btn0.addEventListener("click", ()=>{
    carousel.style.transform = "translateX(0px)";
    carousel.style.overflow = "visible";
    carousel.style.transition = "ease 1s"
});









