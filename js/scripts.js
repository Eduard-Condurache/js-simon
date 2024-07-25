
const min = 1;
const max = 10;
const randomNumbers = [];
const numbersContainer = document.getElementById('numbers-container');

for (let i = 0; i < 5; i++) {
    const num = getRndInteger(min, max);
    console.log('num', num);
    randomNumbers.push(num);
    numbersContainer.innerHTML += `<span>${num}<span>`;

}

console.log('randomNumbers', randomNumbers)

setTimeout(function() {
    numbersContainer.innerHTML = `<h1>Inserisci i numeri che hai visto<h1>`;

}, 1000);

setTimeout(function(){
    let guessedNumbers = 0;

    for (let i = 0; i < randomNumbers.length; i++) {
        const userNumber = parseInt(prompt(`Inserisci il ${i + 1} numero`));

        console.log('usernumber' , userNumber);

        if (userNumber == randomNumbers[i]) {
            guessedNumbers++;
        }
    }

    if (guessedNumbers === 5) {
        alert('Hai indovinato tutti i numeri bravo!')
    }

    else {
        alert(`Hai indovinato ${guessedNumbers} numeri`); 
    }
}, 2000);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
        