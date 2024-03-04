(()=>{

    const fullName = ( firstName:string, lasName?:string, upper:boolean = false) : string => { //especificar el tipo string obliga a que el parámetro sea obligatorio, con interrogación ya es opcional los parametros opcionales siempre van al final
        if(upper){
            return `${firstName} ${lasName || ''}`.toUpperCase();
        }
        return `${firstName} ${lasName || ''}`; //si viene undefined que sea ''
    }
    
    const name = fullName('Tony', 'Stark', true);
    console.log({name});
})()