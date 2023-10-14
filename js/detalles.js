
document.addEventListener('DOMContentLoaded', () => {
    const detalleContainer = document.getElementById('detalleButton');
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

        const detalleDetalle = document.createElement('h5');
        detalleDetalle.textContent = `${detalle}`;

        const detalleDescripcion = document.createElement('h5');
        detalleDescripcion.textContent = `${descripcion}`;

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

        detalleContainer.append(detalleImagen);
        detalleContainer.append(detalleId);  
        detalleContainer.append(detalleNombre);
        detalleContainer.append(detalleDetalle);
        detalleContainer.append(detalleDescripcion);
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
        
        detalleContainer.append(mensajeError);
        detalleContainer.append(botonRedireccionar);
        
    }
    
});
