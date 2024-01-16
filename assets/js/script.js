
// Starting score for user and computer
let userScore = 0;
let computerScore = 0;
// Score section and game messages 
const userScore_span = document.getElementById('win');
const computerScore_span = document.getElementById('lose');
const result_p = document.querySelector('.result > p');

// Game icons assigned
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');
const lizardDiv = document.getElementById('l');
const spockDiv = document.getElementById('v');
// End game screen section
let EndTitle = document.getElementById('EndTitle');
let EndMessage = document.getElementById('EndMessage');
// Computers choice
function ComputerSelection()
{ 
    const choices = ['r','p','s','l','v'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

// Convert letter to word
function LetterToWord(letter)
{
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
    if (letter === 'l') return "Lizard";
      return "Spock";
}
// Update score when user wins
function win(usersChoice, computersChoice)
{
    const usersChoice_div = document.getElementById(usersChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    // Each selection will give a message and if the 10th win is reached the end game screen will show
    if (userScore < 10) {
        result_p.innerHTML = `${LetterToWord(usersChoice)}<sub id ="subUser"> user</sub> beats ${LetterToWord(computersChoice)}<sub id ="subComp"> comp</sub>. You win!`;
    } else if(userScore === 10){
        EndTitle.innerHTML=`GAME OVER!`;
        EndMessage.innerHTML=`You Win!`;
        endGame();
    }
    // Green glow effect to the winning selection
    usersChoice_div.classList.add('green-glow');
    setTimeout(function() {usersChoice_div.classList.remove('green-glow'); }, 300 );
}
// Update score when computer wins
function lose(usersChoice, computersChoice)
{
    const usersChoice_div = document.getElementById(usersChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // Each selection will give a message and if the 10th win is reached the end game screen will show
    if (computerScore < 10){
        result_p.innerHTML = `${LetterToWord(computersChoice)}<sub id ="subComp"> comp</sub> beats ${LetterToWord(usersChoice)}<sub id ="subUser"> user</sub>. You lose`;
    } else if(computerScore === 10){
        EndTitle.innerHTML=`GAME OVER!`;
        EndMessage.innerHTML=`You lose`;
        endGame();
    }
     // The losing choice will have a red glowing effect
     usersChoice_div.classList.add('red-glow');
     setTimeout(function() {usersChoice_div.classList.remove('red-glow'); }, 300 );
 }
// If user and computer select the same choice 
function draw(usersChoice, computersChoice)
{
    const usersChoice_div = document.getElementById(usersChoice);
    result_p.innerHTML = `${LetterToWord(usersChoice)}<sub id ="subUser"> user</sub> equals ${LetterToWord(computersChoice)}<sub id ="subComp"> comp</sub>. It's a draw`;
    //The choice is highlighted by a yellow glow
    usersChoice_div.classList.add('yellow-glow');
    setTimeout(function() {usersChoice_div.classList.remove('yellow-glow'); }, 300 );
}
// Check all selections and determine the winning, losing and tie results
function game(usersChoice)
{
    const computersChoice = ComputerSelection();
    switch(usersChoice + computersChoice) {
        case "rs": 
        case "rl":
        case "pr":
        case "pv":
        case "sp":
        case "sl":
        case "lp":
        case "lv":
        case "vr":
        case "vs":
            win(usersChoice, computersChoice);
            break;
        case "rp":
        case "rv":
        case "ps":
        case "pl":
        case "sr":
        case "sv":
        case "lr":
        case "ls":
        case "vp":
        case "vl":
            lose(usersChoice, computersChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "vv":
            draw(usersChoice, computersChoice);
            break;
    }
}
// End game screen 
function endGame() 
{
    document.getElementById('endScreen').style.display = 'block';
}
// Remove the end game message, reset the score message and score
function replay()
{
    document.getElementById('endScreen').style.display = 'none';
    result_p.innerHTML = "Make your choice";
    resetScores();
}
// Reset user and computer scores to 0
function resetScores() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}
// Assign a specific letter to a specific icon after user click
function main() {
    rockDiv.addEventListener('click', () => game("r"));
    paperDiv.addEventListener('click', () => game("p"));
    scissorsDiv.addEventListener('click', () => game("s"));
    lizardDiv.addEventListener('click', () => game("l"));
    spockDiv.addEventListener('click', () => game("v"));
    document.getElementById('endScreen').style.display = 'none';
    
}

function start() {
    document.getElementById("startScreen").classList.add("hide");
    document.getElementById("gameScreen").classList.remove("hide");
}
main()