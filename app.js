var btnTranslate = document.querySelector("#click");

btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log("clicked")
})

var copyBtn = document.querySelector("#copy");
var textArea = document.querySelector("#input")
var outputPlace = document.querySelector("#output")

copyBtn.addEventListener("click",function clickEventHandler(){
    outputPlace.innerText = textArea.value
})