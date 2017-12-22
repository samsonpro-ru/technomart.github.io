var feedback = document.querySelector(".write-us-feedback");

var popup = document.querySelector(".modal-write-us");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");

var names = popup.querySelector("[name=name]");

var emails = popup.querySelector("[name=email]");

var texts = popup.querySelector("[name=text]");

feedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	names.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!names.value || !emails.value || !texts.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	};
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});