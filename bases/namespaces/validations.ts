namespace validations {
    export const validateText = (text: string):boolean => {
        if (text.length < 3) {
            return true;
        }
        return false;
    } //con la palabra export delante ya no da error, export elige lo que se puede ver fuera del namespace
    

    export const validateDate = (date: Date):boolean => {
        return ( isNaN(date.valueOf())) ? false : true;
    }

    console.log( validations.validateText('Fernando')) //error no es una función
}