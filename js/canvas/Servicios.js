/***********CARGAR REPORTES************************/
$(document).ready(function(){
   
	var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 59, label: "Actividades Generadas"},
			{y: 20, label: "Suscripciónes Recientes"},
			{y: 10, label: "Programacion Diaría"},
			{y: 45, label: "Actvidades pendientes por aprobar"}			
		]
	}]
});


chart.render();


});

/**************FIN***********************/