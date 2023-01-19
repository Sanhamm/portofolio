import {round} from './utils.mjs'

export function farenheitToCelsius (f) {
    if (f < -459.67) console.error(`${f}°F is to cold`);
    return round((f - 32.00) / 1.8000);
}

export function celsiusToFarenheit (c) {
    if (c < -273.15) console.error(`${c}°C is to cold`);
    return round(c * 1.8000 + 32);
}

// function round(n, precision = 1) {
//     const exponent = Math.pow(10, precision)
//     return Math.round(n * exponent) / exponent;
// }

