let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
    //your code here
    
	let divv = document.createElement("div");
	divv.innerHTML = "Hello World";
	divv.style.background = "yellow";
	document.body.appendChild(divv);
});
