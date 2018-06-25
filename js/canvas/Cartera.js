/***********CARGAR REPORTES************************/
$(document).ready(function(){
   
	var chart = new CanvasJS.Chart("chartContainer", {
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
