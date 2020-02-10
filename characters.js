class Hero {
    constructor(name) {
        this.name = name;
        
    };

    turnOn() {
        console.log(`Vroom vroom!`)
    };

    honk() {
        console.log(`Beep beep`)
    };

};

const rusty = new Car(4, "blue");
console.log(rusty);
rusty.turnOn();
rusty.honk();

const betty = new Car (2, "black");
console.log(betty);
betty.turnOn();
betty.honk();

class SUV extends Car {
    constructor(numberOfDoors, color) {
        super(numberOfDoors, color);
        this.model = "SUV";
    }
};

const inspektor = new SUV(4, "gray");
console.log(inspektor);