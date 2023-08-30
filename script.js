const gameRuleCard = document.getElementById("gameRuleCard")

const ruleButton = document.getElementById("ruleButton")

const nextButton = document.getElementById("nextButton")
nextButton.style.display = "none"

const gameRuleCloseIcon = document.getElementById("gameRuleCloseIcon")

const playAgain = document.getElementById("playagain");

const gamePlay = document.getElementById("game")

const rock = document.getElementById("rock")

const scissor = document.getElementById("scissor")

const paper = document.getElementById("paper")

const winningResult = document.getElementById("winningResult")

const resultText1 = document.getElementById("resultText1")

const resultText2 = document.getElementById("resultText2")

const resultButtonText = document.getElementById("resultButtonText")

const iamSelectedImage = document.getElementById("myPickImage")

const compSelectedImage = document.getElementById("compPickImage")

const myPickClass = document.getElementById("myPick")

const compPickClass = document.getElementById("compPick")

const userScoreElement = document.getElementById("userscore")

const compScoreElement = document.getElementById("computerscore")

const winningDict = {
    "rock": "paper",
    "scissor": "rock",
    "paper": "scissor"
}

const imagesLink = {
    "rock": "./images/rock.png",
    "scissor": "./images/scissor.png",
    "paper": "./images/paper.png"
}

const inputsArray = ["rock", "paper", "scissor"]

var userScore = 0, compScore = 0
initiaizeScores()

function initiaizeScores() {
    const scores = JSON.parse(localStorage.getItem("RPS_scores")) || {user:0,computer:0};
    userScore = scores['user']
    compScore = scores['computer']
    userScoreElement.innerHTML = userScore
    compScoreElement.innerHTML = compScore
    winningResult.style.display = "none"
}

ruleButton.addEventListener("click", () => {
    const gamedisplay = gameRuleCard.style.display
    if (gamedisplay !== "block") {
        gameRuleCard.style.display = "block"
    }
})

gameRuleCloseIcon.addEventListener("click", () => {
    gameRuleCard.style.display = "none"
})

playAgain.addEventListener("click", () => {
    winningResult.style.display = "none"
    gamePlay.style.display = "block"
})

nextButton.addEventListener("click", () => {
    window.location.href = "hurray_page.html"
})

rock.addEventListener("click", () => {
    calculateResult("rock")
    gamePlay.style.display = "none"
    winningResult.style.display = "grid"
})

scissor.addEventListener("click", () => {
    calculateResult("scissor")
    gamePlay.style.display = "none"
    winningResult.style.display = "grid"
})

paper.addEventListener("click", () => {
    calculateResult("paper")
    gamePlay.style.display = "none"
    winningResult.style.display = "grid"
})

function getComputerAnswer() {
    return inputsArray[(Math.floor(Math.random() * (13 - 0 + 1) + 0)) % 3];
}

function calculateResult(userClick) {
    const compAnswer = getComputerAnswer()
    iamSelectedImage.setAttribute("src", imagesLink[userClick])
    iamSelectedImage.setAttribute("alt", userClick)
    compSelectedImage.setAttribute("src", imagesLink[compAnswer])
    compSelectedImage.setAttribute("alt", compAnswer)
    myPickClass.className = "resimage " + userClick
    compPickClass.className = "resimage " + compAnswer
    if (userClick === compAnswer) {
        resultText1.innerHTML = "TIE UP"
        resultText2.style.display = "none"
        resultButtonText.innerHTML = "REPLAY"
        nextButton.style.display = "none"
    } else if (winningDict[compAnswer] === userClick) {
        resultText1.innerHTML = "YOU WON"
        resultText2.style.display = "block"
        resultButtonText.innerHTML = "PLAY AGAIN"
        nextButton.style.display = "block"
        myPickClass.className = myPickClass.className + " win"
        userScore += 1
        setScoreInLocalStorage()
    } else {
        resultText1.innerHTML = "YOU LOST"
        resultText2.style.display = "block"
        resultButtonText.innerHTML = "PLAY AGAIN"
        nextButton.style.display = "none"
        compPickClass.className = compPickClass.className + " win"
        compScore += 1
        setScoreInLocalStorage()
    }
}

function setScoreInLocalStorage() {
    localStorage.setItem('RPS_scores', JSON.stringify({
        "user": userScore,
        "computer": compScore
    }));
    userScoreElement.innerHTML = userScore
    compScoreElement.innerHTML = compScore
}