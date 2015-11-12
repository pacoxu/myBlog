var converter = {
	originText: "",
	textArray: [],
}

converter.convert = function(text) {
	this.originText = text
	this.makeArray()
	var content = ""
	for (var i = 0; i < this.textArray.length; i++) {
		this.textArray[i] = this.format(this.textArray[i])
		content+=this.textArray[i]
	}
	return content
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
			html = "<h2>"+content+"</h2>"
			break
		case "*":
			html = '<pre><code class="prettyprint" data-lang="text">'+
				content+
				'</code></pre>'
			break
		case "-":
			html = "<li>"+content+"</li>"
			break
		case "&":
			html = "<blockquote>"+content+"</blockquote>"
			break
		default:
			html = "<p>"+text+"</p>"
			break
	}
	return html
}

module.exports=converter