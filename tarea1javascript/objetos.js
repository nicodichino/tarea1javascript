class Carrito {
    constructor(montoTotal, productos) {
      this.montoTotal = montoTotal;
      this.productos = productos;
    }
  
    agregarProducto(nombre, precio, unidades) {
      try {
        if (this.productos.some(producto => producto.nombre === nombre)) {
          throw new Error(`Ya existe ${nombre} con ${unidades} unidades`);
        } else {
          this.productos.push({ nombre, precio, unidades });
          this.montoTotal += precio * unidades;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  const carrito = new Carrito(10, [{ nombre: "Leche", precio: 2, unidades: 1 }]);
  carrito.agregarProducto("Leche", 2, 2); 
  carrito.agregarProducto("Azucar", 5, 2); 
  carrito.agregarProducto("Pan", 3, 3); 
  console.log(carrito);
  