var converter = {
	originText: "",
	textArray: [],
}

converter.getText = function() {
	this.originText = document.getElementById("text").value
	this.makeArray()
	var content = document.createElement('div')
	for (var i = 0; i < this.textArray.length; i++) {
		this.textArray[i] = this.format(this.textArray[i])
		if (this.textArray[i].nodeType === 1) {
			content.appendChild(this.textArray[i])
		}
		console.log(this.textArray[i])
	}
	document.getElementById("show").appendChild(content)
}

converter.makeArray = function() {
	this.textArray = this.originText.split("\n\n")
}

converter.format = function(text) {
	var html
	var identifier = text.split('', 1)[0]
	var content = text.replace(identifier, '')
	switch (identifier) {
		case "#":
			html = document.createElement("h2")
			html.innerHTML = content
			break
		case "*":
			var code = document.createElement("code")
			html = document.createElement("pre")
			code.innerHTML = content
			code.className = 'class="prettyprint" data-lang="text"'
			html.appendChild(code)
			break
		case "":
			return ''
		case "-":
			html = document.createElement("li")
			html.innerHTML = content
			break
		case "&":
			html = document.createElement("blockquote")
			html.innerHTML = content
			break
		default:
			html = document.createElement("p")
			html.innerHTML = text
			break
	}
	return html
}
