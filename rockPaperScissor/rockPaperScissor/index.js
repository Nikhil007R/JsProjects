
const result = document.getElementById("result");
const userScore = document.getElementsByClassName("our_score")[0];
const computerScore = document.getElementsByClassName("computer_score")[0];

const cards = document.getElementsByClassName("cards");
let uScore = 0;
let cScore = 0;

function randomFunc() {

    const choices = ["rock", "paper", "scissor"];

    const random = Math.floor(Math.random() * 3);

    return choices[random];
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", (e) => {

        let yourPick = e.target.id;

        const computerPick = randomFunc();

        if (computerPick == "rock" && yourPick == "paper" || computerPick == "paper" && yourPick == "scissor" || computerPick == "scissor" && yourPick == "rock") {
            const res = "You win !!!" + "\nyou pick " + yourPick + " and computer pick " + computerPick;
            result.innerHTML = res;

            uScore++;
            userScore.innerHTML = uScore
            console.log("Score of user " + uScore + " score of computer " + cScore);
        }
        else if (computerPick == "rock" && yourPick == "scissor" || computerPick == "paper" && yourPick == "rock" || computerPick == "scissor" && yourPick == "paper") {

            const res = "You lose !!!" + "\nyou pick " + yourPick + " and computer pick" + computerPick;
            result.innerHTML = res;

            cScore++;
            computerScore.innerHTML = cScore;
            console.log("Score of user " + uScore + " score of computer " + cScore);
        }
        else {

            const res = "It's a Tie" + "\nyou pick " + yourPick + " and computer pick" + computerPick;
            result.innerHTML = res;
            userScore.innerHTML = uScore
            computerScore.innerHTML = cScore;
            console.log("Score of user " + uScore + " score of computer " + cScore);
        }

        console.log("Your pick " + yourPick);
        console.log("Computer pick " + computerPick)

        
    });
}