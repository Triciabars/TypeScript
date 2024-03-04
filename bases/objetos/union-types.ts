(()=>{
    
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }
    
    let myCustomVariable: string | number | Hero = 'Fernando';
    console.log(myCustomVariable);

    myCustomVariable = 20
    console.log(myCustomVariable);

    myCustomVariable = {
        name: 'Fernando',
        age: 30,
        powers: ['volar', 'rayos x']
    }

    console.log(myCustomVariable)
   })()