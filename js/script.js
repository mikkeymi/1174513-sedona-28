

var showForm = document.querySelector(".search_hotels");
var modalForm = document.querySelector(".form_body");

showForm.addEventListener("click", function () {


	console.log(modalForm.classList);
	modalForm.classList.toggle("modal-hide");
	console.log(modalForm.classList);
});

