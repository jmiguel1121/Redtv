$("#consultar_factura").click(function () {
	$("#datos-contenido").load('consultar_factura.html');

});
$("#generar_pago").click(function () {

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

