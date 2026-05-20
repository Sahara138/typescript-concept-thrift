// Static

class Counter {
    static count: number = 0;

    increment() {
        return ()
        // Counter.count++;
    }

    decrement() {
        Counter.count--;
    }
}