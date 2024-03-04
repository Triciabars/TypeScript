function printToConsole( constructor: Function ) {
    console.log(constructor);
}

const printToCosnoleCondicitional: Function = (print: boolean = false):Function => {
    if (print) return printToConsole;
    else return () => {};
}

const bloquearPrototipo = function(constructor: Function){
    Object.seal(constructor);   //seal para bloqeuar que se agreguen nuevas características a la clase
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(target, propertyKey, descriptor);
        //propertyKey es el nombre del metodo: savepokemondb
        //descriptor es la descripcion del metodo para poner solo lectura escritura, etc
        //target es la clase o el objetivo, en este caso la clase Pokemon la función de savepokemonid
        // descriptor.value = () => {
        //     console.log('Hola mundo')
        // }
        //Para cambiar lo que hace la función
        const originalMethod = descriptor.value;
        descriptor.value = (id:number) => {
            
            if(id<1 || id > 800) {
                return console.error('El id del Pokemon debe estar entre 1 y 800');
            } else{
                return originalMethod(id);
            }
        }
    }
}

function readonly(isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string){
        //en propiedades no está disponible el descriptor
        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this);
                //en funciones tradicionales this se mantiene apuntando a lo que estaba en funciones de flecha this cambia el entorno hacia fuera osea a la clase o al metodo
                return 'Fernando';
            },
            set(this, val){
                //console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,  //para que no se pueda escribir
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}
//decorador es una simple función y factory decorator es una función que devuelve otra función. con factory se llaman con ()

@bloquearPrototipo      //se pueden agregan tantos decoradores como quieras se ejecutan en orden secuancial
@printToCosnoleCondicitional( false )
export class Pokemon {

    @readonly(true)
    public publicApi: string = 'https://pokeapi.co';
    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()  //decorador en metodos
    savePokemonToDB(id:number){
        console.log(`Pokemon guardado en DB ${id}`);
    }
}