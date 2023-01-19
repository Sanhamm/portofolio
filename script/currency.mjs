import {round} from './utils.mjs'
export async function currencyConverter (amount, from, to, out) {

const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
fetch(requestURL)
.then((response) => response.json())
.then((data) => {
    let result = round(amount * data.result);
    out.innerText = `${from} ${amount} = ${to} ${result}`;
})
};

export async function getAllCurrencies(fromList, toList) {
const requestURL = 'https://api.exchangerate.host/symbols';
fetch(requestURL)
.then((response) => response.json())
.then((data) => {
    //console.log(data.symbols);
    let currencyList = "";
    
    for (let symbol in data.symbols) {
        //console.log(data.symbols[symbol].description, data.symbols[symbol].code);
        let code = data.symbols[symbol].code
        let description = data.symbols[symbol].description
        currencyList += `<option value="${code}">${description} (${code})</option>\n `;
        //console.log(currencyList);
    }
    if(currencyList) {
        fromList.innerHTML = currencyList
        toList.innerHTML = currencyList
    }    
});
};