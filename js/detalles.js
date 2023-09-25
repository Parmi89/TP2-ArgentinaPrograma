
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
        const detalleId = document.createElement('h5');
        detalleId.textContent = `Codigo: ${id}`;

        const detalleNombre = document.createElement('h1');
        detalleNombre.textContent = `${nombre}`;

        const detalleDetalle = document.createElement('p');
        detalleDetalle.textContent =`Detalle:${detalle}`;

        const detalleDescripcion = document.createElement('p');
        detalleDescripcion.textContent = `Descripcion: ${descripcion}`;

        const detallePrecio = document.createElement('h4');
        detallePrecio.textContent = `Precio: $ ${precio}`;

        const detalleImagen = document.createElement('img');
        detalleImagen.src = imagen;
        detalleImagen.alt = nombre;

        const botonRedireccionar = document.createElement("button");
        botonRedireccionar.textContent = "Volver";
        botonRedireccionar.className = "boton-verde"
        botonRedireccionar.addEventListener("click", function () {
        window.location.href = "index.html";
        });

        detalleContainer.appendChild(detalleImagen);
        detalleContainer.appendChild(detalleId);  
        detalleContainer.appendChild(detalleNombre);
        detalleContainer.appendChild(detalleDetalle);
        detalleContainer.appendChild(detalleDescripcion);
        detalleContainer.appendChild(detallePrecio);
        detalleContainer.appendChild(botonRedireccionar);
    } else {
        const mensajeError = document.createElement('p');
        mensajeError.textContent = 'No se encontraron detalles del producto.';
        
        const botonRedireccionar = document.createElement("button");
        botonRedireccionar.textContent = "Volver";
        botonRedireccionar.className = "boton-verde"
        botonRedireccionar.addEventListener("click", function () {
        window.location.href = "index.html";
        });
        
        detalleContainer.appendChild(mensajeError);
        detalleContainer.appendChild(botonRedireccionar);
        
    }
    
});
