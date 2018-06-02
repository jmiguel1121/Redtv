// /* validaciones login*/
// var res = $("#registrar_usuario").click(function (e) {
//     e.preventDefault();
//     bootstrapValidate(
//         [
//             '#usuario',
//             '#password',
//             '#registro_nombre',
//             /*formulario registros*/
//             '#registro_apellido',
//             '#registro_nombre',
//             '#registro_usuario',
//             '#registro_password',
//             '#registro_confirmar_contraseña',
//             '#recuperar_contraseña'
//         ],
//         'min:4:Ingrese Minimo 4 Caracteres!|max:20:Ingrese maximo 20 caracteres!|required:Campo Requerido'
//     );
// });


$("#form_login").validate({
    rules: {
        usuario: {
            required: true,
            minlength: 2
        },

    },
    messages: {
        usuario: {
            required: "Please enter a username",
            minlength: "Your username must consist of at least 2 characters"
        },

    }
});

$("body").submit(function(e){
    e.preventDefault();
 
});
