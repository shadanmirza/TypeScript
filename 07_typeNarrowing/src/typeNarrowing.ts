function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `hello my ${kind}`
    }
    return `chai order: ${kind}`;
}


function serveChai(msg?: string) {
    if (msg) {
        return `this is the ${msg}`
    }
    return `masala chai `
}


function orderChai(size: 'small' | 'medium' | 'large' | number) {
    if (size === 'small') {
        return `small cutting chai`
    }
    if (size === 'large') {
        return 'extra large chai'
    }
    return `custom size: ${size}ml`
}




class KulladChai {
    serve(){
        return `Serving kullad chai`
    }
}
class cuttingC {
    serve() {
        return `serving cutting chai`
    }
}

function ServingChai(chai: KulladChai | cuttingC) {
    if (chai instanceof KulladChai){
        return chai.serve();
    }
}




type ChaiOrder = {
    type: string
    suger: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number"
    )
}
function serveOrder(item:ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.suger} suger`
    }
    return `serving costom chai: ${item}`
}




type MasalaChai = {type: "masala", masalaLevel: number}
type GingerChai = {type:  "ginger", kkLevel: number}
type KulladaChai = {type: "kullad", mmLevel: number}

type tea = MasalaChai | GingerChai | KulladaChai

export function MakeChai(order: tea) {
    switch (order.type) {
        case "masala":
            return `masala chai `
            break;
        case "ginger":
            return `masala chai `
            break;
        case "kullad":
            return `masala chai `
            break;
        
    }
}



function brew(order:tea) {
    if ("masalaLevel" in order) {
        return `it has level of masala`
    }
}

function isStringArray(arr: unknown): arr is string[] {
    
}