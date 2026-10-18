let tea: {
 name: string;
 price: number;
 isHot: boolean;
}

tea = {
 name: "Ginger Tea",
 price: 25,
 isHot: true
}




type Tea = {
    name: string,
    price: number,
    ingredients: string[],
}
const AdhrakChai: Tea = {
    name: "new",
    price: 20,
    ingredients: ["ginger", "milk"]
}



//extra value does not cause problem in ts
type Cup = {size: string}; 
let smallCup: Cup = {size: "200ml"} 

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew:Brew = coffee






type Item= {name: string, quantity: number} 
type Address= {street: string, pin: number} 

type Order = { 
id: string; 
items: Item[]; 
address: Address 
}





// partially assign 
type Chai = { 
name: string;
price: number; 
isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => { 
  console. log ("updating chai with", updates); 
}
updateChai({price: 25})


// required
type ChaiOrder = { 
name?:string; 
quantity?:number 
} 

const placeOrder = (order: Required<ChaiOrder>) => {
 console.log(order);
}

placeOrder({
name: "Masala Chai",
quantity: 20
})



//pick (to pick reqired type)
type Chai = { 
name: string; 
price: number; 
isHot: boolean; 
ingredients: string[] 
} 

type BasicChaiInfo = Pick<Chai, "name" | "price">

const chailnfo: BasicChaiInfo = {
name: "Lemon Tea",
price: 30
}