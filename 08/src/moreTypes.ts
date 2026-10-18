let response: any = "32";

// Type Assertion
let numericNumber: number = (response as string).toLowerCase
console.log(numericNumber);

    


type book = {
    name: string
}

let bookString = '{name: whos there}'
let bookObject = JSON.parse(bookString) as book // in this we forcefully assign bookObject type book

console.log(bookObject.name);



const inputElement = document.getElementById("username") as HTMLInputElement



// unknown and any

let value: any;

value = 22
value = 'hello my frens'
value = [22, 33, 55]
value.toLowerCase();


let newValue: unknown;

newValue = 22
newValue = 'hello my frens'
newValue = [22, 33, 55]
if (typeof newValue === "string") {
    newValue.toLowerCase()
}



//try catch
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);        
    }
    console.log("error", error);
    
}



const data: unknown = "code with me"
const strData: string = data as string



type Role = "admin" | "user"

function redirectOnBasis(role: Role): void {
    if (role === "admin") {
        console.log("redirect to admin");
        return
    }
    if (role === "user") {
        console.log("redirect to admin");
        return
    }
    role;
}


function neverReturn(): never{
    while(true){}
}