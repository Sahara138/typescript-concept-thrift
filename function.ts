// Function
// arrow  function, normal function, function expression

function add(a: number, b: number): number {
    return a + b;
}

// object => function =>method

const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(money: number): number {
      const newBalance =  this.balance += money;
      return newBalance;
    }
}

poorUser.addBalance(1000);


//callback function 

const arr : number[] = [1, 2, 3, 4, 5];

const squaredArr = arr.map((elem: number): number => elem * elem);