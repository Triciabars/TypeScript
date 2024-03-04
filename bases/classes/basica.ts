(()=>{
    // class Avenger {
    //     private name: string;
    //     public team: string; //por defecto es pública
    //     public realName?: string;
    //     static avgAge: number = 35; //estática, solo se muestra haciendo referencia a la clase, no a la instancia
    //     constructor(name: string, team: string, realName?: string){
    //         this.name = name;
    //         this.team = team;
    //         this.realName = realName;
    //     }
    
    // }

    class Avenger {
        //private name: string;
        //public team: string; //por defecto es pública
        //public realName?: string;
        static avgAge: number = 35; //estática, solo se muestra haciendo referencia a la clase, no a la instancia
        static getAvgAgee(){
            return this.name;       //forma de acceder al nombre de la clase, con team o realname no se podría hacer
        }
        
        constructor(private name: string, private team: string, public realName?: string){
        }

        public bio(){
            return`${this.name} (${this.team})`;
        }
    
    }

    const antman: Avenger = new Avenger('Antman', 'Capi');
    // console.log(antman);

    // console.log(Avenger.avgAge);

    // console.log(antman.bio());

    // console.log(Avenger.getAvgAgee());

})()