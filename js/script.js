// Control Variables
let checkAnswer1 = false;
let checkAnswer2 = false;

// Storing Variables 
let kmNeeded;
let userAge;

// Falso by default, se è maggiorenne diventerà True
let userMaggiorenne = false;

// Button Var
const chatInput = document.getElementById("send-message");
// console.log(chatInput);

chatInput.addEventListener("click", (e) => {

    // console.log("Debug | Click");
    
    let userMessage = document.getElementById("user-message");

    // Se l'utente non ha risposto alla prima domanda e ha scritto qualcosa sull'input della chat, allora 
    if ( (checkAnswer1 == false)  && (userMessage.value != "") ) {

        // console.log("Debug | Answer1");

        // Fai apparire la risposta con i Km da te desiderati.
        document.getElementById("first-block").classList.remove("d-none");
        document.getElementById("first-answer").innerHTML = userMessage.value + " KM";

        // Mostra la prossima domanda
        document.getElementById("second-question").classList.remove("d-none");

        // Fai diventare la variabile di controllo relativa alla prima domanda VERA
        checkAnswer1 = true;

        // Fai lo storage del dato dei KM che l'utente vorrà fare.
        kmNeeded = userMessage.value;

        // Reset userMessage.value
        userMessage.value = "";

    // Se l'utente non ha risposto alla seconda domanda e ha scritto qualcosa sull'input della chat, allora 
    } else if ( (checkAnswer2 == false)  && (userMessage.value != "") ) {

        // console.log("Debug | Answer2");

        // Fai apparire la risposta con gli Anni da te desiderati.
        document.getElementById("second-block").classList.remove("d-none");
        document.getElementById("second-answer").innerHTML = userMessage.value + " Anni";

        // Fai diventare la variabile di controllo relativa alla seconda domanda VERA
        checkAnswer2 = true;

        // Ringrazia l'utente
        document.getElementById("thanks-block").classList.remove("d-none");

        // Fai lo storage del dato dell'età dell'utente.
        userAge = userMessage.value;

        if (userAge >= 18) {
            userMaggiorenne = true;
        }

        // Nascondi la chat 
        document.getElementById("user-chatting").classList.add("d-none");


        // Calcolo del prezzo
        

    }


})

// classList.remove("mystyle");