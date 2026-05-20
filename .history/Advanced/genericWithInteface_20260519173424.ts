interface Developer<T,X> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;
    };
    smartWatch: T;
    bike?: X ;
}

interface BrandWithoutWatch {
    heartRate: string;
    stopwatch: boolean;
}

interface AppleWatchFeatures {
    heartRate: string;
    callSupport: boolean;
    calculater: boolean;
    AIFeatures: string[];
}
const poorDeveloper: Developer<BrandWithoutWatch, { brand: string; engineCapacity: number }> = {
    name: 'John Doe',
    salary: 50000,
    device: {
        brand: 'Dell',
        model: 'XPS 13',
        releaseYear: '2020'
    },
    smartWatch: {
        heartRate: '72 bpm',
        stopwatch: true
    }
}

const richDeveloper: Developer<AppleWatchFeatures> = {
    name: 'Jane Doe',
    salary: 150000,
    device: {
        brand: 'Apple',
        model: 'MacBook Pro 16',
        releaseYear: '2021'
    },
    smartWatch: {
        heartRate: '72 bpm',
        callSupport: true,
        calculater: true,
        AIFeatures: ['Voice Assistant', 'Health Monitoring']
    }
}