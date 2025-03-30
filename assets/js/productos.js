document.addEventListener("DOMContentLoaded", ()=>{
	const container = document.querySelector('.container')
	const productosLS = JSON.parse(localStorage.getItem("productos")) || []
	if (productosLS.length > 0) {
	  productosLS.forEach((producto, index)=>{
		const box = document.createElement("div")
		box.classList.add("box")
		box.innerHTML = `
		  <div class="cont-img">
			<img src="${producto.imagen}" class="cont-img" alt="Imagen de ${producto.nombre}">
			<div class="img-overlay">
			  <div class="img-title">
				<a href="./producto.html?id=${index}">${producto.nombre}</a>
			  </div>
			  <p class="img-description">${producto.descripcion}</p>
			  <p class="img-description">$${producto.precio}</p>
			</div>
		  </div>
		`
		container.appendChild(box);
	  });
	}
  });
  