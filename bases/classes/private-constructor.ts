(()=>{
    class Apocalipsis {
        static intance:Apocalipsis;
        private constructor(public name: string){
            
        }

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.intance){
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis');
            }

            return Apocalipsis.intance;
        }

        changeName(newName: string){
            this.name = newName
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Xavier'); //se cambia en todos porque es una instancia singleton solo existe una
    // const apocalipsis = new Apocalipsis('Soy apocalipsis')
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2')
    // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3')
    //console.log(apocalipsis, apocalipsis2, apocalipsis3);
})()