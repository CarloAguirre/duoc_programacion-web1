document.addEventListener("DOMContentLoaded", () => {
	// Selecciona el contenedor que tiene las cartas estáticas
	// (en tu HTML está dentro de .container -> .product-content)
	const productContent = document.querySelector('.product-content');
	
	// Obtén los productos del localStorage
	const productosLS = JSON.parse(localStorage.getItem("productos")) || [];
  
	// Si hay productos en localStorage, generamos una carta para cada uno
	if (productContent && productosLS.length > 0) {
	  productosLS.forEach((producto, index) => {
		// Crea un nuevo div con la clase .product-box
		const productBox = document.createElement("div");
		productBox.classList.add("product-box");
  
		// Replica la estructura de tus cartas estáticas
		productBox.innerHTML = `
		  <div class="img-box">
			<img src="${producto.imagen}" alt="Imagen de ${producto.nombre}"/>
		  </div>
		  <a href="./producto.html?id=${index}">
			<h2 class="name">${producto.nombre}</h2>
		  </a>
		  <p class="img-description">${producto.descripcion}</p>
		  <div class="price-and-cart">
			<span class="price">$${producto.precio}</span>
			<button class="addCart">Añadir al carrito</button>
		  </div>
		`;
  
		// Agrega la nueva carta al contenedor
		productContent.appendChild(productBox);
	  });
	}
  });
  