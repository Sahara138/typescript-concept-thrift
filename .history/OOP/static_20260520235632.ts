// Static

class Counter {
    count: number = 0;

    increment() {
        return (this.count = Counter.count + 1);
        // Counter.count++;
    }

    decrement() {
        Counter.count--;
    }
}