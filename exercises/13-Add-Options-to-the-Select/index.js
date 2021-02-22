window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let x = document.querySelector("#mySelect");
	for (let i = 0; i < countries.length; i++) {
		let option = document.createElement("option");
		option.innerHTML = countries[i];
		x.appendChild(option);
	}

	document.getElementById("mySelect").addEventListener("change", function() {
		let selected_value = document.getElementById("mySelect").value;
		alert("An embedded page at replit.org says: " + selected_value);
	});
};
