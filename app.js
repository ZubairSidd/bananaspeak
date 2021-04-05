var copyBtn = document.querySelector("#copy");
var textArea = document.querySelector("#input")
var outputPlace = document.querySelector("#output")
var url = "https://api.funtranslations.com/translate/minion.json?"



function getTranslationURL(text){
    return text = url + "text=" + text
}
function errorHandler(){
    console.log("error occured", error)
    alert("something wrong with server! try again after some time")
}
function clickEventHandler() {
    var inputText = textArea.value 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => outputPlace.innerText = json.contents.translated)
    .catch(errorHandler)
}

copyBtn.addEventListener("click",clickEventHandler)
