//creando ventana modal
const pintarCarrito = () =>{
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
  
  <h1 class="modal-header-title"> Productos seleccionados </h1>
  `;
modalContainer.append(modalHeader);

const modalbutton = document.createElement("button");
modalbutton.innerText = "Cerrar";
modalbutton.className = "boton-cerrar";
//cerrar ventana modal
modalbutton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

modalHeader.append(modalbutton);

carrito.forEach((product) => {
  let carritoContent = document.createElement("div");
  carritoContent.className = "modal-content";
  carritoContent.innerHTML = `
  <img src= "${product.img}">
  <h1>${product.nombre} </h1> 
  <h1>$ ${product.precio} </h1>
  `;
  modalContainer.append(carritoContent);
  //Boton quitar producto del modal
  let eliminar = document.createElement("button");
  eliminar.innerText = "Quitar";
  eliminar.className = "boton-quitar";
  carritoContent.append(eliminar);
  eliminar.addEventListener("click", eliminarProducto);
});

//"prod" representa cada producto
const total = carrito.reduce(
  (acumulador, prod) => acumulador + prod.precio,
  0
);

const totalCompra = document.createElement("div");
totalCompra.className = "total-content";
totalCompra.innerHTML = `Total a pagar: $ ${total} `;
modalContainer.append(totalCompra);
}

verCarrito.addEventListener("click", pintarCarrito);

//FUNC DE ELIMINAR PRODUCTO
const eliminarProducto = () => {
const foundId = carrito.find((element) => element.id);

carrito = carrito.filter((carritoId) => {
  return carritoId !== foundId;
});
saveLocal();
pintarCarrito();
};