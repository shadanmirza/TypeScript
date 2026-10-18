type ChaiOrder = {
    type: string, 
    suger: number, 
    strong: boolean
};

export function newChai (order: ChaiOrder) {
    console.log(order);
    
}

export function serveChai (order: ChaiOrder) {
    console.log(order);
    
}



type teaRacepe = {water: number, milk: number}

class newDair implements teaRacepe {
    water = 100;
    milk = 100;
}



// type Size = "small" | "large"       //having error in class, we need interface it is called littrel type

interface size {
    size: "small" | "large" 
}

class sizeing implements size {
    size: "small" | "large"="large";
}





type Response = {ok: true} | {ok: false} 

class myRes implements Response{ 
   ok: boolean = true; 
}





// Union 
// this works  | like Or operator like ya to ye ya vo
type TeaType = "masala" | "ginger" | "lemon" 

export function orderChai(t: TeaType){ 
console. log(t); 
}


//intersection
// & this works like And operator both needed
type BaseChai = {tealeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
tealeaves: 2,
masala: 1
}




// Optional Value < ? >
type User = { 
username: string; 
bio?: string 
}

const ul: User = {username: "Hitesh"} 



// Read Only value 
type Config = { 
readonly appName: string 
version: number 
} 

const cfg: Config = { 
appName : "Masterji", 
version: 1,
}

cfg.appName = "ChaiCode" 