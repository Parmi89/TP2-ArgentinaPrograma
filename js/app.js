//Capturara el evento del click en comprar
const verCarrito = document.getElementById("verCarrito");
let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.getElementById("productos");

    // Utilizar Fetch API para cargar el archivo productos.json
    fetch("../Json/productos.json")
        .then((response) => response.json())
        .then((data) => {
            // FORMATO DE LA/LAS CARDS
            data.forEach((producto, index) => {
                const productoDiv = document.createElement("div");
                productoDiv.className = "card";

                const nombre = document.createElement("h2");
                nombre.textContent = producto.nombre;

                const detalle = document.createElement("p");
                detalle.textContent = producto.detalle;

                const precio = document.createElement("p");
                precio.textContent = `Precio: $${producto.precio.toFixed(2)}`;

                const imagen = document.createElement("img");
                imagen.src = producto.img;
                imagen.alt = producto.nombre;

                const detalleButton = document.createElement("button");
                detalleButton.textContent = "Detalle";
                detalleButton.className = "boton-verde";
                detalleButton.addEventListener("click", () => {
                    mostrarDetalle(producto, index);
                });

                let comprar = document.createElement("button");
                comprar.innerText = "Comprar";
                comprar.className = "boton-gris";

                //MOSTRANDO ELEMENTOS EN HTML
                productoDiv.appendChild(imagen);
                productoDiv.appendChild(nombre);
                productoDiv.appendChild(detalle);
                productoDiv.appendChild(precio);
                productoDiv.appendChild(detalleButton);
                productoDiv.appendChild(comprar);

                productosContainer.appendChild(productoDiv);

                //funcionalidad en boton COMPRAR
                comprar.addEventListener("click", () => {
                    carrito.push({
                        id: producto.id,
                        nombre: producto.nombre,
                        detalle: producto.detalle,
                        img: producto.img,
                        precio: producto.precio,
                    });
                    console.log(carrito);
                });
            });
        })
        .catch((error) => {
            console.error("Error al cargar los productos:", error);
        });

    // Función para redirigir a detalles.html con información adicional en la URL
    function mostrarDetalle(producto, index) {
        const queryString = `id=${encodeURIComponent(
            producto.id
        )}&nombre=${encodeURIComponent(
            producto.nombre
        )}&detalle=${encodeURIComponent(
            producto.detalle
        )}&descripcion=${encodeURIComponent(
            producto.descripcion
        )}&precio=${encodeURIComponent(
            producto.precio
        )}&imagen=${encodeURIComponent(producto.img)}`;
        window.location.href = `detalles.html?${queryString}`;
    }
});
//creando ventana modal
verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title"> Productos seleccionados </h1>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";
    //cerrar ventana modal
    modalbutton.addEventListener("click",() => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
      <img src= "${product.img}">
      <h1>${product.nombre} </h1> 
      <h2>$ ${product.precio} </h2>
      `;
        modalContainer.append(carritoContent);
    });
    //"prod" representa cada producto
    const total = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar: $ ${total} `;
    modalContainer.append(totalCompra);
});
