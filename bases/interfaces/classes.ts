(()=>{

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human {
        age: number;
    }
    class Mutant implements Xmen, Human {
        //implements para interfaz
        public age: number;//para cumplir con lo de Human
        public name: string;
        public realName: string;
        constructor(name: string, realName: string) {
            this.name = name;
            this.realName = realName;
            this.age = 25;
        }

        mutantPower(id: number): string {
            return this.name + ' ' + this.realName + ' ' + id
        }

    }
})()