function calculateTotal() {
	let billAmount = Number(
		document.querySelector(".js-bill-amount-input").value
	);
	let total = 0;
	let tipPercentage = Number(
		document.querySelector(".js-tip-percentage-input").value
	);

	if (!isNaN(billAmount) && billAmount > 0) {
		total = billAmount;
		if (!isNaN(tipPercentage)) {
			let tipAmount = (billAmount * tipPercentage) / 100;
			total += tipAmount;
		}
		document.querySelector(
			".js-total-display"
		).innerHTML = `Total: $${total.toFixed(2)}`;
		return;
	}
	document.querySelector(".js-total-display").innerHTML = "$0";
}

let buttonElement = document.querySelector(".js-total-bill-amount");
buttonElement.addEventListener("click", calculateTotal);
