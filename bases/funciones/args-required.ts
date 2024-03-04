(()=>{

    const fullName = ( firstName:string, lasName:string) : string => { //especificar el tipo string obliga a que el parámetro sea obligatorio
        return `${firstName} ${lasName}`;
    }
    let noName: any;
    const name1 = fullName(noName, 'Stark'); //no da error pero el parametro sería undefined y esperamos un string
    const name = fullName('Tony', 'Stark');
    console.log({name});
})()