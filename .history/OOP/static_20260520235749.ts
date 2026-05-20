// Static

class Counter {
    count: number = 0;
    // static count:number = 0;

    increment() {
        return (this.count = this.count + 1);
        // Counter.count++;
    }

    decrement() {
        return (this.count = this.count - 1);
        // Counter.count--;
    }
}

const instance1 = new Counter();
cons