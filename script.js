const gameRuleCard = document.getElementById("gameRuleCard")

const ruleButton = document.getElementById("ruleButton")

const nextButton = document.getElementById("nextButton")

const gameRuleCloseIcon = document.getElementById("gameRuleCloseIcon")

const playAgain = document.getElementById("playagain");

ruleButton.addEventListener("click", () => {
    const gamedisplay = gameRuleCard.style.display;
    if (gamedisplay !== "block") {
        gameRuleCard.style.display = "block"
    }
})

gameRuleCloseIcon.addEventListener("click", () => {
    gameRuleCard.style.display = "none"
})

playAgain.addEventListener("click", () => {
    window.location.href = "index.html"
})

nextButton.addEventListener("click", () => {
    console.log("click")
    window.location.href = "hurray_page.html"
})
