$('body').on('click','#solicitarServicio',function () {

	$("#contenido").load('solicitud_cliente.html');
	
});

$('body').on('click','#consultar_factura',function () {

	$("#contenido").load('consultar_factura.html');
	
});
$('body').on('click','#actualizar_datos',function () {

	$("#contenido").load('actualizar_datos.html');
	
});

