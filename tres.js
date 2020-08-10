/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,
lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let respuesta="si";
	let sexoTitular;
	let lugar;
	let temporada;
	let cantidadPersonas=0;
	let lugarMasElegido;
	let contadorBariloche=0;
	let contadorCataratas=0;
	let contadorSalta=0
	let banderaSexoTitular;
	let banderaTitular=0;
	let contadorInvierno=0;
	let totalPersonas=0;

	while (respuesta == "si") {
		sexoTitular=prompt("Ingrese el sexo del titular f/m").toLowerCase();
		while(!(sexoTitular == "f" || sexoTitular == "m")){
			sexoTitular=prompt("Error. Ingrese el sexo del titular f/m").toLowerCase();	
		}

		lugar=prompt("Ingrese el lugar de viaje (Bariloche, Cataratas o Salta): ").toLowerCase();
		while(!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){
			lugar=prompt("Error. Ingrese el lugar de viaje (Bariloche, Cataratas o Salta): ").toLowerCase();
		}
		switch (lugar) {
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;		
			default:
				contadorSalta++;
				break;
		}

		temporada=prompt("Ingrese la temporada en la que quiere viajara (Otoño, Invierno, Verano, Primavera): ").toLowerCase();
		while(!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")){
			temporada=prompt("Error. Ingrese la temporada en la que quiere viajara (Otoño, Invierno, Verano, Primavera): ").toLowerCase();		
		}
		
		cantidadPersonas = parseInt(prompt("Cantidad de personas que viajan: "));
		while(cantidadPersonas < 1){
			cantidadPersonas = parseInt(prompt("Error. Cantidad de personas que viajan: "));
		}

		if(temporada == "invierno" ){
			contadorInvierno++;
			totalPersonas+=cantidadPersonas;
		}

		if(banderaTitular == 0 || banderaTitular<cantidadPersonas){
			banderaTitular=cantidadPersonas;
			banderaSexoTitular=sexoTitular;
		}

		
		respuesta=prompt("Ingresar mas gente ? si/no").toLowerCase();
	}
	if( contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		lugarMasElegido="Bariloche";
	}
	if(contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta){
		lugarMasElegido="Cataratas";
	}
	if(contadorSalta >= contadorBariloche && contadorSalta >= contadorCataratas){
		lugarMasElegido="Salta";
	}

	console.log("a)El lugar más elegido: "+ lugarMasElegido );
	console.log("b)El sexo de titular que lleva más pasajeros: "+ banderaSexoTitular);
	console.log("c)El promedio de personas por viaje que viajan en invierno: "+ (totalPersonas/contadorInvierno));
		
	

}
