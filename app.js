var copyBtn = document.querySelector("#copy");
var textArea = document.querySelector("#input")
var outputPlace = document.querySelector("#output")

function clickEventHandler(){
    outputPlace.innerText = textArea.value
}

copyBtn.addEventListener("click",clickEventHandler)