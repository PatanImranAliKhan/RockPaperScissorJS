const ruleButton = document.getElementById("ruleButton")

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