/**************************************************************
 * Funciones de validacion del formulario de validacionForm.js
 * 
 * 
 * 
**************************************************************/

function validation(){
    let correcto = true;
    let nombre=document.getElementById('nombre').value; //getter
    let apellidos=document.getElementById('apellidos').value; //getter
    let email=document.getElementById('email').value; //getter
    let pass=document.getElementById('pass').value; //getter
    let pass2=document.getElementById('pass2').value; //getter
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

    if (pass.length<8 || pass.length>15 || !/[a-zñ]/.test(pass) || !/[A-ZÑ]/.test(pass) || !/[0-9]/.test(pass) || !/[^a-zA-AñÑ0-9]/.test(pass)) {
        document.getElementById('passHelp').style.visibility = "visible"; //setter
        document.getElementById('pass').style.borderColor = "red"; //setter
        correcto = false
    }

    if (pass != pass2) {
        document.getElementById('pass2Help').style.visibility = "visible"; //setter
        document.getElementById('pass2').style.borderColor = "red"; //setter
        correcto = false
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