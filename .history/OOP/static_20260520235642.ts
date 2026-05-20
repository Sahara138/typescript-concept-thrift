// Static

class Counter {
    count: number = 0;

    increment() {
        return (this.count = this.count + 1);
        // Counter.count++;
    }

    decrement() {
        Counter.count--;
    }
}