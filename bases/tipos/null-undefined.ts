(()=>{
    //let nada: undefined = undefined;
    //let nada: number = undefined; //error porque en typescript un numero no puede ser undefined, undefined es un tipo distinto 
    let nada: (boolean | undefined) = undefined; //así ya puedes asignar un undefined a otro tipo de dato o cambiando en la config de ts strictNullChecks a false
    console.log(nada);
})()