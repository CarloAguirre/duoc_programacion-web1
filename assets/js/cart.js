const cartIcon = document.querySelector(".icon-cart");
const cart =document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".addCart");
addCartButtons.forEach(button => {
	button.addEventListener("click", event => {
		const productBox = event.target.closest(".product-box")
		addToCart(productBox);
	});
});

const cartContent = document.querySelector(".cart-content");
const addToCart = productBox => {
	const productImgSrc = productBox.querySelector("img").src;
	const productTitle = productBox.querySelector(".name").textContent;
	const productPrice = productBox.querySelector(".price").textContent;

	const cartItems = cartContent.querySelectorAll(".cart-product-title");
	for (let item of cartItems) {
		if (item.textContent === productTitle) {
		alert("El producto ya está en el carrito.");
		return;
		}
	}

	const cartBox = document.createElement("div");
	cartBox.classList.add("cart-box");
	cartBox.innerHTML = `<img src="${productImgSrc}" class="cart-img">
          <div class="cart-detail">
            <h2 class="cart-product-title">${productTitle}</h2>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quantity">
              <button id="decrement">-</button>
              <span class="number">1</span>
              <button id="increment">+</button>
            </div>
          </div>
          <i class="ri-delete-bin-6-fill cart-remove"></i>
	`;

	cartContent.appendChild(cartBox);

	cartBox.querySelector(".cart-remove").addEventListener("click", () => {
		cartBox.remove();

		updateCartCount(-1);

		updateTotalPrice();
	})

	cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
		const numberElement = cartBox.querySelector(".number");
		const decrementButton = cartBox.querySelector("#decrement");
		let quantity = numberElement.textContent;

		if (event.target.id === "decrement" && quantity >1) {
			quantity--;
			if (quantity === 1) {
				decrementButton.style.color = "#999";
			}
		} else if (event.target.id === "increment") {
			quantity++;
			decrementButton.style.color = "#eee";
		}

		numberElement.textContent = quantity;

		updateTotalPrice();
	});

	updateCartCount(1);

	updateTotalPrice();
};

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;

    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = parseFloat(priceElement.textContent.replace("$", "").trim());
        const quantity = parseInt(quantityElement.textContent.trim(), 10);
        total += price * quantity;
    });

    totalPriceElement.textContent = `$${total.toLocaleString("es-CL", { minimumFractionDigits: 3, maximumFractionDigits: 3 })}`;
};

let cartItemCount = 0;
const updateCartCount = change => {
	const cartItemCountBadge = document.querySelector(".cart-item-count");
	cartItemCount += change;
	if (cartItemCount > 0) {
		cartItemCountBadge.style.visibility = "visible";
		cartItemCountBadge.textContent = cartItemCount;
	} else {
		cartItemCountBadge.style.visibility = "hidden";
		cartItemCountBadge.textContent = "";
	}
};