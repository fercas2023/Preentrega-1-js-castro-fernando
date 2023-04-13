function comprarPantalones(cantidad, precio) {
    let total = cantidad * precio;
    
    if (cantidad > 0 && precio > 0) {
      if (cantidad >= 3) {
        total *= 0.8; // Aplicamos un descuento del 20% si se compran 3 o más pantalones
      }
  
      for (let i = 1; i <= cantidad; i++) {
        console.log(`Pantalón ${i} comprado por ${precio} pesos`);
      }
      
      console.log(`El total de la compra es ${total} pesos.`);
    } else {
      console.log("La cantidad y el precio deben ser números positivos.");
    }
  }
//ejemplo 1//
  comprarPantalones(3, 2500);

//ejemplo 2 //
  comprarPantalones(2, 2500);