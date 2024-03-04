(()=>{
    class Avenger {
        name;
        power;
        constructor (name = 'No name', power = 0){
        this.name = name;
        this.power = power;
        }
    }

    const hulk = new Avenger('Hulk', 9001)
    console.log(hulk)
    class FlyingAvenger extends Avenger {
        flying;
        constructor(name, power){
            super(name, power);     //se necesita usar super
            this.flying = true;
        }
    }

    const falcon = new FlyingAvenger('Hola', 3000);
    console.log(falcon);
})()