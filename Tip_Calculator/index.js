let btn = document.getElementById("btn");
let total = document.getElementById("total")

btn.addEventListener("click", ()=>{
    
    let amount = parseInt(document.getElementById("billAmount").value);
    let tip = parseInt(document.getElementById("tipPercentage").value);

    total.innerHTML = `&#x20B9 ${(amount + (amount * tip/100)).toFixed(2)} `    
})