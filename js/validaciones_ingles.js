
/* validacio y regsitro usuario*/
var form_registro = $("#form-registro");

form_registro.validate({
    rules: {
        nombrew: {
            required: true,
            maxlength: 20,
            minlength: 4
        },
        apellido: {
            required: true,
            maxlength: 20,
            minlength: 4
        },
        usuario: {
            required: true,
            maxlength: 20,
            minlength: 4
        },
        password: {
            required: true,
            maxlength: 20,
            minlength: 4
        },
        password_confirm: {
            equalTo: "#password",
            required: true,
            minlength: 4,
            maxlength: 20
        }

    },
    messages: {
        password_confirm: {
            equalTo: "Las contraseñas no coinciden",
        }
    }
});

/* validacio login *************************/

var form_login = $("#form_login");

form_login.validate({
    rules: {
        usuario_login: {
            required: true,
            maxlength: 20,
            minlength: 4
        },
        password_login: {
            required: true,
            maxlength: 20,
            minlength: 4
        },
    }
});
/**validacion recuperar contraseña */
var form_recuperacion = $("#form_recuperacion");

form_recuperacion.validate({
    rules: {
        recuperar_contraseña: {
            required: true,
            maxlength: 20,
            minlength: 4,
            email: true,
        },
    }
});
/** vlaidaciones contactenos */
var form_contactenos = $("#form_contactenos");

form_contactenos.validate({
    rules: {
        nombre_contacto: {
            required: true,
            maxlength: 20,
            minlength: 4,
        },
        telefono_contacto: {
            required: true,
            maxlength: 20,
            minlength: 4,
        },
        correo_contacto: {
            required: true,
            maxlength: 20,
            minlength: 4,
            email: true,
        },
        mensaje_contacto: {
            required: true,
            maxlength: 20,
            minlength: 4,
        },
    }

});

/** creacion de usuario si validacion fue exitosa para creacion de susarios */
var datos = new Object();
var admin = new Object();
var usuarios = [];

/**se cfrea por defecto el usuario para el ingreso a usuarios */
admin["id_usuario"] = 1;
admin["perfil"] = "usuario";
admin["nombre"] = "miguel";
admin["apellido"] = "lagos";
admin["usuario"] = "admin";
admin["password"] = "12345";
/**se cfrea por defecto el cliente prueba */
datos["id_usuario"] = 2;
datos["perfil"] = "cliente";
datos["nombre"] = "datos";
datos["apellido"] = "prueba";
datos["usuario"] = "cliente";
datos["password"] = "12345";

usuarios.push(admin);
usuarios.push(datos);

/**funcion crear ================================================ */
function crear(form, input, tipo) {
    var id = usuarios.length;
    if (form.valid()) {
        /** ingresa el id del usuario auto incementav¡ble */
        datos["id_" + tipo] = id;
        /** se le da por defecto el perfil cliete */
        datos["perfil"] = "cliente";

        $.map(input, function (n, i) {

            datos[n.name] = $(n).val();
            /* Alertas de creacion correcta de usucario */
            swal({
                position: 'top-end',
                type: 'success',
                title: tipo + ' creado con exito',
                timer: 1500
            })
            /* ***************************************** */
        });
        id++;//auto incremeta la crear el susario
        usuarios.push(datos);
        form.resetForm();

    } else {
        swal({
            type: 'error',
            title: 'Please Complete fields Correctly ',
            timer: 2500
        })

    }
}
/** ============================================================= */


var input = $("#form-registro input");
var form = $("#form-registro");
var tipo = "Usuario";

$(form).submit(function (e) {
    e.preventDefault();
    crear(form, input, tipo);

});
/**Validacion ingreso suario login ======================================= */
$("#form_login").submit(function (e) {
    e.preventDefault();

    if ($("#form_login").valid()) {
        for (let i = 0; i < usuarios.length; i++) {
            let objeto = usuarios[i];

            if ($("#usuario_login").val() == objeto.usuario
                && $("#password_login").val() == objeto.password) {
                /* alerta ingreso correcto */
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Wellcome ' + objeto.nombre,
                    timer: 1500
                });
                if (objeto.perfil == "cliente") {
                    location.href = "vistas/Cliente/cliente_inicio.html";
                    break;

                }
                if (objeto.perfil == "usuario") {
                    location.href = "vistas/inicio.html";
                    break;
                }
            } else {
                swal({
                    type: 'error',
                    title: 'User or Password Wrong',
                    timer: 2500
                });
            }
        }

    } else {
        swal({
            type: 'error',
            title: 'Please Complete fields Correctly ',
            timer: 2500
        })
    }

});
