import fibonacci from "./script/fibonacci.mjs";
import { celsiusToFarenheit, farenheitToCelsius } from "./script/temperature.mjs";
import { currencyConverter, getAllCurrencies } from "./script/currency.mjs";


//fibonacci converter
document.getElementById("submit-fib").addEventListener("click", () => {
    let n = document.getElementById("fib").value;
    let fn = fibonacci(n);
    document.getElementById("fib-result").innerHTML = `F<sub>${n}</sub> = ${fn}`;

});

//clesius to farenheit
document.getElementById("submit-temp").addEventListener("click", () => {
    const out = document.getElementById("temp-result");
    const temp = document.getElementById("temp").value;
    const radiobButtons = document.querySelectorAll('input[name="temp-type"]');
    let fromType;
    for (let btn of radiobButtons){
        if(btn.checked) {
            fromType = btn.id;
            break;
        }
    }
    if (fromType == 'celcius'){
        out.innerHTML = `${temp}°C = ${celsiusToFarenheit(temp)}°F`
    } else if (fromType === 'farenheit') {
        out.innerHTML = `${temp}°F = ${farenheitToCelsius(temp)}°C`

    }else {
        out.innerText = "feil"
    }
});

//currency
document.getElementById("submit-currency").addEventListener('click', () => {
    const out = document.getElementById("currency-result")
    let amount = document.getElementById("amount").value;
    const from = document.getElementById("convertFrom").value;
    const to = document.getElementById("convertTo").value;
    if(amount === "") amount = 100;
    currencyConverter(amount, from, to, out);

})

const fromCurrencylist = document.getElementById("convertFromSymbols")
const toCurrencylist = document.getElementById("convertToSymbols")
getAllCurrencies(fromCurrencylist, toCurrencylist)

