const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//SIRVE PARA RECUPERAR LA INF GUARDADA EN EL LST
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
  const response = await fetch('json/products.json');
  const data = await response.json();

  // FORMATO DE LA/LAS CARDS
  data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src = ${product.img}>
      <h2>${product.nombre}</h2>
      <h5 class="price">$${product.precio}</h5>
    `;

    shopContent.append(content);
    //BOTON COMPRAR
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "boton-gris";

    content.append(comprar);

    //BOTON DETALLE
    let detalleButton = document.createElement("button");
    detalleButton.textContent = "Detalle";
    detalleButton.className = "boton-verde";
    content.append(detalleButton);

    //funcion comprar
    comprar.addEventListener("click", () => {
      //Verifica si el prod ya existe en los seleccionados
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
      }
    });
  // Función para redirigir a detalles.html con información adicional en la URL
  detalleButton.addEventListener("click", (id) => {
    const queryString =
      `id=${encodeURIComponent(
        product.id
      )}&nombre=${encodeURIComponent(
        product.nombre
      )}&detalle=${encodeURIComponent(
        product.detalle
      )}&descripcion=${encodeURIComponent(
        product.descripcion
      )}&precio=${encodeURIComponent(
        product.precio
      )}&imagen=${encodeURIComponent(product.img)}`;
    window.location.href = `detalles.html?${queryString}`;
  }
 );
});
};

getProducts();

//GUARDANDO LA SELECCION DEL CARRITO CON LOCALSTORAGE
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
