let choice
function userChoice() {
    ask()
    function ask() {
        let choicePre = prompt("Pick rock, paper or scissors.")
        choice = choicePre.toLowerCase();  }
    if ((choice != "rock") && (choice != "paper") && (choice != "scissors")) {
        console.log("Please make sure you type it correctly.")
        userChoice()
    } else {
        return choice
    }
}

let choicePC
function pcChoice() {
    let rnd = Math.floor(Math.random() * 3)
    if (rnd == 0) {
        choicePC = "rock"
    } else if (rnd == 1) {
        choicePC = "paper"
    } else {
        choicePC = "scissors"
    }
    return choicePC
}

let userPoints = 0
let pcPoints = 0
let round = 1

function game() {
    userPoints = 0
    pcPoints = 0
    round = 1

    function play(user,pc) {
        console.log("Round " + round + " of 5.")
        console.log("You chose "+choice+". PC chose "+choicePC+".")
        if (user == pc) {
            console.log("It's a draw.")
            console.log("Current score:")
            console.log("User: " + userPoints)
            console.log("PC: " + pcPoints)
            round = round + 1
        } else if ((user == "rock") && (pc == "paper")) {
            console.log("You lose. Paper beats rock.")
            console.log("Current score:")
            console.log("User: " + userPoints)
            console.log("PC: " + (pcPoints + 1))
            pcPoints = pcPoints + 1
            round = round + 1
        } else if ((user == "rock") && (pc == "scissors")) {
            console.log("You win! Rock beats scissors.")
            console.log("Current score:")
            console.log("User: " + (userPoints + 1))
            console.log("PC: " + pcPoints)
            round = round + 1
            userPoints = userPoints + 1
        } else if ((user == "paper") && (pc == "rock")) {
            console.log("You win! Paper beats rock.")
            console.log("Current score:")
            console.log("User: " + (userPoints + 1))
            console.log("PC: " + pcPoints)
            userPoints = userPoints + 1
        } else if ((user == "paper") && (pc == "scissors")) {
            console.log("You lose. Scissors beats paper.")
            console.log("Current score:")
            console.log("User: " + userPoints)
            console.log("PC: " + (pcPoints + 1))
            round = round + 1
            pcPoints = pcPoints + 1
        } else if ((user == "scissors") && (pc == "paper")) {
            console.log("You win! Scissors beats paper.")
            console.log("Current score:")
            console.log("User: " + (userPoints + 1))
            console.log("PC: " + pcPoints)
            round = round + 1
            userPoints = userPoints + 1
        } else if ((user == "scissors") && (pc == "rock")) {
            console.log("You lose. Rock beats scissors.")
            console.log("Current score:")
            console.log("User: " + userPoints)
            console.log("PC: " + (pcPoints + 1))
            round = round + 1
            pcPoints = pcPoints + 1
        }
        return round
    }

    while (round < 6) {
    play(userChoice(),pcChoice())
    }

    if (round >= 6) {
        if (userPoints > pcPoints) {
            let answer = prompt("Congratulations! Want to play again? Y/N")
            if ((answer == "Y") || (answer == "y")) {
                game()
            } else {
                console.log("OK")
            }
        } else if (userPoints <= pcPoints) {
            let answer = prompt("Too bad! Want to play again? Y/N")
            if ((answer == "Y") || (answer == "y")) {
                game()
            } else {
                console.log("OK")
            }
        }
    }

}

game()