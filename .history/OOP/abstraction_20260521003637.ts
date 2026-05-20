// 3rd piller of OOP: Abstraction

// Abstraction is the process of hiding the implementation details and showing only the functionality to the user. In TypeScript, we can achieve abstraction through abstract classes and interfaces.

// Amar ekta idea thakbe kintu real implementation ta buja jai na. Abstraction er maddhome amra complex system ke simple kore tulte pari.Kivabe amra abstraction er maddhome complex system ke simple kore tulte pari? Amra abstraction er maddhome complex system ke simple kore tulte pari by hiding the implementation details and showing only the functionality to the user.

// using by 2 ways
// 1.interfaces
// 2.abstract classes


// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// // implementing the interface
// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log('Playing music...');
//     }
//     pause(): void {
//         console.log('Pausing music...');
//     }
//     stop(): void {
//         console.log('Stopping music...');
//     }
// }

// const myMusicPlayer = new MusicPlayer();
// myMusicPlayer.play(); // Output: Playing music...

// Abstract Class Example
// Leader class
abstract class mediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

// implementing the abstract class
class MusicPlayer extends mediaPlayer {
    play(): void {
        console.log('Playing music...');
    }   
    pause(): void {
        console.log('Pausing music...');
    }
    stop(): void {
        console.log('Stopping music...');
    }
}

//abstract class theke kokhono instance create kora jai na. Kintu amra abstract class ke extend kore instance create korte pari. Abstract class er method gulo ke override kore amra real implementation dite pari.
const myMusicPlayer = new MusicPlayer();