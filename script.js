const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar() {
    const textoOriginal = textArea.value;
    const textoEncriptado = encriptar(textoOriginal);
    mensaje.value = textoEncriptado;
    textArea.value = ""; // Limpiar área de texto
    mensaje.style.backgroundImage = "none"; // Se quita la imagen cuando se encripta
}

function encriptar(textoEncriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

  // Validar que el texto no contenga mayúsculas ni símbolos
    const regex = /^[a-z\s]+$/;
    if (!regex.test(textoEncriptado)) {
        Swal.fire({
            width: '600px',
            text: "Warning. Solo se permite minusculas y espacios",
            imageUrl: 'Imagenes/gato.png',
            imageWidth: '300px'
        });
        return mensaje.style.backgroundImage = "";;
        
    }else {

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (textoEncriptado.includes(matrizCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
    } 
}

function btnDesencriptar() {
    const textoEncriptado = mensaje.value;
    const textoDesencriptado = desencriptar(textoEncriptado);
    textArea.value = textoDesencriptado;
    mensaje.value = ""; // Limpiar área de texto
    mensaje.style.backgroundImage = ""; // Se repone la imagen cuando se desencripta
}

function desencriptar(textoDesencriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoDesencriptado.includes(matrizCodigo[i][1])) {
          textoDesencriptado = textoDesencriptado.split(matrizCodigo[i][1]).join(matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}


function copiarTexto() {
    const mensajeTextarea = document.querySelector(".mensaje");
    const texto = mensajeTextarea.value;
    
    navigator.clipboard.writeText(texto)
        .then(() => {
            Swal.fire({
                width: '600px',
                text: "Texto copiado",
                imageUrl: 'Imagenes/triogatos.png',
                imageWidth: '300px'
            });
        })
        .catch((error) => {
            Swal.fire({
                width: '600px',
                text: "Error al copiar texto",
                imageUrl: 'Imagenes/gatoasombrado.png',
                imageWidth: '300px'
            });
        });
}

