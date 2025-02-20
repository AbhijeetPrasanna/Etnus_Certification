function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

let x = 32243;
console.log(reverseNumber(x));
