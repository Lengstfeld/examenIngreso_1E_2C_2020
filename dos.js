/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, 
precio, 
peso en kilogramos, 
tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let respuesta="si";
  let marca;
  let precio=0;
  let acumuladorPeso=0;
  let peso=0;
  let banderaLiquido=0;
  let banderaNombreLiquido;
  let banderaSolido=0;
  let banderaNombreSolido;
  let tipo;

  while(respuesta == "si"){
      marca=prompt("Marca del producto");
      while(!(isNaN(marca))){
          marca=prompt("Error. Marca del producto");
      }
      
      precio=parseFloat(prompt("Ingrese el precio"));
      while (precio<1) {
          precio=parseFloat(prompt("Error. Ingrese el precio"));  
      }

      peso=parseFloat(prompt("Ingrese el peso en Kilos"));
      while (peso<1) {
          peso=parseFloat(prompt("Error. Ingrese el peso en Kilos"));
      }
      acumuladorPeso+=peso;
      
      tipo=prompt("Que tipo de producto es solido/liquido: ").toLowerCase();
      while (!(tipo == "solido" || tipo == "liquido")) {
          tipo=prompt("Error. Que tipo de producto es solido/liquido: ").toLowerCase();
      }
      switch (tipo) {
          case "solido":
          if(banderaSolido==0 || banderaSolido > peso)  {
              banderaSolido=peso;
              banderaNombreSolido=marca;
          } 
              break;        
          default:
          if(banderaLiquido==0 || banderaLiquido<precio){
              banderaLiquido=precio;
              banderaNombreLiquido=marca;
          }
              break;
      }
      respuesta=prompt("Quiere ingresar otro producto? si/no").toLowerCase();
  }
  console.log("a)El peso total de la compra es de " + acumuladorPeso);
  if(!(banderaLiquido == 0 )){
      console.log("b)la marca del más caro de los líquidos: " + banderaNombreLiquido);
  }
  if(!(banderaSolido == 0)){
      console.log("c)la marca del más barato de los sólidos:  " + banderaNombreSolido);
  }
}
