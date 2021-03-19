var addButton = document.getElementById("add");
var sendButton = document.getElementById("send");
var choiceList = new Array();

addButton.addEventListener('click',function(event) {
	let inputChoice = document.getElementById("inputChoice");
	let textChoiceList = document.getElementById("choiceList");
	let choiceNumber = document.getElementById("choiceNumber");
	
	let inputValue = inputChoice.value;

	if (choiceList.includes(inputValue)) {
		// display a message but where and how ?
		return;
	}

	choiceList.push(inputValue);

	textChoiceList.insertAdjacentHTML('afterend','<p id="choice' + choiceList.length + '">' + inputValue + '</p>');
	textChoiceList.insertAdjacentHTML('afterend','<button id="button' + choiceList.length + '" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
	
	var quitButton = document.getElementById("button" + choiceList.length);
	var choice = document.getElementById("choice" + choiceList.length);
	var choices = document.getElementById("choices");
	choices.innerHTML += "<option value=" + inputValue + "></option>";

	quitButton.addEventListener('click', function(event) {
		choice.remove();
		quitButton.remove();
		choiceList.splice(choiceList.indexOf(inputValue),1);
		choiceNumber.innerHTML = "Number of choice : " + choiceList.length;
	});

	choiceNumber.innerHTML = "Number of choice : " + choiceList.length;
	return false;
})
