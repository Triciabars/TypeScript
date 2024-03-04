(()=>{
    abstract class Mutante  {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante{

        salvarMundo() {
            return 'Mundo salvado';
        }
    };
    class Villian extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado';
        }
    };
    const magneto : Villian = new Villian('Magneto', 'Magnus'); 
    const wolverine : Xmen = new Xmen('Wolverine', 'Logan');    //así no da error
    //const wolverine : Mutante = new Mutante('Wolverine', 'Logan'); //error no se pueden crear clases abstractas

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    const printName = (character: Mutante) => {
        console.log(character.realName);
    }
    //printName(wolverine);   //puedo meter algo que haya extendido de mutante
})()