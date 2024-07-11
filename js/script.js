// Control Variables
let checkAnswer1 = false;
let checkAnswer2 = false;

// Storing Variables 
let kmNeeded;
let userAge;

// Button Var
const chatInput = document.getElementById("send-message");
// console.log(chatInput);

chatInput.addEventListener("click", (e) => {

    // console.log("Debug | Click");
    
    let userMessage = document.getElementById("user-message");

    if ( (checkAnswer1 == false)  && (userMessage.value != "") ) {

        // console.log("Debug | Answer1");

        // Fai apparire la risposta con i Km da te desiderati.
        document.getElementById("first-block").classList.remove("d-none");
        document.getElementById("first-answer").innerHTML = userMessage.value;

        // Fai diventare la variabile di controllo relativa alla prima domanda VERA
        checkAnswer1 = true;

        // Fai lo storage del dato dei KM che l'utente vorrà fare.
        kmNeeded = userMessage.value;

    } else if ( (checkAnswer2 == false)  && (userMessage.value != "") ) {
        console.log("Debug | Answer2");
    }


})

// classList.remove("mystyle");