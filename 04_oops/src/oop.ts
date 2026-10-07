class chai {
    flavour: string;
    // price: number

    // constructor(flavour: string, price: number){
    //     this.flavour = flavour
    //     this.price = price
    // }

    constructor(flavour: string){
        this.flavour = flavour
    }
}

const masalaChai = new chai("mas")
masalaChai.flavour = "hello"





class tea {
    public flavour: string = "masala"
    
    private secretIngredients = "garam masala"

    reveal(){
        return this.secretIngredients //ok
    }
}

class shop {
    protected shopName = "chai corner"
}

class Branch extends shop {
    getName(){
        return this.shopName //ok
    }
}

export const c = new tea()
new Branch().getName




// private sec method
class Walet{
    #balannce = 99

    getBalance(){
        return this.#balannce
    }
}
const w = new Walet()
w.getBalance




//readonly property
class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}
export const a = new Cup(250)
a.capacity



// geter seter
class Morden{
    private _sugar = 2

    get sugar(){
      return this._sugar
    }

    set sugar(value: number){
        if (value < 5) throw new Error("too sweet")
        this._sugar = value
    }
}

const L = new Morden()
L.sugar = 3




// class Ekchai {
//     static shopname = "newArea"

//     constructor(public flavour: string){}
// }


