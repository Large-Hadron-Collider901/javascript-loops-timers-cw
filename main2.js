// ### Exercise 1: While/For Loops
// - Create an empty `name_array`
// - Ask the user ```Enter a word. Enter 'q' to quit.``` Add each word they enter to the array
// - Create a while loop that will keep asking for words to add to the array until they enter 'q'
// - When the user enters 'q' use a **for** loop to print each word from the array
// - NOTE: Your code should handle the case of the entered quite letter `Q`

let name_array = [];

let notDoneAddingWords = true;
let quit = "Q";
function enterWord() {
  let response = prompt("Enter a word. Press q to quit.");
  return response.toUpperCase(); // accepts upper and lowercase q
}

while (notDoneAddingWords) {
  // while the user is not done adding words continue to show the prompt
  let userInput = enterWord();
  name_array.push(userInput); // pushes user input to the array

  if (userInput === quit) {
    // if user enters q to quit set not done adding words to false
    notDoneAddingWords === false;

    break;
  }
}

for (let i = 0; i < name_array.length; i++) {
  // prints words entered in the name array
  document.write(name_array[i]);
}
