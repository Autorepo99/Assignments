// variable declarion will vary in four different parameter

//1. initialization
//2. reassignment
//3. re-declaration
//4. scope


//1. Initialization

const a = 10; // must be initialized
let b; // can be initialized later 
var C; // can be initialized later

//2. reassignment 

//a = 15;  // invalid error "Assignment to constant variable.''
b = 10; // valid
C = 30; // valid 

//3. re-declarion

//const a = 123; // Error : Identifier 'a' has already been declared
//let b = 30: // Error : Identifier 'b' has been already declared
var c = 45 ; //valid 

console.log(c)

//4. scope 
{
    const x = 50; // valid
    let y = 60;   //valid 
    var z = 70;   //valid
    //console.log(z) // valid
}

console.log(y);