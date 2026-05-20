// Static

class Counter {
    // count: number = 0;
    static count:number = 0;

    increment() {
        // return (this.count = this.count + 1);
        Counter.count++;
    }

    decrement() {
        return (this.count = this.count - 1);
        // Counter.count--;
    }
}

const instance1 = new Counter();
console.log(instance1.increment()); // Output: 1
console.log(instance1.increment()); // Output: 2
console.log(instance1.decrement()); // Output: 1

//different memory location
const instance2 = new Counter();
console.log(instance2.increment()); // Output: 1
console.log(instance2.increment()); // Output: 2