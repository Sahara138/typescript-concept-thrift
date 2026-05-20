// Static

class Counter {
    static count: number = 0;

    increment() {
        return (this.count)
        // Counter.count++;
    }

    decrement() {
        Counter.count--;
    }
}