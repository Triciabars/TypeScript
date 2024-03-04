(()=>{
    const error = ( message : string ):never|number => {
        if(false) {
            throw new Error(message)
        }

        return 1; //no da error porque hemos añadido que sea never o number
    }
    //never significa que nunca puede acabar correctamente
    error('Auxilio');
    console.log('Hola mundo'); //esto no se ejecuta nunca, acaba el programa después de ese error
})()