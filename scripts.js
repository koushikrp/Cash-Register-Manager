const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".numberOfNotes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function showErrorMessage(message) {
	errorMessage.style.display = "block";
	errorMessage.innerText = message;
}

checkButton.addEventListener("click", () => {
	hideMessage();
	if (isNaN(billAmount.value)) {
		showErrorMessage("* Bill Amount should not be a String. Please Enter a Positive Integer.");
	} else if (isNaN(cashGiven.value)) {
		showErrorMessage("* Cash Given should not be a String. Please Enter a Positive Integer.");
	} else if (billAmount.value > 0) {
		if (cashGiven.value >= billAmount.value) {
			const amountToReturn = cashGiven.value - billAmount.value;
			calculateChange(amountToReturn);
		} else {
			showErrorMessage("* Cash provided should be atleast the Bill Amount");
		}
	} else {
		showErrorMessage("* Invalid Bill Amount. Bill Amount should be Positive");
	}
});

function hideMessage() {
	errorMessage.style.display = "none";
}
function calculateChange(amount) {
	for (let i = 0; i < availableNotes.length; i++) {
		let noteAmount = availableNotes[i];
		const numberOfNotes = Math.trunc(amount / noteAmount);
		amount %= noteAmount;
		noOfNotes[i].innerText = numberOfNotes;
	}
}
