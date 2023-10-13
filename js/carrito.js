//Creamos la ventana modal
const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
	<h1 class="modal-header-title">Carrito.</h1>
	`;
  modalContainer.append(modalHeader);
  //Boton cerrar del modal
  const modalButton = document.createElement("h1");
  modalButton.innerText = "Cerrar";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);
  //
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
	<img src = ${product.img}>
	<h3>${product.nombre}</h3>
	<p>$${product.precio}</p>
  <span class= "restar"> - </span>
  <p>Canti. ${product.cantidad}</p>
  <span class= "sumar"> + </span>
  <p> Total: ${product.cantidad * product.precio}</p>
  <button class= "delete-product">Quitar</button>
`;
    modalContainer.append(carritoContent);

//Capturo los botones y le paso los eventos al restar
let restar = carritoContent.querySelector(".restar");

restar.addEventListener("click", () =>{
  if (product.cantidad !== 1){
    product.cantidad--;
  }
  saveLocal();
  pintarCarrito();
});

//Capturo los botones y le paso los eventos al sumar ahora
let sumar = carritoContent.querySelector(".sumar");

sumar.addEventListener ("click", () => {
  product.cantidad++;
  saveLocal();
  pintarCarrito();
});

//Boton para quitar productos seleccionados
let eliminar = carritoContent.querySelector(".delete-product");

eliminar.addEventListener("click", () => { 
  eliminarProducto(product.id);
  saveLocal();
  pintarCarrito();
});

    eliminar.addEventListener("click" , eliminarProducto);
  });

  //Calculando cuentas de compra
  const total = carrito.reduce(
    (acumulador, prod) => acumulador + (prod.precio * precio.cantidad),0
  );

  const totalCompra = document.createElement("div");
  totalCompra.className = "total-content";
  totalCompra.innerHTML = `Total a abonar: $ ${total}`;
  modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

//Funcion para quitar los productos
const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoCounter();
  saveLocal();
  pintarCarrito();
  
};

//Funcion para que aparezca en el icono la cant de elementos seleccionados
const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  //GUARDAR LA CANTIDAD EN EL LST
  const carritoLength = carrito.length;
  
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

//PARA QUE APAREZCA EL ITEMS AL REFRESCAR LA PAG
carritoCounter();
