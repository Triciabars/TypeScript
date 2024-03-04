(()=>{

    const fullName = ( firstName:string, lasName?:string) : string => { //especificar el tipo string obliga a que el parámetro sea obligatorio, con interrogación ya es opcional
        return `${firstName} ${lasName || ''}`; //si viene undefined que sea ''
    }
    let noName: any;
    const name1 = fullName(noName, 'Stark'); //no da error pero el parametro sería undefined y esperamos un string
    const name = fullName('Tony');
    console.log({name});
})()