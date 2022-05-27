console.log("Welcome to the password validator tool!")

const readline = require('readline');


// start boilerplate code
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// end boilerplate code



reader.question("Type the password that you want validated: \n", function(input){

    console.log('the input was: ' + input)
	


	// This line closes the connection to the command line interface.
	reader.close()

});