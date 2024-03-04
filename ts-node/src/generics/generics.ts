export const printObject = (argument: any) => {
    console.log(argument);
}

export function genericFunction<T> (argument : T):T{ //T es el estandar para decir que es generico, puede ser cualquier caracter
    return argument;
}   //con <T> conseguimos que devuelva el tipo según el tipo de entrada

export const genericFunctionArrow = <T>(argument: T): T => argument;