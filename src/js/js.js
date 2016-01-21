window.onload=function (argument) {
	console.log("loaded!")
	var codes=document.querySelectorAll("code")
	for (var i = codes.length - 1; i >= 0; i--) {
		codes[i].className="prettyprint"
	};

	prettyPrint()
}