/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let edad=0;
	let peso=0;
	let edadTotal=0;
	let sexo;
	let cantidadF=0;
	let cantidadM=0;
	let banderaPeso=0;
	let banderaHombrePesado;

	for (let i = 1; i <= 5; i++) {
	    nombre = prompt("Ingresar nombre: ");
	    while (!(isNaN(nombre))) {
	        nombre = prompt("Error. Ingresar nombre: ");   
	    }
	
	    peso = parseFloat(prompt("Ingresar peso: "));
	    while (peso < 1){
	        peso = parseFloat(prompt("Error. Ingresar peso: ")); 
		}		
		
	    sexo = prompt("Ingresar tu sexo: F/M").toLowerCase();
	    while (!(sexo == "f" || sexo == "m")) {
	        sexo = prompt("Error. Ingresar tu sexo: F/M").toLowerCase();
	    }
	    switch (sexo) {
			case "f":
				cantidadF++;
				break;				
			default:
				cantidadM++;
				if(banderaPeso == 0 || banderaPeso < peso){
					banderaPeso=peso;
					banderaHombrePesado=nombre;
				}
				break;
		}
		
	    edad = parseInt(prompt("Ingresar tu edad"));
	    while(edad < 1 || edad > 100){
			edad = parseInt(prompt("Error. Ingresar tu edad"));
		}
		edadTotal+=edad;    
	}
	    if(cantidadF>0){
	        console.log("a)Cantidad mujeres " + cantidadF);
		}else if (cantidadM>0){
			console.log("++)Cantidad hombres " + cantidadM);
		}

		console.log("b)La edad promedio en total "+ (edadTotal/5));
		
		if(!(banderaPeso == 0)){
			console.log("c)El hombre mas pesado "+banderaHombrePesado );
		}
}
