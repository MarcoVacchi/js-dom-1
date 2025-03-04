const elementPick = document.getElementById ("no-light");
const elementButton = document.getElementById ("my-button");

//console.log(elemenButton);
//console.log(elementPick);

elementButton.addEventListener("click", function (){
   if (elementPick.src.includes("white_lamp.png")) {
       elementPick.src = "../img/yellow_lamp.png";
       elementPick.alt = "lampadina accesa";
       elementButton.innerText = "Spegni";

   } else {
    elementPick.src =  "../img/white_lamp.png";
    elementButton.innerText = "Accendi";
   }  
});


/*BONUS
Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
- E così via...
Per fare questo bonus potremmo aver bisogno di del metodo string.includes()
Come detto a lezione, attenetevi al testo.
Se volete sbizzarrirvi, fatelo in una cartella ulteriore (tipo bonus-1, bonus-2)
Buon Lavoro e buon divertimento! :saluto_vulcaniano:*/