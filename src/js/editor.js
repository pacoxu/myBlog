var converter = {
    originText: "",
}

converter.getText=function() {
    this.originText = document.getElementById("text")
}

converter.makeArray=function(textArray){
    for(var i in textArray){
        textArray = this.originText.split("\n")
        this.makeArray(textArray[i])
    }
}