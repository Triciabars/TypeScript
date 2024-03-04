(()=>{
    
    interface Hero {        //muy parecidos a objetos/types.ts, los tipos no son extendibles, los interfaces sí parecido a las clases pero sin necesidad de implementar métodos
        name: string,   //type Hero = { es la unica diferencia
        age?: number,
        powers: string[],
        getName?: () => string
    }
    
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [
            'Super velocidad',
            'Viajar en el tiempo'
        ]
    }

    let superman: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [
            'Super velocidad',
            'Viajar en el tiempo'
        ],
        getName(){return this.name}
    }
   
   
    
   
   // console.log(flash);
   })()