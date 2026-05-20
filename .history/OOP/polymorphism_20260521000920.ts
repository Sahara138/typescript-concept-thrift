// 2nd Piller of OOP - Polymorphism-bohurupi


// polymorphism means many forms. It allows us to use a single interface to represent different types of objects. In TypeScript, we can achieve polymorphism through method overriding and interfaces.

// Method Overriding Example


class HealthyPeople{
    getSleep(){
        console.log(`I  sleep for 8 hours`)
    }
}

class People extends HealthyPeople{
    getSleep(){
        console.log(`I sleep for 6 hours`)
    }
}

const NextLevelDeveloper ;
NextLevelDeveloper.getSleep();