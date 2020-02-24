//function1
function getMaxDigit (number) {
    const arr = number.toString();
        return Math.max (...arr);
};
console.log (getMaxDigit(21758));

//function2
function pow (n, exp) { 
    if(n === 0)
    return 1;
    let result = n;
        for (let i = 1; i < exp; i++) {
            result *= n;
        };
        return result;
};
console.log (pow (0,4));

//function3
function getUpperCase (name) {
    const firstLetter = name[0].toUpperCase();
    const rightName = name.slice(1).toLowerCase();
    return firstLetter + rightName;
};
console.log (getUpperCase ('kaRINA'));

//function4
function getAmountOfSalary (amount) {
    const tax = 19.5;
    const salary = amount - (amount * tax)/100;
    return salary;
};
console.log (getAmountOfSalary (5000));

//function5
function getRandomNumber (min,max) {
    return Math.floor(Math.random() * (max - min) + min);
};
console.log (getRandomNumber (5,25));

//function6
function countLetter (letter,word) {
    let count = 0;
    for (i=0; i<word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
};
console.log (countLetter ('a', 'astalavista'));

//function7
//function8
function getRandomPassword (num) {
    let password = '';
    const varietyNumber = "123456";
    for (let i = 0; i < num; i++){
        password += varietyNumber.charAt(Math.floor(Math.random() * varietyNumber.length));     
    }
    return password;
};
console.log (getRandomPassword (6));

//function9
function deleteLetters ( letter, word) {
    let result = "";
    for (i = 0; i< word.length; i++) {
        if (word [i] !== letter) {
            result+=word [i];
        }
    }
return result;
};
console.log (deleteLetters ( 'a', 'blablabla'));

//function10
function isPalyndrom (word) {
    const reverseWord = word.split('').reverse().join('');
    return reverseWord === word;
}
console.log (isPalyndrom ('madam'));

//function11
function deleteDuplicateLetter (sentence) {


}
console.log (deleteDuplicateLetter ('Бисквит был очень нежный')) ;


document.writeln(`<p> Function 1 - Get the largest digit in the number: ${getMaxDigit(21758)}</p>`);
document.writeln(`<p> Function 2 - Сalculate the degree of number: ${pow (3,4)}</p`);
document.writeln(`<p> Function 3 - Get the name with the first  capital letter: ${getUpperCase ('kaRINA')}</p`);
document.writeln(` <p> Function 4 - Calculate the salary without tax:${getAmountOfSalary (5000)}</p`);
document.writeln(` <p> Function 5 - Return a random number in the range N to M  : ${getRandomNumber (5,25)} </p`);
document.writeln(`<p> Function 6 - Сalculate repeated letters in a word:${countLetter ('a', 'astalavista')}</p`);

document.writeln(` <p> Function 8 - Generate random password :${getRandomPassword (6)}</p`);
document.writeln(`<p> Function 9 - Remove some letters from the sentence : ${deleteLetters ( 'a', 'blablabla')}</p>`);
document.writeln(`<p> Function 10 -Check apalindrome word: ${isPalyndrom ('madam')} </p`);
