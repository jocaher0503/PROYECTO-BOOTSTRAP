/**************************************************************
 * Funciones de validacion del formulario de validacionForm.js
 * 
 * 
 * 
**************************************************************/

/********************** SMOOTH SCROLL ***********************/

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash; 
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 1200, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
      } // End if
    });
});

/****************** BUTTONS *****************/

function myFunction2() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

/****************** NAV BAR *****************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/****************** VALIDATION FORM *****************/

function validation(){
    let correcto = true;
    let nombre=document.getElementById('nombre').value; //getter
    let apellidos=document.getElementById('apellidos').value; //getter
    let email=document.getElementById('email').value; //getter
    let provincia=document.getElementById('provincia').value; //getter
    let terminos=document.getElementById('terminos').value; //getter


    if(nombre=="" || /^\s$/.test(nombre) || ! /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/.test(nombre)){
        document.getElementById('nombreHelp').style.visibility="visible";
        document.getElementById('nombre').style.borderColor="red";//en JS todos los atributos se llaman igual sin el guion. Ej: border-color -> borderColor
        correcto = false;
    }

    if(apellidos=="" || /^\s$/.test(apellidos) || ! /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/.test(apellidos)){
        document.getElementById('apellidosHelp').style.visibility="visible";
        document.getElementById('apellidos').style.borderColor="red";
        correcto = false;
    }


    if(email=="" || ! /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email)){
        document.getElementById('emailHelp').style.visibility="visible";//setter
        document.getElementById('email').style.borderColor="red";//setter
        correcto = false;
    }

    if(provincia==0){
        document.getElementById('provinciaHelp').style.visibility="visible";//setter
        document.getElementById('provincia').style.borderColor="red";//setter
        correcto = false;
    }

    if(! terminos.checked){
        document.getElementById('terminosHelp').style.visibility="visible";//setter
        document.getElementById('terminos').style.borderColor="red";//setter
        correcto = false;
    }
    return correcto;
}

function deleteError(id){
    document.getElementById(id + 'Help').style.visibility="hidden";
    document.getElementById(id).style.borderColor="lightgray";
}