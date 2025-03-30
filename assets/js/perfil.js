document.addEventListener("DOMContentLoaded", function () {
	const contenedorProductos = document.querySelector(".container")
	const productos = JSON.parse(localStorage.getItem("productos")) || []
	if (productos.length === 0){
	  return;
	}
  
	productos.forEach((producto, index)=> {
	  const productoHTML = `
		<div class="box">
		  <div class="cont-img">
			<img src="${producto.imagen}" class="cont-img" alt="Imagen del producto">
			<div class="img-overlay">
			  <div class="img-title">
				<a href="../../productos/producto.html?id=${index}" class="nav-link">${producto.nombre}</a>
			  </div>
			  <p class="img-description">${producto.descripcion}</p>
			  <p class="img-description"><strong>Precio:</strong> $${producto.precio}</p>
			</div>
		  </div>
		</div>
	  `
	  contenedorProductos.innerHTML += productoHTML
	});
  });
  