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