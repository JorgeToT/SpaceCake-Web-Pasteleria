function recogerDatos(){
    let nombre = document.getElementById("nombreCliente").value;
    let telefono = document.getElementById("telefonoCliente").value;
    let correo = document.getElementById("correoCliente").value;

    let mensaje = nombre+" "+telefono+" "+correo;

    console.log(mensaje);
} 