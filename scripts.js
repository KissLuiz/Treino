const convertButton = document.querySelector(".convert-button")
const inputValue = document.querySelector(".input-value")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelect = document.querySelector(".currency-select")

let currencyToday = null
const dolarToday = 5.24
const euroToday = 6.08
const libraToday = 7.03
const realToday = 1
const bitcoinToday = 352332.40

function convertValues() {
    const inputcurrencyValue = inputValue.value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    

    if(currencySelectToConvert.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(inputcurrencyValue / currencyToday)
    }
    if(currencySelectToConvert.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(inputcurrencyValue / currencyToday)
    }
    if(currencySelectToConvert.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(inputcurrencyValue / currencyToday)
    }
    if(currencySelectToConvert.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "XBT"}).format(inputcurrencyValue / currencyToday)
    }
    if(currencySelectToConvert.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(inputcurrencyValue / currencyToday)
    }

    if(currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(inputcurrencyValue)
    }
    if(currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(inputcurrencyValue)
    }
    if(currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(inputcurrencyValue)
    }
    if(currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(inputcurrencyValue)
    }
    if(currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "XBT"}).format(inputcurrencyValue)
    }
    
}

function changeCurrency2(){
    const convertedCurrency = document.getElementById("converted-currency")
    const currencyToConvertImage = document.querySelector(".currency-to-convert-image")

    if(currencySelectToConvert.value == "dolar") {
        convertedCurrency.innerHTML = "Dólar Americano"
        currencyToConvertImage.src = "./Assets/estados-unidos.png"
    }

    if(currencySelectToConvert.value == "euro") {
        convertedCurrency.innerHTML = "Euro"
        currencyToConvertImage.src = "./Assets/euro.png"
    }

    if(currencySelectToConvert.value == "libra") {
        convertedCurrency.innerHTML = "Libra Esterlina"
        currencyToConvertImage.src = "./Assets/libra 1.png"
    }

    if(currencySelectToConvert.value == "bitcoin") {
        convertedCurrency.innerHTML = "Bitcoin"
        currencyToConvertImage.src = "./Assets/bitcoin 1.png"
    }

    if(currencySelectToConvert.value == "real") {
        convertedCurrency.innerHTML = "Real"
        currencyToConvertImage.src = "./Assets/brasil 2.png"
    }

    convertValues()
}

function changeCurrency(){
    const sourceCurrency = document.getElementById("source-currency")
    const currencyImage = document.querySelector(".currency-image")

    if(currencySelect.value == "real"){
        currencyToday = realToday
        sourceCurrency.innerHTML = "Real"
        currencyImage.src = "./Assets/brasil 2.png"
    }

    if(currencySelect.value == "dolar"){
        currencyToday = dolarToday
        sourceCurrency.innerHTML = "Dólar Americano"
        currencyImage.src = "./Assets/estados-unidos.png"
    }

    if(currencySelect.value == "euro"){
        currencyToday = euroToday
        sourceCurrency.innerHTML = "Euro"
        currencyImage.src = "./Assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyToday = libraToday
        sourceCurrency.innerHTML = "Libra Esterlina"
        currencyImage.src = "./Assets/libra 1.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyToday = dolarToday
        sourceCurrency.innerHTML = "Bitcoin"
        currencyImage.src = "./Assets/bitcoin 1.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
currencySelectToConvert.addEventListener("change", changeCurrency2)
convertButton.addEventListener("click", convertValues)
