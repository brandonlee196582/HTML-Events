
var myButton = document.querySelector("#myButton");
var myButtonClicks = 0;
var alsoMyButton = document.querySelector("#alsoMyButton");
var alsoMyButtonClicks = 0;
var myButtonClicks3 = 0;
var myButtonClicks4 = 0;
var totalClicks = 0;

var logText = function(event) {
    totalClicks++;
    document.querySelector("#totalButtonsClicked").textContent = totalClicks;
    console.log(event.target.textContent);

    if (event.target === document.querySelector("#myButton3")){
        myButtonClicks3++;
        event.target.textContent = 'Clicked ' + myButtonClicks3 + ' times';
    }

    if (event.target === document.querySelector("#myButton4")){
        myButtonClicks4++;
        event.target.textContent = 'Clicked ' + myButtonClicks4 + ' times';
    }
}

window.addEventListener("click", logText);

myButton.addEventListener("click", function(){
    myButtonClicks++
    myButton.textContent = 'Clicked ' + myButtonClicks + ' times'
});

alsoMyButton.addEventListener("click", function(){
    alsoMyButtonClicks++
    alsoMyButton.textContent = 'Clicked ' + alsoMyButtonClicks + ' times'
});