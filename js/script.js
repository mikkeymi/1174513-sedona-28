var showForm = document.querySelector(".search_hotels");
var modalForm = document.querySelector(".form_body");
var formLogin = document.querySelector(".form_search");
var arrivalDate = document.querySelector("#arrival_date");
var departuresDate = document.querySelector(".date_departures");
var quantityAdults = document.querySelector(".adults_quantity");

document.addEventListener("DOMContentLoaded", function () {
    modalForm.classList.add("modal_hide");
});

showForm.addEventListener("click", function () {
	modalForm.classList.toggle("modal_hide");
	modalForm.classList.remove("form_error");
});

formLogin.addEventListener("submit", function (evt) {
	if (!arrivalDate.value || !departuresDate.value || 
		!quantityAdults.value) {  
		evt.preventDefault();
		modalForm.classList.remove("form_error");
		modalForm.offsetWidth = modalForm.offsetWidth;
		modalForm.classList.add("form_error");
	}  
});
