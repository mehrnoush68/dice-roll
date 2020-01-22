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