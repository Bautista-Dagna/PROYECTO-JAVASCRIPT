alert(`Bienvenido a De La Pipa`);

const nombre = prompt(`Ingrese su nombre`);
const cantidadProductos = parseInt(prompt(`Ingrese la cantidad de unidades`));
const deseaEnvio = confirm(`¿Desea envío a domicilio?`);

let direccionEnvio = null;


/* Si el cliente requiere envío a domicilio */
while (deseaEnvio && !direccionEnvio) {
  direccionEnvio = prompt(`Ingrese la dirección de envío:`);

  if (!direccionEnvio) {
    alert(`Debe ingresar una dirección de envío`);
  }
}

/* Precios */
const precioHamburguesa = 1200;
const costoEnvio = 200;

/* Calcular precio total */
function calcularPrecioTotal(cantidadProductos, deseaEnvio, direccionEnvio) {
  const precioProductos = precioHamburguesa * cantidadProductos;

  let precioTotal = precioProductos;

  if (deseaEnvio) {
    precioTotal += costoEnvio;
  }

  let mensaje = `${nombre}, el precio total es de: ${precioTotal}.`;

  if (direccionEnvio) {
    mensaje += ` El pedido será entregado en: ${direccionEnvio}.`;
  }

  alert(mensaje);
}

alert(`¡${nombre}!, gracias por comprar en De la Pipa.`);

calcularPrecioTotal(cantidadProductos, deseaEnvio, direccionEnvio);