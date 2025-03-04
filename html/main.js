const elementPick = document.getElementById ("no-light");
const elementButton = document.getElementById ("my-button");

//console.log(elemenButton);
//console.log(elementPick);

elementButton.addEventListener("click", function (){
    elementPick.src =  "../img/yellow_lamp.png";
    elementPick.alt = "lampadina accesa";
    console.log(elementPick); 
});
