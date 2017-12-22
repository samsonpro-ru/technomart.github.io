var cart = document.querySelectorAll(".catalog-button-buy");

var popupfree = document.querySelector(".cart");

var close = popupfree.querySelector(".modal-close");

for (var i = 0; i < cart.length; i++) {
	cart[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		popupfree.classList.add("modal-show");
	});
};

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupfree.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popupfree.classList.contains("modal-show")) {
			popupfree.classList.remove("modal-show");
		}
	}
});