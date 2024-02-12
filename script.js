let outputRange = document.querySelector(".outputRange")
let inputRange = document.querySelector(".inputRange")
let storeValue = document.querySelector(".storeValue")
let upperCase = document.getElementById("upperCase")
let lowerCase = document.getElementById("lowerCase")
let digitCheck = document.getElementById("digitCheck")
let symbols = document.getElementById("symbols")
let Genrate_now = document.getElementById("Genrate_now")
inputRange.addEventListener("input", () => {
    outputRange.innerHTML = inputRange.value;
})

let Upper = "ABCDEFGHIJKLMOPQRSTUVWXYZ"
let Lower = "abcdefghijklmopqrstuvwxyz"
let Digit = "123456780"
let Symbol = "!@#$%^&*";

Genrate_now.addEventListener("click", () => {
    storeValue.value = getPassword();
})

function getPassword() {
    let AllChar = "";

    AllChar += upperCase.checked ? Upper : "";
    AllChar += lowerCase.checked ? Lower : ""
    AllChar += digitCheck.checked ? Digit : ""
    AllChar += symbols.checked ? Symbol : ""

    let String = "";
    let i = 1;
    while (i <= inputRange.value) {
        String += AllChar.charAt(Math.floor(Math.random() * AllChar.length));
        i++;
    }

    return String;
}