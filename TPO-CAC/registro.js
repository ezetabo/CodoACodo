const formulario = document.getElementById('registro-form');
const inputs = document.querySelectorAll('#registro-form input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    direccion: /^[a-zA-ZÀ-ÿ-Z0-9\s]{1,30}$/,
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[Z0-9]\d{1,14}$/ 
}


const validarFormulario = (e) => {
    
    switch (e.target.name){

        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.querySelector('#rownombre .parrafo-error').classList.remove('parrafo-error-activo')
            }else{
                document.querySelector('#rownombre .parrafo-error').classList.add('parrafo-error-activo')
            }
        break;

        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.querySelector('#rowapellido .parrafo-error').classList.remove('parrafo-error-activo')
            }else{
                document.querySelector('#rowapellido .parrafo-error').classList.add('parrafo-error-activo')
            } 

        break;

        case "direccion":
            if(expresiones.direccion.test(e.target.value)){
                document.querySelector('#rowdireccion .parrafo-error').classList.remove('parrafo-error-activo')
            }else{
                document.querySelector('#rowdireccion .parrafo-error').classList.add('parrafo-error-activo')
            } 

        break;

       
        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.querySelector('#rowtelefono .parrafo-error').classList.remove('parrafo-error-activo')
            }else{
                document.querySelector('#rowtelefono .parrafo-error').classList.add('parrafo-error-activo')
            }
            

        break;

        case "email":
            if(expresiones.mail.test(e.target.value)){
                document.querySelector('#rowtmail .parrafo-error').classList.remove('parrafo-error-activo')
            }else{
                document.querySelector('#rowtmail .parrafo-error').classList.add('parrafo-error-activo')
            }

        break;
    }
}

const validarEdad = () =>{
    const inputEdad= document.getElementById('edad')
    if(inputEdad > 18){
        document.querySelector('#rowtmail .parrafo-error').classList.remove('parrafo-error-activo')
    }else{
        document.querySelector('#rowtmail .parrafo-error').classList.add('parrafo-error-activo')
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


