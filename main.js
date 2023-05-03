let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
let buttonPlay = document.querySelector(".play")
let buttonIncrease = document.querySelector(".increase")
let buttonToDecrease = document.querySelector(".toDecrease")

let backgroundTree = document.querySelector(".tree")
let backgroundRain = document.querySelector(".rain")
let backgroundHouse = document.querySelector(".house")
let backgroundFire = document.querySelector(".fire")

let musicForest = new Audio('./music/Floresta.wav')
let musicRain = new Audio('./music/Chuva.wav')
let musicHouse = new Audio('./music/Cafeteria.wav')
let musicFire = new Audio('./music/Lareira.wav')

let minutes = minutesDisplay.textContent
let newMinutes
let interval

let icons = document.querySelectorAll(".ph")

backgroundTree.addEventListener("click", iconsTree)

backgroundRain.addEventListener("click", iconsRain)

backgroundFire.addEventListener("click", iconsFire)

backgroundHouse.addEventListener("click", reset)


buttonPlay.addEventListener('click', function(){
    play()
    validTime()
})

buttonIncrease.addEventListener('click', function(){
    incrementMinutes()
})

buttonToDecrease.addEventListener('click', function(){
    decrementMinutes()
    
    
})

function incrementMinutes(){
    minutes = Number(minutes) + 5

    newMinutes = Number(minutes)


    console.log(newMinutes)
    minutesDisplay.textContent = String(minutes).padStart(2, "0")

}

function decrementMinutes(){
    minutes = Number(minutes) - 5

    newMinutes = Number(minutes)


    console.log(newMinutes)
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function play(){
     
    interval = setInterval(() => {
        let seconds = Number(secondsDisplay.textContent)
        
        console.log(seconds)
        
        if (seconds <= 0) {

            let minutes = Number(minutesDisplay.textContent)
          
            minutes = minutesDisplay.textContent -= 1
          
          
            secondsDisplay.textContent = 60
          
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
          
            secondsDisplay.textContent = String(secondsDisplay.textContent - 1).padStart(2, "0");
          
          
          } else {
            secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
          }
    }, 1000)
      
}


function validTime(){

    if (secondsDisplay.textContent == 00 && minutesDisplay.textContent == 00){
        alert("Please enter a valid")
        clearInterval(interval)
    }
}

let currentMusic = null

function iconsTree(){
    document.querySelector(".spans-timer").style.color = "white"
    changeColorFonts(100)
    changeBackground("https://i.gifer.com/Ort.gif")
    
    musicOn(musicForest)
}

function iconsFire(){
    document.querySelector(".spans-timer").style.color = "white"
    changeColorFonts(100)
    changeBackground("https://i.gifer.com/5yE.gif")

    musicOn(musicFire)
}

function iconsRain(){
    document.querySelector(".spans-timer").style.color = "white"
    changeColorFonts(100)
    changeBackground("https://i.gifer.com/KRPm.gif")

    musicOn(musicRain)
}

function reset(){
    document.querySelector("body").style.background = "white"
    changeColorFonts(0)
    document.querySelector("h1").style.color = "black"

    musicOn(musicHouse)
}

function changeColorFonts(value){
    icons[0].style.filter = `invert(${value})`
    icons[1].style.filter = `invert(${value})`
    icons[2].style.filter = `invert(${value})`
    icons[3].style.filter = `invert(${value})`
}

function changeBackground(url){
    document.querySelector("body").style.background = ` url(${url}) no-repeat center `   
    document.querySelector("body").style.backgroundSize = "cover"
}

function musicDisplay(music){
    music.play()
    music.loop = true
}

function musicOn(music){
    if(currentMusic){
        currentMusic.pause()
    }
    currentMusic = music
    musicDisplay(currentMusic)
}