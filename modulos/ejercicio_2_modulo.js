export const validarAcceso = function(edad, contrasena) {
    const contrasena_valida = "12345";

    if (edad >= 18 && contrasena === contrasena_valida) {
        return "Acceso concedido: Bienvenido al sistema";
    } else if (edad < 18) {
        return "Acceso denegado: Debe ser mayor de edad.";
    } else {
        return "Acceso denegado: Contraseña incorrecta";
    }
}