// Starting score for user and computer
let userScore = 0;
let computerScore = 0;

// Score section and game messages 
const userScore_tab = document.getElementById('win');
const computerScore_tab = document.getElementById('lose');
const result = document.querySelector('.result > p');

// Game icons assigned
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');
const lizardDiv = document.getElementById('l');
const spockDiv = document.getElementById('sp');

// End game screen section
let EndTitle = document.getElementById('EndTitle');
let EndMessage = document.getElementById('EndMessage');

// Computers choice
function ComputersChoice()
{ 
    const choice  = ['r','p','s','l','sp'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choice[randomNumber];
}


// Convert letter to word
function LetterToWord()
{
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
    if (letter === 'l') return "Lizard";
    if (letter === 'sp') return "Spock";
}

// Update score when user wins
function win(usersChoice, computersChoice)
{
    const usersChoice_div = document.getElementById(usersChoice);
    userScore++;
    userScore_tab.innerHTML = userScore;
    computerScore_tab.innerHTML = computerScore;

    
    // Each selection will give a message and if the 10th win is reached the end game screen will show
    if (userScore < 10) {
        result_p.innerHTML = `${LetterToWord(usersChoice)}<sub id ="subUser"> user</sub> beats ${LetterToWord(computersChoice)}<sub id ="subComp"> comp</sub>. You win!`;
    } else if(userScore === 10){
        txtEndTitle.innerHTML=`GAME OVER!`;
        txtEndMessage.innerHTML=`You Win!`;
        endGame();
    }
    // Green glow effect to the winning selection
    usersChoice_div.classList.add('green-glow');
    setTimeout(function() {usersChoice_div.classList.remove('green-glow'); }, 300 );
}

// Update score when computer wins
function lose(usersChoice, computersChoice)

// If user and computer select the same option 
function draw(usersChoice, computersChoice)

// Check all selections and determine the winning, losing and tie results
function game(usersChoice)

// End game screen 
function endGame() 

// Remove the end game message, reset the score message and score
function replay()