/*Areas de texto del programa*/
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


/*  Funcion para verificar que el texto no contenga simbolos especiales, ni letras con acento, 
    y llamar a la funcion para encriptar el texto */

function botonEncriptar(){
    const caracter = /^[a-zñ\s]+$/;

    if (caracter.test(textArea.value)) {
        const textEncriptado = encriptar(textArea.value);
     //   console.log(textEncriptado);
        mensaje.value = textEncriptado;
            
    } else{
        alert("El campo no debe estar vacío, ni contener letras con acento, ni símbolos especiales.");

    }    
       // console.log(mensaje.value);
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

/* Reglas de encriptación:
"a" es convertido para "ai"
"e" es convertido para "enter" 
"i" es convertido para "imes"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite caracteres con tilde
*/

// Funcion que encripta el texto según las reglas de encriptación

function encriptar(stringEncriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
    console.table(matrizCodigo);
    //stringEncriptado = stringEncriptado.tolowerCase;
    console.log(stringEncriptado);

    for (let i= 0; i < matrizCodigo.length; i++){
        console.log(matrizCodigo[i],0);
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            console.log(stringEncriptado);
        } 
    }
    return stringEncriptado;
        
}

/*  Funcion para verificar que el texto no contenga simbolos especiales, ni letras con acento, 
    y llamar a la funcion para desencriptar el texto */

function botonDesencriptar(){
    const caracter = /^[a-zñ\s]+$/;
    
    if (caracter.test(textArea.value)) {
        const textEncriptado = desEncriptar(textArea.value);
      //  console.log(textEncriptado);
        mensaje.value = textEncriptado;
            
    } else{
        alert("El campo no debe estar vacío, ni contener letras con acento, ni símbolos especiales.");

    }  
   
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

/*
Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras    
*/

// Funcion que desencripta el texto según las reglas de desencriptación, verifica si el texto esta encriptado o no

function desEncriptar(stringDesencriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
    const encriptado = stringDesencriptado;
    console.table(matrizCodigo);

    for (let i= 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    if (encriptado == stringDesencriptado ){
        alert("El texto no esta encriptado");
        textArea.value = "";
    }    
  
    return stringDesencriptado
}
      
    
// Copia el texto en el campo de resultado al portapapeles.

function copiar(){
    const textDesencriptado = mensaje.value;
    const boton = document.getElementsByClassName(copiar); 

    if (textDesencriptado == "") {
        alert("No hay texto para copiar.");
    } else {
        navigator.clipboard.writeText(textDesencriptado);
        alert("Texto Copiado. Con Ctr+v puede pegarlo en el campo de texto para encriptar o desencriptar");
        mensaje.value="";
    }
    
}