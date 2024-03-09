const date = document.getElementById("date")
const form = document.getElementById("money-tracker-container")
const moneyInput = document.getElementById("text-input")

date.addEventListener("change", (e) => openThatDayTracker())
moneyInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addOrMinusMoney()
        console.log(addedMoney)
        console.log(moneyPulled)
        moneyInput.value = ""
    }
})

currentDay = {}
overallMoney = []

addedMoney = []
moneyPulled = []

function openThatDayTracker() {
    console.log(date.value)
}

function addOrMinusMoney() {
    if (moneyInput.value.includes("+")) {
        let addMoney = moneyInput.value.slice(1, moneyInput.value.length)
        addedMoney.unshift(addMoney)
    } else {
        let lessMoney = moneyInput.value.slice(1, moneyInput.value.length)
        moneyPulled.unshift(lessMoney)
    }
}