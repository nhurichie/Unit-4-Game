$(document).ready(function() { 
    // let VARIABLES = 0
    let blue = 0;
    let yellow = 0;
    let green = 0;
    let red = 0;
    let yourWins = 0;
    let yourLosses = 0;
    let theTotScore = 0;
    let compNumbers = 0;


    $("#score").html(theTotScore);
 
    const genRandoNumbers = function() {
        let random = Math.floor(Math.random() * 100 + 19);
        compNumbers += random;
        return random;
    }

    //GENERATE RANDOM Numbers
    $("#randomNumber").html(genRandoNumbers());

    const genCrystalNumbers = function() {
        let random = Math.floor(Math.random() * 12 + 1);
        return random;
    }
    

    //GENERATE RANDOM NUMBERS, PER CRYSTAL - ASSIGN VALUES
    const setCrystalNumbers = function() {
        green += genCrystalNumbers();
        blue += genCrystalNumbers();
        yellow += genCrystalNumbers();
        red += genCrystalNumbers();
    }

    setCrystalNumbers();

    // BUTTON CLICK TO CRYSTAL 
    $("button").on("click", function() {
        if(this.id === "blue") {
            theTotScore += blue;
        } else if(this.id === "yellow") {
            theTotScore += yellow;
        } else if(this.id === "red") {
            theTotScore += red;
        } else if(this.id === "green") {
            theTotScore += green;
        }
    
     // SET theTotScore to clicked CRYSTAL
     $("#score").html(theTotScore);
     scoreWinOrLose();
 });

 const scoreWinOrLose = function() {
    if(theTotScore === compNumbers) {
        yourWins += 1;
        $("#win").html(yourWins);
        alert("You win!!");
        reset();   
    } else if(theTotScore > compNumbers) {
        yourLosses += 1;
        $("#loss").html(yourLosses);
        alert("You lose!");
        reset();
    }
}

// RESET VALUES = 0.
const reset = function() {  
    theTotScore = 0;
    $("#score").html(theTotScore);
    blue = 0;
    green = 0;
    yellow = 0;
    red = 0;
    compNumbers = 0;
    setCrystalNumbers();
    $("#randomNum").html(compNumbers += genRandoNumbers());
}
});