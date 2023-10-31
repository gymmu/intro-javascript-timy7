function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}
function deleteText (){
  const elemToDeleteText = document.querySelector("#to-delete")
elemToDeleteText.textContent = "Inhalt gelöscht"
}
function incrementCounter(){
  const counterElem = document.querySelector("#counter")
  let num = parseInt(counterElem.textContent)
  num = num + 1
  counterElem.textContent = num
}
function decrementCounter() {
  const counterElem = document.querySelector("#counter")
  let num = parseInt(counterElem.textContent)
  num = num - 1
  counterElem.textContent = num
}

function resetCounter() {
  const counterElem = document.querySelector("#counter")
  let num = parseInt(counterElem.textContent)
  counterElem.textContent = 0
}

function writeText() {
  const InputElem = document.querySelector("#input")
  const OutputElem = document.querySelector("#output")
  OutputElem.textContent = OutputElem.textContent +"\n" + InputElem.value 
}

function randomNumber() {
  const Number = document.querySelector("#number")
  Number.value = Math.floor(Math.random() * 100)
}

function randomColor() {

  const colorList = [
    "red",
    "rgb(153, 47, 167)"
  ]


  const Randomcolor = document.querySelector("#color")
  Randomcolor.value = `rgb(${red}, ${orange}, ${yellow}, ${green}, ${blue}, ${lightblue}, ${purple})`
const red =
const orange = Math.floor(Math.random() * 255)
const yellow= Math.floor(Math.random() * 255)
const blue = Math.floor(Math.random() * 255)
const green = Math.floor(Math.random() * 255)
const lightblue = Math.floor(Math.random() * 255)
const purple = "rgb(153, 47, 167)"
}