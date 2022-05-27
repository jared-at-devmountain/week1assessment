console.log('\n\n\n\n\n\n')

console.log("       ^     ")
console.log("      ^^^    ")
console.log("     ^^^^^   ")
console.log("    ^^^^^^^  ")
console.log("      | |    ")
console.log("MERRY CHRISTMAS")
console.log('\n\n\n\n')

console.log("Welcome to the password validator tool!")

const readline = require('readline');


// start boilerplate code
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// end boilerplate code



reader.question("Type the password that you want validated: \n", function(input){
	
    const errorArr = [];

    if (input.length < 10){
        errorArr.push('your password needs to be at least 10 characters long')
    }
    
    if (!/\d/.test(input)) {
        errorArr.push('your password needs a number')
    }

    if (errorArr.length === 0) {
        console.log('Good password!')
    } else {
        console.log('Bad password because:')
        for (let i =0; i < errorArr.length; i++) {
            console.log(errorArr[i])
        }
    }


	// This line closes the connection to the command line interface.
	reader.close()

});