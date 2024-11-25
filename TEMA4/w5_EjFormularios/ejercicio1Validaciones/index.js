function validarMayuscula(cadena) {
    // Valida que la cadena contenga al menos una letra en mayúscula
    return /[A-Z]/.test(cadena);
}

function validarCaracteresEspeciales(cadena) {
    // Valida que la cadena contenga al menos uno de los caracteres especiales !@#$%^&
    return /[!@#$%^&]/.test(cadena);
}

function validarCorreo(cadena) {
    // Valida que la cadena tenga el formato correcto de un email
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(cadena);
}

function validarTarjetaCredito(cadena) {
    // Valida que la cadena tenga el formato correcto de una tarjeta de crédito (generalmente 16 dígitos agrupados en grupos de 4)
    const tarjetaRegex = /^(\d{4}[-\s]?){3}\d{4}$/;
    return tarjetaRegex.test(cadena);
}

function validarLongitud(cadena) {
    // Valida que la cadena tenga al menos 8 caracteres
    return cadena.length >= 8;
}

function validarNumero(cadena) {
    // Valida que la cadena contenga al menos un dígito
    return /\d/.test(cadena);
}

function validarFormulario() {
    const password = document.getElementById("password").value;
    const correo = document.getElementById("correo").value;
    const tarjeta = document.getElementById("tarjeta").value;

    // Validación de cada campo
    if (!validarMayuscula(password)) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
        return false;
    }

    if (!validarCaracteresEspeciales(password)) {
        alert("La contraseña debe contener al menos un carácter especial (!@#$%^&).");
        return false;
    }

    if (!validarLongitud(password)) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }

    if (!validarNumero(password)) {
        alert("La contraseña debe contener al menos un dígito.");
        return false;
    }

    if (!validarCorreo(correo)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    if (!validarTarjetaCredito(tarjeta)) {
        alert("Por favor, introduce un número de tarjeta de crédito válido.");
        return false;
    }

    alert("Formulario enviado con éxito.");
    return true;
}
