const date = document.getElementById("date")
const form = document.getElementById("money-tracker-container")
const moneyInput = document.getElementById("text-input")

date.addEventListener("change", (e) => openThatDayTracker())
moneyInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addOrMinusMoney()
        moneyInput.value = ""
        console.log(currentDay.totalMoney)
    }
})

currentDay = {}
overallMoney = []

addedMoney = []
moneyPulled = []

function openThatDayTracker() {
    currentDay.date = date.value
}

function addOrMinusMoney() {
    if (moneyInput.value.includes("+")) {
        let addMoney = moneyInput.value.slice(1, moneyInput.value.length)
        addedMoney.unshift(addMoney)
    } else {
        let lessMoney = moneyInput.value.slice(1, moneyInput.value.length)
        moneyPulled.unshift(lessMoney)
    }

    currentDay.moneyAdded = addedMoney
    currentDay.moneyDeducted = moneyPulled
    let addedUpMoney = addOrSubtractMoney(addedMoney, 1)
    let addedUpExpenses = addOrSubtractMoney(moneyPulled, 2)
    currentDay.totalMoney = parseInt(addedUpMoney) + parseInt(addedUpExpenses)

    console.log(currentDay)
}

function addOrSubtractMoney(arr, operation) {
    let sumOrDiff = 0
    if (operation === 1) { // adds all the money
        arr.forEach(element => {
            sumOrDiff += parseInt(element)
        });
        return sumOrDiff
    } else { // subtracts the money
        arr.forEach(element => {
            sumOrDiff -= parseInt(element)
        })
        return sumOrDiff
    }
}