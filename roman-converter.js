const convertBtn = document.getElementById('convert-btn');
const myNumber = document.getElementById('number');
const answer = document.getElementById('output');
const myForm = document.forms["form"];

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
});
convertBtn.addEventListener("click", listenToClickEventAndChangeInnerText);
//alert message

function listenToClickEventAndChangeInnerText(event) {
    if (myNumber.value == "" || myNumber.value == null) {
        answer.innerText = "Please enter a valid number";
    } else if (myNumber.value == 0 || myNumber.value < 0) {
        answer.innerText = "Please enter a number greater than or equal to 1";
    } else if (checkRangeOfInput(myNumber.value)) {
        answer.innerText = "Please enter a number less than or equal to 3999";
    } else {
        const result = readInputAndTranslateToRomanNumeral(myNumber.value);
        answer.innerText = result;
    }
};

function checkRangeOfInput(myInput) {
    return (myInput >= 4000);
};

/**
 * start: input is an array of strings
 * 1: get the array of the positions of the components
 * 2: reverse the positions inside the array
 * end: return an array of numbers of 0 to add
 */
function countZerosToAdd(components) {
    const positionsArray = components.map((numberString, position) => position);
    const numberOfZerosToAdd = positionsArray.reverse();
    return numberOfZerosToAdd;
}

/**
* start: input is a number
1: turn input into an array of strings
2: count the number of 0 to add to each component according to the position of the component
3: put the appropriate amount of 0 to the right of the component 
4: convert the array of string into an array of numbers
* end: return an array of numbers 
*/
function splitInputIntoComponents(myInput) {
    const components = myInput.toString().split('');
    const numberOfZerosToAdd = countZerosToAdd(components);
    const zerosArray = numberOfZerosToAdd.map((count) => "0".repeat(count));
    const arrayOfNumbers = [];
    for (let i = 0; i < components.length; i++) {
        const selectedComponent = components[i];
        const selectedZeros = zerosArray[i];
        const addedStringOfNumber = selectedComponent + selectedZeros;
        const convertedNumber = Number(addedStringOfNumber);
        arrayOfNumbers.push(convertedNumber);
    }
    return arrayOfNumbers;
}

/**
 * start: input is an array of numbers
 * 1: create a dictionary of keys (numbers) and their values (roman numerals) 
 * 2: match the components to the keys in the dictionary and replace with the corresponding roman numerals
 * end: return an array of roman numerals (string)
 */
function compareAndTranslateToRomanNumerals(myComponents) {
    const romanNumeralTable = {
        0: "",
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
        2000: "MM",
        3000: "MMM"
    }
    const romanNumerals = myComponents.map((number) => romanNumeralTable[number]);
    return romanNumerals;
}
// if you can't write a function in 10 lines of code, you need to write another function within the original function to help with that feature
// else if you have multiple ways to do something, implement it as a function - it will let you swap implementation later like a lego

/**
 * start: the function is called by the function listenToClickEventAndChangeInnerText
 * 2: number is stored in parameter called myInput
 * 3: split the number into components that can map into roman numerals
 * 4: compare the components to the roman numeral table and translate the components to roman numerals
 * 5: take the list of roman numerals and concatenate them
 * 6: return the string
 * end: the function returns a string of roman numerals
 * / */
function readInputAndTranslateToRomanNumeral(myInput) {
    const componentList = splitInputIntoComponents(myInput);
    const romanNumeralList = compareAndTranslateToRomanNumerals(componentList);
    const romanNumeralString = "".concat(...romanNumeralList);
    return romanNumeralString;
}

/**
 * start: page load, input is empty
 * step 1: user types number into #number input
 * step 2: user hits enter button, user clicks convert button
 * step 3: program 
 * step 3: program stores input in #input
 * end: program print a roman numeral corresponding to number input by user
 */


