let subs: number | string = '1m'
console.log(subs);

let apiReq: 'pending' | 'error' | 'success' = 'pending'
console.log(apiReq);

let airlineSeat: 'aisle' | 'window' | 'middle' = 'middle'
console.log(airlineSeat);
airlineSeat = 'window'


const orders = ["12", "20", "30"]

let currentOrder: string | undefined;

for (let order of orders){
  if (order === '20'){
    currentOrder = order;
    break;
  }
  currentOrder = "11"
}

console.log(currentOrder);
