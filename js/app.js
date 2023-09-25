//Capturara el evento del click en comprar
const verCarrito = document.getElementById("verCarrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
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
                    saveLocal();
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

//CREANDO LOCALSTORAGE PARA EL CARRITO
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
