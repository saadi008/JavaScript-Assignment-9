function roundNumber() {
    var number = prompt("Enter a number:");
    number = parseFloat(number);
    if (!isNaN(number)) {
        return Math.round(number);
    } else {
        return "Invalid input. Please enter a valid number.";
    }
}
var result = roundNumber();
console.log(result);





function generateRandomInRange(min, max) {
    var randomNumber = Math.random();
    var scaledNumber = Math.floor(randomNumber * (max - min + 1)) + min;
    return scaledNumber;
}
console.log(generateRandomInRange(1, 10));
console.log(generateRandomInRange(-5, 5));







function convertToNumber() {
    var str = prompt("Enter a string:");
    var number = parseFloat(str);
    if (!isNaN(number)) {
        return number;
    } else {
        return NaN;
    }
}
var result = convertToNumber();
console.log(result);





function truncateDecimal(num, decimals) {
    var power = Math.pow(10, decimals);
    var truncatedNum = Math.trunc(num * power) / power;
    return truncatedNum;
}
console.log(truncateDecimal(3.14159, 2));
console.log(truncateDecimal(6.789, 1));
console.log(truncateDecimal(123.456, 0));





function formatNumber(num, decimalPlaces) {
    num = parseFloat(num);
    if (isNaN(num)) {
        return "Invalid input";
    } else {
        var formattedNumber = num.toFixed(decimalPlaces);
        return formattedNumber;
    }
}
console.log(formatNumber(123.456, 2));
console.log(formatNumber("abc", 2));
console.log(formatNumber(5, 0));
