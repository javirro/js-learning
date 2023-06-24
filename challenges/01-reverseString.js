// The objective is given a string, reverse that string.

function reverseString(str) {
  let reverseStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  return reverseStr
}

// Spliting a string using nothing as separator permits separate the string character by character. Then, reverse, permit obtain the inverse order of the array.
// Using join without any space in the quotes permit us to assure that each character is join to the others.
function reverseString2(str) {
  return str.split("").reverse().join("")
}

const reverseStr = reverseString("hello")
console.log("Result:", reverseStr)

const reverseStr2 = reverseString2("world")
console.log("Result:", reverseStr2)
