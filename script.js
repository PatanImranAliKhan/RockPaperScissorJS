const gameRuleCard = document.getElementById("gameRuleCard")

const ruleButton = document.getElementById("ruleButton")

const gameRuleCloseIcon = document.getElementById("gameRuleCloseIcon")

ruleButton.addEventListener("click", () => {
    const gamedisplay = gameRuleCard.style.display;
    if(gamedisplay !== "block") {
        gameRuleCard.style.display="block"
    }
})

gameRuleCloseIcon.addEventListener("click", () => {
    gameRuleCard.style.display="none"
})

