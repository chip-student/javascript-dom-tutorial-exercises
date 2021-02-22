// Your code here
function addtask() {
	let ul = document.querySelector("ul");
	let item = document.getElementById("addToDo");

	// este if es para que no agrege un li sin digitar en el input text
	let li = document.createElement("li");
	let span = document.createElement("span");
	let i = document.createElement("i");
	i.className = "fa fa-trash";
	span.appendChild(i);
	li.appendChild(span);
	li.appendChild(document.createTextNode(" " + item.value));
	// se asigna la lista
	ul.appendChild(li);

	//retorna el nuevo item creado
	let item2 = document.querySelectorAll(".fa-trash");
	// console.log(item2);
	return item2;
}

document.getElementById("addToDo").addEventListener("change", function() {
	if (this.length > 0) {
		addtask();
	}
});

let items = addtask();
console.log(items);

//Lista de li
let listItems = document.querySelectorAll("li");
console.log(listItems);
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", function() {
		listItems[i].remove();
	});
}
