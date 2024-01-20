const buttonClick = document.querySelector("#button-convert")
const selectConvertCima = document.querySelector("convert-select-cima")
const selectConvert = document.querySelector(".convert-select")

function convertValues(){
   const inputValue=document.querySelector(".input-convert").value 
   const currencyValueToConverted = document.querySelector(".coin-value-real")
   const currencyValueConverted = document.querySelector(".coin-value-usa")
   
    
    const libraToday = 6.26
    const dolarToday = 4.94
    const euroToday = 5.36
    const bitcoinToday = 205.112
    


if(selectConvert.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency:"USD"
    }).format(inputValue/dolarToday)
}
    
if(selectConvert.value == "euro"){

         currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(inputValue/euroToday)
}
if (selectConvert.value == "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("lb-LB",{
        style: "currency",
        currency: "GBP"
    }).format(inputValue/libraToday)
}
if (selectConvert.value == "bitcoin"){

    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en",{
        style: "currency",
        currency: "BTC"
    }).format(inputValue/bitcoinToday)
}
    
    
currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br",{
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}
function changeCurrency () {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(selectConvert.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/logo Dolar.png"
    }
    if(selectConvert.value == "euro"){
        currencyName.innerHTML = "Euro"
     currencyImage.src = "./img/logo Euro.png"
    }
    if(selectConvert.value== "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./img/libra 1.png"
    }
    if(selectConvert.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./img/bitcoin.png"
    }

    convertValues()

    
}




function playAudio() {
    const audio = document.getElementById("myAudio")
    audio.play()   

}



selectConvert.addEventListener("change",changeCurrency)
buttonClick.addEventListener("click",convertValues)