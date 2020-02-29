
//Hämta användarens val

//Slumpa datorns val

//Avgör vinnare

//Visa vinnare

let userWeapon; //Här sparar vi valet som användaren gör
let computerWeapon; //Här sparar vi datorns val
let test = 'Christoffer';
let computerScore = 0;
let userScore = 0;


//Detta kan vi använda för skriva ut text i exempelvis en h2-tagg.



//Det gör här är att vi hämtar knappen och kör kod när användaren klickar på knappen. Vi kommer gå igenom detta mer framöver.
document.getElementById('rock').addEventListener('click', function () {
    userWeapon = 'sten';
    console.log(`Du har valt: ${userWeapon}`);
    getWinner();
});

//Det gör här är att vi hämtar knappen och kör kod när användaren klickar på knappen. Vi kommer gå igenom detta mer framöver.
document.getElementById('scissor').addEventListener('click', function () {
    userWeapon = 'sax';
    console.log(`Du har valt: ${userWeapon}`);
    getWinner();
});

//Det gör här är att vi hämtar knappen och kör kod när användaren klickar på knappen. Vi kommer gå igenom detta mer framöver.
document.getElementById('papper').addEventListener('click', function () {
    userWeapon = 'påse';
    console.log(`Du har valt: ${userWeapon}`);
    getWinner();
});

//Vi lägger det i en funktion för att kunna styra när vi vill köra denna kod.
//Vi kommer att gå igenom detta på tisdag.
function getWinner() {
    computerWeapon = Math.round(Math.random() * 2); //Slumpa ett nummer mellan 0-2.

    if (computerWeapon == 0) {
        computerWeapon = 'sten';
    } else if (computerWeapon == 1) {
        computerWeapon = 'sax';
    } else if (computerWeapon == 2) {
        computerWeapon = 'påse';
    }

    console.log(`Ditt vapen: ${userWeapon} Datorns vapen: ${computerWeapon}`);

    //Avgör vinnare. Kollar först om det blir blivit oavgjort annars vem som vann.
    
    
    if (userWeapon == computerWeapon) {
        console.log('Det blev oavgjort');
    } else if (userWeapon == 'sten') {
        if (computerWeapon == 'sax') {
            console.log('Du vann!');
            userScore = userScore + 1;
        } else {
            console.log('Datorn vann!');
            computerScore = computerScore +1;
        }
    } else if (userWeapon == 'sax') {
        if (computerWeapon == 'påse') {
            console.log('Du vann!');
            userScore = userScore + 1;
        } else {
            console.log('Datorn vann');
            computerScore = computerScore + 1;

        }
    } else if (userWeapon == 'påse') {
        if (computerWeapon == 'sten') {
            console.log('Du vann');
            userScore = userScore + 1;
        } else {
            console.log('Datorn vann');
            computerScore = computerScore + 1;
        }
        
       

    
    } 
    
    
    document.getElementById('userWinner').innerHTML = `Player score ${userScore}`;
    document.getElementById('pcWinner').innerHTML = `Computer score ${computerScore}`;

    if (userScore > computerScore && userScore === 10) {

        document.getElementById('userWinner').innerHTML = `You are the winner ${userScore}`;
    }
    else if (computerScore > userScore && computerScore === 10) {

        document.getElementById('pcWinner').innerHTML = `The computer won ${computerScore}`;
    }
   
}


