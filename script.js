const textArea = document.querySelector(".text-area") ;
const textResult = document.querySelector(".resultado");
const noMensaje= document.querySelector(".no-mensaje");
const resultadoSection= document.querySelector(".resultadoSection");
const resultadoTitulo= document.querySelector(".resultadoTitulo");




function botonEncriptar(){
    let texto = encriptar(textArea.value.toLowerCase());
    cambiarElementos(texto);
    resultadoTitulo.innerHTML="Texto Encriptado";
    textResult.innerHTML= texto;
}
    
function cambiarElementos(texto) {
    if (texto.replace(/\s/img, "").length>0) {
        noMensaje.style.display = "none";
        resultadoSection.style.display= "flex";
    }else{
        noMensaje.style.display = "block";
        resultadoSection.style.display= "none";
        alert("Ingresa un mensaje para encriptar");
    }
    
}
function botonDesencriptar() {
    let texto = desencriptar(textArea.value.toLowerCase());
    cambiarElementos(texto);
    resultadoTitulo.innerHTML="Texto Desencriptado";
    textResult.innerHTML= texto;
    
}


function encriptar(texto) {
    
    let textoEncriptado = texto;
    textoEncriptado  = textoEncriptado.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    return textoEncriptado;
}

function desencriptar(texto) {
    
    let textoDesencriptado = texto;
    textoDesencriptado  = textoDesencriptado.replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");
    return textoDesencriptado;
}

function copiar(){
    navigator.clipboard.writeText(textResult.innerHTML);
    alert("Mensaje Copiado");
}