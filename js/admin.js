$('body').on('click','#consultar_factura',function () {
	$("#datos-contenido").load('consultar_factura.html');

});
$('body').on('click','#generar_pago',function () {

	$("#datos-contenido").load('generar_pago.html');

});
$("#clientes_mora").click(function () {

	$("#datos-contenido").load('clientes_mora.html');

});

$('body').on('click ','#reportar_corte',function () {
	$("#datos-contenido").load('reportar_corte.html');

});
$('body').on('click ','#generar_facturas',function () {
	$("#datos-contenido").load('generar_facturas.html');

});
$("#generar_suscripcion").click(function () {

	$("#datos-contenido").load('generar_suscripcion.html');
	
});
$('body').on('click ','#generar_servicio',function () {

	$("#datos-contenido").load('generar_servicio.html');
	
});
$('body').on('click ','#generar_servicio_actividad',function () {

	$("#datos-contenido").load('generar_servicio_actividad.html');
	
});
$('body').on('click ','#generar_servicio_extra',function () {

	$("#datos-contenido").load('generar_servicio_extra.html');
	
});
$('body').on('click ','#generar_progracion_diaria',function () {

	$("#datos-contenido").load('generar_progracion_diaria.html');
	
});
$('body').on('click ','#autorizar_servicio',function () {

	$("#datos-contenido").load('autorizar_servicio.html');
	
});
$('body').on('click ','#detalle_autorizar_servicio',function () {

	$("#datos-contenido").load('detalle_autorizar_servicio.html');
	
});
$('body').on('click ','#servicios_agendados',function () {

	$("#datos-contenido").load('servicios_agendados.html');
	
});
$('body').on('click ','#historial_agendamientos',function () {

	$("#datos-contenido").load('historial_agendamientos.html');
	
});
$('body').on('click ','#registrar_material',function () {

	$("#datos-contenido").load('registrar_material.html');
	
});

$('body').on('click','#control_usuarios',function () {
	$("#datos-contenido").load('usuarios/lista_usuarios.html');
	
});






