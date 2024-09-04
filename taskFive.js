// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(const keys in myObject)
{
    console.log("key:",keys," | type:",typeof(myObject[keys]))
    // console.log(myObject.keys); does not work
    // console.log(myObject[keys]); works
}