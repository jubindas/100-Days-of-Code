let str = "Hello, World!";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log("The reversed string is: " + reversedStr);
