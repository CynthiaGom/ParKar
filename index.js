
var coche;

window.addEventListener('load',ubicar, true);

function ubicar(){

	 navigator.geolocation.getCurrentPosition(ubicacion); 
	
	}

function ubicacion(datos){
		
		latitud = datos.coords.latitude;
		longitud = datos.coords.longitude;
		dibujandoMapa();
		}

function dibujandoMapa(){
		
	divmapa=document.getElementById('mapa');
	lugar={lat:latitud, lng: longitud};
	mapa = new google.maps.Map(divmapa,
	{center: lugar,
	zoom:18});
	marcador = new google.maps.Marker({position: lugar, map:mapa});

	if (localStorage.getItem('lati')) {

	 	carrito();

	 	newboton();

	 	// Redibujar el boton
	 // 	var uno=document.getElementById("estacionar"); //Se hace referencia al ID del boton
		// uno.innerHTML='<img src="listo.png">';
		 	 	
	 }
	
	}

function estacionar(){ //El guardar los valores de tu ubicación actual
	
		if (localStorage.getItem('long')) {
			localStorage.clear();
			location.reload();

		}


		else {
		localStorage.setItem('lati',latitud);
		localStorage.setItem('long',longitud); 

		//Cambiar botón
		 
		 	// var uno=document.getElementById("estacionar"); //Se hace referencia al ID del boton
		 	// uno.innerHTML='<img src="listo.png">'; //Se remplaza por lo que se quiera
		    
		carrito();
		newboton();
		}
	}


function carrito(){ //dibujar el carrito
 	la = localStorage.getItem("lati"); //conseguir los valores del localstorage
 	lo = localStorage.getItem("long");

 	lat= parseFloat(la);//convertirlo a valores apropiados
 	lon= parseFloat(lo);
 	
 
	where={lat:lat, lng: lon};
	var coche = new google.maps.Marker({position: where,icon:"coche.png", map:mapa});

}

function newboton(){
	var uno=document.getElementById("estacionar"); //Se hace referencia al ID del boton
		uno.innerHTML='<img src="listo.png">';

}








//DUDAS
//No puedo llamar en dos ocasiones la función carrito