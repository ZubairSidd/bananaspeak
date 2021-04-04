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