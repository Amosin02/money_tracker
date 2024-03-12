const date = document.getElementById("date")
const form = document.getElementById("money-tracker-container")
const moneyInput = document.getElementById("text-input")

date.addEventListener("change", (e) => openThatDayTracker())
moneyInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addOrMinusMoney()
        outputMoney()
        moneyInput.value = ""
        console.log(currentDay.totalMoney)
    }
})

const overallMoney = []
let currentDay = {}
let allDates = {}

let addedMoney = []
let moneyPulled = []

let allMoney = 0 // put all the money from all the dates here

function createNewDate() {
    currentDay = {}
    allDates = {}

    addedMoney = []
    moneyPulled = []
}

function openThatDayTracker() {
    createNewDate()
    const dateSelected = date.value
    currentDay.date = dateSelected

    overallMoney.unshift(currentDay)
    console.log(overallMoney)
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

function outputMoney() {
    form.innerHTML = ""
    let totalSaved = 0
    let totalExpenses = 0

    currentDay.moneyAdded.forEach(x => {
        totalSaved += parseInt(x)
    })
    currentDay.moneyDeducted.forEach(x => {
        totalExpenses += parseInt(x)
    })

    form.innerHTML += `
        <div>
            <p>Saved: ${totalSaved}
            <p>Expenses: ${totalExpenses}</p>
            <p>Total: ${allMoney}</p>
        </div>
    `
}