/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let conversionInput = document.getElementById("conversion-input")
let conversionBtn = document.getElementById("conversion-btn")
let volume = document.getElementById("volume-conversion")
let length = document.getElementById("length-conversion")
let mass = document.getElementById("mass-conversion")


conversionBtn.addEventListener('click', function () {
    lengthConvert()
    volumeConvert()
    massConvert()
})

function lengthConvert(){
    let metersToFeet = conversionInput.value * 3.281
    let feetToMeters = conversionInput.value / 3.281
    length.innerHTML = `${conversionInput.value} meters = ${metersToFeet}
     | ${conversionInput.value} feet = ${feetToMeters} meters`
}

function volumeConvert(){
    volume.innerHTML = conversionInput.value

}

function massConvert() {
    mass.innerHTML = conversionInput.value

}