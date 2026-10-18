const chaiFlavours: stringl[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [2.4, 33]


type Chai = {
name: string;
price: number
}
const menu: Chai[] = [
{name: "Masala", price: 15},
{name: "Adrak", price: 25},
]


// readonly
const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune")


// multi diamantional
const table: number[][] = [
 [1, 2, 31,],
 [4, 5, 6]
]


// Tuple
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
chaiTuple = [20, "Masala"] // in tuple remember order


let userInfo: [string, number, boolean?] 
userInfo = ["hitesh", 100] 
userInfo = ["hitesh", 100, true] 


const location: readonly [number, number] = [28.66, 32.22]
const chailtems: [name: string, price:number] = ["Masala",25]



enum CupSize {
 SMALL,
 MEDIUM,
 LARGE
}
const size = CupSize.LARGE



enum Status { 
PENDING = 100,
SERVED, // 101 
CANCELLED // 102
} 



enum ChaiType { 
 ASALA = "masala", 
 GINGER = "ginger"
} 
function makeChai(type: ChaiType){ 

console. log( `Making: ${type}`); 
}

makeChai(ChaiType.ASALA)
// makeChai('MQWQ')



const enum Sugars {
Low = 1,
MEDIUM = 2,
HIGH = 3
}
const s = Sugars.HIGH



let t: [string, number] = ["chai", 10] 
t.push("extra")