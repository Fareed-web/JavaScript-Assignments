// Question 2

let num1 = +prompt("enter number 1")
let num2 = +prompt("enter number 2")

if (num1 === num2) {
    console.log("equal")
}
else if (num1 > num2) {
    console.log("num1 is greater")
}
else {
    console.log("num2 is greater")
}

// Question 3


var checking = +prompt("enter to check pos or neg")


if (checking == 0) {
    console.log("0")
}
else if (checking < 0 ){
    console.log("neg")
}
else {
    console.log("pos");
}



// question 4
let char = prompt('enter')
let isVowel 


if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    isVowel = true
}
else {
    isVowel = false
}


console.log(isVowel)
