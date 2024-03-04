(()=>{
    const batman : string = 'Batman';
    const linternaVerde : string = "Linterna Verde";
    const volcanNegro : string = `Héroe: Volcan negro`;

    const abc = 123;

    console.log(`I'm ${batman}, ${abc}`); //abc hace un .toString() por eso no da error
    console.log( batman.toUpperCase());

    console.log( batman[10]?.toUpperCase() || 'No está presente' ) //sin ? da error porque batman no tiene caracter 10, el || es por si no existe ? que se muestre el otro mensaje

})()