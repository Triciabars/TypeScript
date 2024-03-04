(()=>{
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatisignal = (): string => { //sin especificar el tipo de dato también funciona pero para legibilidad y detectar que devuelva lo que esperas
        return 'activada';
    }

    console.log(typeof returnName());
    console.log(typeof activateBatisignal());
})()