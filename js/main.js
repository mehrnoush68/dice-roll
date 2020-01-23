// The goal: when the button clicked, We would see a dice number(picture)
// Dice has 6 sides from number 1 to 6. 
// Rolling a dice is always give us a random number from 1 to 6.

//wirting html in js with this function
//by replacing just number for img, it would show the right img
function getResult (num) {
    return `
    <div>You Rolled: ${num} </div>
    <div class="dice-sides"><img src="img/dice${num}.svg" alt="${num}"></div>
    `;
}
//assigning variable for button 
let rollDiceBtn = document.querySelector('#rollBtn'); 
//what the button will do if clicked 
rollDiceBtn.addEventListener('click', (event) => 
{
    //we need 6 random number from 1 to 6
    let randomNum = Math.ceil(Math.random() * 6); 

    //assigning variable for the result
    let rollResult = document.querySelector('#result');

    //using function
    rollResult.innerHTML = getResult (randomNum);
})




//In Class Notes

// problem A: Roll a randdom integer between 1 to 6
// let roll = 5;


// problem B: Change the output to show: You rolled 3
// Find the element (the whole output,or just the number)
// change the contents of the element to reflect a new value


// problem C: change the dice image to match the roll
//1. Find the img element
//2. change the src attribute's url to match the dice roll


// problem D: When the button is clicked, re-roll the dice

//1. Fimd the <button> element
//2. Add a click listener that will run all previous steps again 

// Other possible addons:
// -Keep a history of the dice rolls
//  -Show how many of each number as a percentage
// -Add a second dice and make it a craps game
//  -Output the results as a phrase: "Snake eyes"
// 