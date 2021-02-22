let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	// let ul = document.querySelector("#myList");
	let ul = document.getElementById("myList");
	let li = document.createElement("li");
	li.innerHTML = "Forth element";
    ul.appendChild(li);
    
    
});
