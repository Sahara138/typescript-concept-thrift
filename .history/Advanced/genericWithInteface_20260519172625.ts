interface Developer {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;
    };
    smartWatch: {
        brand: string;
        model: string;
        releaseYear: string;
    }
}

const poorDeveloper: Developer = {
    name: 'John Doe',
    salary: 50000,
    device: {
        brand: 'Dell',
        model: 'XPS 13',
        releaseYear: '2020'
    },
    smartWatch: {
        brand: 'Apple',
        model: 'Apple Watch Series 6',
        releaseYear: '2021'
    }
}

const richDeveloper: Developer = {
    name: 'Jane Doe',
    salary: 150000,
    device: {
        brand: 'Apple',
        model: 'MacBook Pro 16',
        releaseYear: '2021'
    }