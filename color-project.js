let button = document.querySelector("#changeColorBtn")
let span = document.querySelector("span")
let main = document.querySelector("main")
let hex = document.querySelector("#hex")
let simple = document.querySelector("#simple")
let simpleIsOn = true;
let hexIsOn = false;

let simpleColors = ["black", "red", "green", "blue", "magenta", "orange", "pink"]


hex.addEventListener("click", function(){
    hex.classList.add("active")
    simple.classList.remove("active")
    simpleIsOn = false;
    hexIsOn = true;
})

simple.addEventListener("click", function(){
    simple.classList.add("active")
    hex.classList.remove("active")
    simpleIsOn = true;
    hexIsOn = false;
})

button.addEventListener("click", function(){
    if (simpleIsOn) {
        let randommIndex = Math.floor(Math.random()*simpleColors.length)
        let randommColor = simpleColors[randommIndex]
        span.innerHTML = randommColor
        main.style.backgroundColor = randommColor;

        console.log(randommColor)
    } else {
        let randomHex = `#${Math.floor(Math.random()*16777215).toString(16)}`
        span.innerHTML = randomHex;
        main.style.backgroundColor = randomHex;
    }
})


 