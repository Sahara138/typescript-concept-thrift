// Static

class Counter {
    count: number = 0;
    static count 

    increment() {
        return (this.count = this.count + 1);
        // Counter.count++;
    }

    decrement() {
        return (this.count = this.count - 1);
        // Counter.count--;
    }
}