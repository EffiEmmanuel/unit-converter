const value = document.getElementById('value')
const lengthResult = document.querySelector('.length-result')
const volumeResult = document.querySelector('.volume-result')
const massResult = document.querySelector('.mass-result')

value.addEventListener('input', generateResults)

// Function: Generate metric/imperial conversion results
function generateResults() {
    let value = document.getElementById('value').value

    if(value == '') value = 0

    let length = toLength(value)
    let volume = toVolume(value)
    let mass = toMass(value)

    lengthResult.textContent = `${value} meters = ${length} feet | ${length} feet = ${value} meters`
    volumeResult.textContent = `${value} litres = ${volume} gallons | ${volume} gallons = ${value} litres`
    massResult.textContent = `${value} kilos = ${mass} pounds | ${mass} pounds = ${value} kilos`

}


// Function: Round to 2 decimal places
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2")
}

// Function: Convert from meters to feet
function toLength(value) {
    return roundToTwo(value * 3.28084)
}

// Function: Convert from litres to gallons
function toVolume(value) {
    return roundToTwo(value * 0.264172)
}

// Function: Convert from kilos to pounds
function toMass(value) {
    return roundToTwo(value * 2.2)
}