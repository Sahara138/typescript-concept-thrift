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
    