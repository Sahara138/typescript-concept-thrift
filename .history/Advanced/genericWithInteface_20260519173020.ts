interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;
    };
    smartWatch: T;
}

const poorDeveloper: Developer<{
    heartRate: number;
    stopwatch: boolean;
}> = {
    name: 'John Doe',
    salary: 50000,
    device: {
        brand: 'Dell',
        model: 'XPS 13',
        releaseYear: '2020'
    },
    smartWatch: {
        heartRate: 72,
        stopwatch: true
    }
}

const richDeveloper: Developer<{
    heartRate: number;
    stopwatch: boolean;
}> = {
    name: 'Jane Doe',
    salary: 150000,
    device: {
        brand: 'Apple',
        model: 'MacBook Pro 16',
        releaseYear: '2021'
    },
    smartWatch: {
        brand: 'Apple',
        model: 'Apple Watch Series 6',
        releaseYear: '2021'
    }
}