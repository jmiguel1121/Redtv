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
			{y: 59, label: "Traslados"},
			{y: 20, label: "Servicios Nuevos"},
			{y: 10, label: "Cancelacion Servicios"},
			{y: 45, label: "Mantenimientos"}			
		]
	}]
});


chart.render();

var chart = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	
	title:{
		
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)"
		
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 150, label: "Sucursal Perdomo" },
			{ y: 80, label: "Sucursal Calendaria" },
			{ y: 35, label: "Sucursal Venecia" },
			{ y: 55, label: "Sucursal Alqueria" },
			{ y: 12, label: "Sucursal Coruña" }
			
		]
	}]
});

chart.render();


var chart = new CanvasJS.Chart("chartContainer3", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: true, // change to true		
	title:{		
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc.
		type: "column",
		dataPoints: [
			{ label: "Pendientes Pagar",  y: 10  },
			{ label: "En Mora", y: 15  },
			{ label: "Al dia", y: 25  },
			{ label: "Pendientes por generar ",  y: 30  }			
		]
	}
	]
});
chart.render();




});

/**************FIN***********************/
