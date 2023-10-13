const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//SIRVE PARA RECUPERAR LA INF GUARDADA EN EL LST
let carrito = JSON.parse(localStorage.getItem("carrito")) || [] ;

const getProducts = async () => {
  const response = await fetch("../json/products.json")
  const data = await response.json();

  // FORMATO DE LA/LAS CARDS
  data.forEach((product) => {
    let content = document.createElement("div");
    content.innerHTML = `
      <img src = ${product.img}>
      <h3>${product.nombre}</h3>
      <p class="price">$${product.precio}</p>
    `;
  
    shopContent.append(content);
    //BOTON COMPRAR
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "boton-gris";
  
    content.append(comprar);
  
    //funcion comprar
    comprar.addEventListener("click", () => {
      //Verifica si el prod ya existe en los seleccionados
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
      
      if(repeat) {
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        }); 
    } else {
        carrito.push({
            id:product.id,
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
  });
};

getProducts();




//GUARDANDO LA SELECCION DEL CARRITO CON LOCALSTORAGE
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
