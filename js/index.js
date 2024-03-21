// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una 
//   palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

/*-----------Funcion encriptar---------------*/

    function encriptar() {
        const textoOriginal = document.getElementById('text_Area').value;
        if (!validarTexto(textoOriginal)) {
            document.getElementById('mensaje').innerText = "Error: El texto debe contener solo letras minúsculas y sin acentos.";
            document.getElementById('imagen').src = "img/error.jpg"; // Cambiar la imagen
            return;
        }

        const textoEncriptado = textoOriginal.replace(/e/g, "enter")
                                           .replace(/i/g, "imes")
                                           .replace(/a/g, "ai")
                                           .replace(/o/g, "ober")
                                           .replace(/u/g, "ufat");
        document.getElementById('textoDesencriptado').value = textoEncriptado;
        document.getElementById('imagen').src = "img/encriptado.jpg"; 
        document.getElementById('mensaje').innerText = "Texto encriptado correctamente.";
        document.getElementById("btn_copiar").style.display = "show";
        document.getElementById("btn_copiar").style.display = "inherit";

    }

    function desencriptar() {

        const textoDesencriptado = document.getElementById('textoDesencriptado').value;
        const textoOriginal = textoDesencriptado.replace(/enter/g, "e")
                                             .replace(/imes/g, "i")
                                             .replace(/ai/g, "a")
                                             .replace(/ober/g, "o")
                                             .replace(/ufat/g, "u");
        document.getElementById('textoDesencriptado').value = textoOriginal;
        document.getElementById('imagen').src = "img/desencriptado.jpg"; // Cambiar la imagen
        document.getElementById('mensaje').innerText = "Texto desencriptado correctamente.";
        document.getElementById("btn_copiar").style.display = "show";
        document.getElementById("btn_copiar").style.display = "inherit";
    }

    function reiniciar() {
        document.getElementById('text_Area').value = "";
        document.getElementById('textoDesencriptado').value = "";
        document.getElementById('imagen').src = "img/gatito.jpg";
        document.getElementById('mensaje').innerText = "Ningún mensaje fue encontrado!!";

    }

    function validarTexto(texto) {
        return /^[a-z]+$/.test(texto);
    }

   // Función para copiar el texto
function copy() {
    var textoDesencriptado = document.getElementById("textoDesencriptado");
    textoDesencriptado.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}