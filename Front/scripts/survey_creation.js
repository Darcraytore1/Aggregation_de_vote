let addButton = document.getElementById("add");
let sendButton = document.getElementById("send");
let inputChoice = document.getElementById("input_choice");
let allChoices = document.getElementById("all_choices");
let name_enr = document.getElementById("input_survey_name");
let description_enr = document.getElementById("input_survey_description");
var i = 0;

function ajouter(){
	if(inputChoice){
		i = i+1;
		let input = document.createElement("input");
		input.id = 'choice' + i;
		input.name = "choice[]";
		input.value = inputChoice.value;
		input.type = "checkbox";

		let label = document.createElement("label");
		label.innerHTML = inputChoice.value + '<button id="button' + i + '" type="button" class="close" aria-label="Close" onClick="remove('+i+')"><span aria-hidden="true">&times;</span></button>';
		label.id = 'label' + i;

		let br = document.createElement("br");
		br.id = 'br' + i;

		allChoices.appendChild(input);
		allChoices.appendChild(label);
		allChoices.appendChild(br);

		localStorage.setItem("index",i);
		localStorage.setItem(allChoices.id, allChoices.innerHTML);	
	}
}

function remove(index){
	var choice = document.getElementById("choice" + index);
	var label_choice = document.getElementById("label" + index);
	var br = document.getElementById("br" + index);

	choice.remove();
	label_choice.remove();	
	br.remove();
	localStorage.setItem(allChoices.id, allChoices.innerHTML);	
}

function init() {
	name_enr.value = localStorage.getItem(name_enr.id);
	description_enr.value = localStorage.getItem(description_enr.id);
	if(localStorage.getItem(allChoices.id)!=null){
		allChoices.innerHTML = localStorage.getItem(allChoices.id);
	}
	if(parseInt(localStorage.getItem("index"))){
		i = parseInt(localStorage.getItem("index"));
	}
}

function getname() {
	localStorage.setItem(name_enr.id,name_enr.value);
}

function getdesc() {
	localStorage.setItem(description_enr.id,description_enr.value);
}