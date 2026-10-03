interface chai {
    name: string
    price: number
}

export const shop:chai = {
  name: "masala",
  price:  20,
}

// read only property
interface Ms {
    readonly id: number;
    name: string;
}
export const s:Ms = {id: 2, name: "hello" }
// s.name="3"



// for props
interface discountCal {
    (price: number): number;
}
export const apply:discountCal = (p)=> p*0.5


//functions or method
interface TeaM {
    start(): void;
    stop(): void
}
export const Machine: TeaM = {
    start(){
        console.log("start here");
        
    },

    stop() {
        console.log("stop here");
        
    },
}


//index signature
interface chaiRating {
    [flavor: string] : number;
}
export const rating: chaiRating = {
    masala: 4.2,
    teawithben: 3.2,
}



// interface can merge
interface user {
    name: string;
}
interface user {
    age: number;
}

export const u:user = {
    name: "hello",
    age: 30,
}



interface A {ab: string}
interface B {bc: string}

interface C extends A, B {}

export const d: C = {
    ab: "j",
    bc: "c"
}