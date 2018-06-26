/** js menu  ********************************************************** */
$(document).ready(function(){
	$("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
			$(".hamburger-toggle").toggleClass("is-opened");
			$(".l-sidebar__content").addClass("l-sidebar__content_expanded");
		$("#contenido-modulo").addClass("contenido_modulo_expand");
});

"use strict";



var Dashboard = function () {
	var global = {
		tooltipOptions: {
			placement: "right"
		},
		menuClass: ".c-menu"
	};

	var menuChangeActive = function menuChangeActive(el) {
		var hasSubmenu = $(el).hasClass("has-submenu");
		$(global.menuClass + " .is-active").removeClass("is-active");
		$(el).addClass("is-active");

		// if (hasSubmenu) {
		// 	$(el).find("ul").slideDown();
		// }
	};

	var sidebarChangeWidth = function sidebarChangeWidth() {

		$("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
			$(".hamburger-toggle").toggleClass("is-opened");

		if ($("body").hasClass("sidebar-is-expanded")) {
			//$('[data-toggle="tooltip"]').tooltip("destroy");
		$(".l-sidebar__content").addClass("l-sidebar__content_expanded");
		$("#contenido-modulo").addClass("contenido_modulo_expand");

	
		} else {
			//$('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
			$("#contenido-modulo").removeClass("contenido_modulo_expand");
		$(".l-sidebar__content").removeClass("l-sidebar__content_expanded");

		}
	};

	return {
		init: function init() {
			$(".js-hamburger").on("click", sidebarChangeWidth);
			$(".js-menu li").on("click", function (e) {
				menuChangeActive(e.currentTarget);
			});
			$('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
		}
	};
}();

Dashboard.init();
//# sourceURL=pen.js


/** fin menu js********************************************************* */


$('body').on('click', '#consultar_factura', function () {
	$("#datos-contenido").load('consultar_factura.html');

});
$('body').on('click', '#generar_pago', function () {

	$("#datos-contenido").load('generar_pago.html');

});
$("#clientes_mora").click(function () {

	$("#datos-contenido").load('clientes_mora.html');

});

$('body').on('click ', '#reportar_corte', function () {
	$("#datos-contenido").load('reportar_corte.html');

});
$('body').on('click ', '#generar_facturas', function () {
	$("#datos-contenido").load('generar_facturas.html');

});
$("#generar_suscripcion").click(function () {

	$("#datos-contenido").load('generar_suscripcion.html');

});
$('body').on('click ', '#generar_servicio', function () {

	$("#datos-contenido").load('generar_servicio.html');

});
$('body').on('click ', '#generar_servicio_actividad', function () {

	$("#datos-contenido").load('generar_servicio_actividad.html');

});
$('body').on('click ', '#generar_servicio_extra', function () {

	$("#datos-contenido").load('generar_servicio_extra.html');

});
$('body').on('click ', '#generar_progracion_diaria', function () {

	$("#datos-contenido").load('generar_progracion_diaria.html');

});
$('body').on('click', '#autorizar_servicio', function () {

	$.get('autorizar_servicio.html', function (htmlTexto) {
		$("#datos-contenido").html(htmlTexto);
	});

});
$('body').on('click ', '#detalle_autorizar_servicio', function () {

	$("#datos-contenido").load('detalle_autorizar_servicio.html');

});
$('body').on('click ', '#servicios_agendados', function () {

	$("#datos-contenido").load('servicios_agendados.html');

});
$('body').on('click ', '#historial_agendamientos', function () {

	$("#datos-contenido").load('historial_agendamientos.html');

});
$('body').on('click ', '#registrar_material', function () {

	$("#datos-contenido").load('registrar_material.html');

});

$('body').on('click', '#control_usuarios', function () {
	$("#datos-contenido").load('usuarios/lista_usuarios.html');

});
$('#diccionario').click(function () {
	$("#datos-contenido").load('diccionario_de_datos.html');

});





