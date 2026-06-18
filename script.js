const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const Amt = document.getElementById("amt");
const calcBtn = document.getElementById("calc");

function calcTip(){
    let billAmt = Number(bill.value);
    let tipPercent = Number(tip.value);
    
    let totalAmt = (billAmt * tipPercent) / 100 + billAmt;
    console.log(totalAmt);
    Amt.innerText = totalAmt.toFixed(2); 
    Amt.style.fontWeight = "700";
}

calcBtn.addEventListener("click", ()=>{
    if(bill.value == ""){
        alert("Please Enter the bill Amt");
        return
    }
    if(tip.value == ""){
        alert("Please enter the tip");
        return
    }
    calcTip();
})

tip.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        calcTip();
    }
})

