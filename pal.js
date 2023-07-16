function checkPalindrome() {
    // Get the input string from the form
    var inputString = document.getElementById("inputString").value;
    // Get the element to display the result
    var resultElement = document.getElementById("result");
  
    // 1. Remove all non-alphanumeric characters
    var newString = inputString.replace(/[\W_]/g, "").toLowerCase();
  
    // 2. Reverse the string
    var reversedString = newString.split("").reverse().join("");
  
    // 3. Compare the original string with the reversed string, output either true or false
    if (newString === reversedString) {
        // Display the result and outputs the result either it is or isn't a palidrome
        resultElement.innerHTML = "The input string is a palindrome.";
    } else {
        resultElement.innerHTML = "The input string is not a palindrome.";
    }

}
