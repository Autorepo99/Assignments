/* dataTypes are two types of datatypes 
* Primitive datatpes and Non-Prmitive dataTypes
*/


/*******************************************************/

//1. number ==> Number represents with decimal and without decimals ( witout queots)

let number = 123; // number withOut decimals
let floatNum = 12.24; // number with decimals 

console.log(typeof number);
console.log(typeof floatNum);

//2. string ==> string represent the text  with double queots and single queots

let str1 = 'Hello, world!'; //string with single queots
let str2 = "JavaScript is fun"; // string with double queots 

console.log(typeof str1);
console.log(typeof str2);

//3. boolean ==> boolean represent result of conditions true or false 

let javascriptIsFun = true ;
let javascriptISFun = false ;

console.log(typeof javascriptISFun); //output boolean 

//4.undefined ==> undefined represents a variable that has been declared but not assigned a value .

let undefinedVar;
console.log(typeof undefinedVar); // output : Undefined 

//5.null ==> null represents an intentional object of any object value 
let nullvar = null;
console.log(typeof nullvar);

//Symbol represent unique identifier


/* Non primitive data types */

//1.Object ==> object represents a collection of key and value paires , in this object inside object data 

let empDetails = {
    empId:123,
    name:'john Deo',
    havingVisa:'true',

    address: {

        city:'newyork',
        zipCode:413512,
        state:'NY',
        country:'USA'
    }

};

console.log(empDetails.name); // output = john deo
//print employee zip code 
console.log(empDetails.address.zipCode)
console.log(empDetails)

//2. array represnts an ordered collection of items 
let fruits = ["Apple" , "Banana", "orange" , "Mango"];
let fruitsAndprices =["Apple", 120 , "Banana", 60, "orange",90 , "Mango",30];
let fruitsAndpricesAvailaibility =["Apple", 120 , true, "Banana", 60,false, "orange",90 ,true, "Mango",30,false];

//print banana from fruits array
console.log(fruits[1]);
console.log(fruitsAndprices[3]);
console.log(fruitsAndpricesAvailaibility[5]);