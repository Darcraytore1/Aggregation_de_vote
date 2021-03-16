var addButton = document.getElementById("add");
var choiceList = new Array();

addButton.addEventListener("click",function(event) {
	let inputChoice = document.getElementById("inputChoice");
	let textChoiceList = document.getElementById("choiceList");
	let choiceNumber = document.getElementById("choiceNumber");
	
	let inputValue = inputChoice.value;

	if (choiceList.includes(inputValue)) {
		// display a message but where and how ?
		return;
	}

	choiceList.push(inputValue);

	let br = document.createElement("br");
	textChoiceList.after(br)
	textChoiceList.after(inputValue);
	
	choiceNumber.innerHTML = "Number of choice : " + choiceList.length;
})