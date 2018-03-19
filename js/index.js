/* cargar modal ============================================*/
$(Document).ready(function () {
	$("#vista-modal").load('vistas/modal.html');
});


/* efecto scroll menu =========================================*/
$(window).scroll(function () {
	if ($("#menu").offset().top < 505) {
		$("#menu").removeClass("navInverse");

	} else if ($("#menu").offset().top > 506) {
		$("#menu").addClass("navInverse");
	}

});
/* efecto scroll serivios =========================================*/
$("#inicio").click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 1000);
});
$("#servicios").click(function () {
	$("html, body").animate({
		scrollTop: 540
	}, 1000);
});
$("#contactenos").click(function () {
	$("html, body").animate({
		scrollTop: 1440
	}, 1000);
});
/*efectos modal login ============================================*/
$("body").on('click', '#ver-registro', function () {
	$("#contenido-login").hide("fast");
	$("#contenido-registro").show(1000);
	$("#contenido-recuperacion").hide("slow");

});
$("body").on('click', '#ver-login', function () {

	$("#contenido-registro").hide("fast");

	$("#contenido-login").show("slow");

});
$("body").on('click', '#recuperar-contraseña', function () {

	$("#contenido-login").hide("fast");

	$("#contenido-recuperacion").show("slow");

});
recuperar - contraseña
