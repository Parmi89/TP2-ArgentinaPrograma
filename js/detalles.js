
document.addEventListener('DOMContentLoaded', () => {
    const detalleContainer = document.getElementById('detalle');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    const nombre = urlParams.get('nombre');
    const precio = urlParams.get('precio');
    const imagen = urlParams.get('imagen');

    if (nombre && precio && imagen) {
        const detalleNombre = document.createElement('h2');
        detalleNombre.textContent = nombre;

        const detallePrecio = document.createElement('p');
        detallePrecio.textContent = `Precio: $${precio}`;

        const detalleImagen = document.createElement('img');
        detalleImagen.src = imagen;
        detalleImagen.alt = nombre;

        detalleContainer.appendChild(detalleNombre);
        detalleContainer.appendChild(detallePrecio);
        detalleContainer.appendChild(detalleImagen);
    } else {
        const mensajeError = document.createElement('p');
        mensajeError.textContent = 'No se encontraron detalles del producto.';
        detalleContainer.appendChild(mensajeError);
    }
});