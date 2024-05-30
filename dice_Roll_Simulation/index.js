const btn = document.getElementById("roll-button")

const dice= document.getElementById("dice")

const clear = document.getElementById("Clear");

const rollHistory = document.getElementById("roll-history")

let historyList = [];

function rollDice(){

    // generate random number from 1 to 6
    const rollResult = Math.floor(Math.random() * 6) + 1;

    console.log(rollResult)


    const diceFace = getDiceFace(rollResult);
    console.log(diceFace);


    dice.innerHTML = diceFace
    historyList.push(rollResult)
    updateRollHistory();
}

// updating roll history 
function updateRollHistory(){
    
    
    rollHistory.innerHTML = "";
    for(let i = 0; i<historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i+1}: <span>${getDiceFace(historyList[i])}</span>`
        
        rollHistory.appendChild(listItem)

    }
}

function getDiceFace(rollResult){
    switch(rollResult){
        case 1: 
        return "&#9856;"
        
        case 2:
            return "&#9857;"
        
        case 3:
            return "&#9858;"
            
            case 4: 
            return "&#9859;"
            
            case 5:
                return "&#9860;"
                
        case 6:
            return "&#9861;"
            
        default:
            return ""
        }
}

btn.addEventListener("click", ()=>{
    // adding animation class 
    dice.classList.add("roll-animation")
    
    // removing animation class 
    setTimeout(()=>{
        dice.classList.remove("roll-animation")
    }, 1000)
    
    rollDice();
    
})

clear.addEventListener("click", ()=>{
        historyList.length = 0;
        updateRollHistory();
    })