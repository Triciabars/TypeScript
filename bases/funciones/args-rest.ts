(()=>{
    const fullName = (firstName: string, ...restArgs: string[]):string => { //... para mandar varios argumentos y juntarlos en el tipo de datos que le definas
        return `${firstName} ${restArgs.join(' ')}`	
    }
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({superman});
})()