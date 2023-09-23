
document.addEventListener('DOMContentLoaded', () => {
    const detalleContainer = document.getElementById('detalle');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    const id = urlParams.get('id');
    const nombre = urlParams.get('nombre');
    const detalle = urlParams.get('detalle');
    const descripcion = urlParams.get('descripcion');
    const precio = urlParams.get('precio');
    const imagen = urlParams.get('imagen');

    if (id) {
        const detalleId = document.createElement('h4');
        detalleId.textContent = `Codigo: ${id}`;

        const detalleNombre = document.createElement('h2');
        detalleNombre.textContent = `${nombre}`;

        const detalleDetalle = document.createElement('p');
        detalleDetalle.textContent = `Detalle: ${detalle}`;

        const detalleDescripcion = document.createElement('p');
        detalleDescripcion.textContent = `Descripcion: ${descripcion}`;

        const detallePrecio = document.createElement('p');
        detallePrecio.textContent = `Precio: $ ${precio}`;

        const detalleImagen = document.createElement('img');
        detalleImagen.src = imagen;
        detalleImagen.alt = nombre;

        detalleContainer.appendChild(detalleId);    
        detalleContainer.appendChild(detalleImagen);
        detalleContainer.appendChild(detalleNombre);
        detalleContainer.appendChild(detalleDetalle);
        detalleContainer.appendChild(detalleDescripcion);
        detalleContainer.appendChild(detallePrecio);
    } else {
        const mensajeError = document.createElement('p');
        mensajeError.textContent = 'No se encontraron detalles del producto.';
        detalleContainer.appendChild(mensajeError);
    }
});