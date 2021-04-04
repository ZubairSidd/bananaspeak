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

var userAnswer = document.querySelector("#leap-year")
var leapBtn = document.querySelector("#leap-check")
var leapAnswer = document.querySelector("#leap-answer")

leapBtn.addEventListener("click", function clickEventHandler(){
    if((0 == userAnswer.value % 4) && (0 != userAnswer.value % 100) || (0 == userAnswer.value % 400)){
        return leapAnswer.innerText = "Leap year";
    }else{
        return leapAnswer.innerText = "Not a Leap Year";
    }
})

var prime = document.querySelector("#prime")
var primeBtn = document.querySelector("#prime-check")
var primeAnswer = document.querySelector("#prime-answer")

primeBtn.addEventListener("click", function clickEventHandler(){
    var isPrime = true;
    if(prime.value == 1){
        primeAnswer.innerText = "Prime Number"
    }else if(prime.value > 1){
        for (var i = 2; i < prime.value; i++) {
            if (prime.value % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeAnswer.innerText = "Prime Number"
        } else {
            primeAnswer.innerText = " Not a Prime Number"
        }
    }
})