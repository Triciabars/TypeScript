(()=>{
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
           // console.log('Constructor avenger llamado');
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger{
        //si no existe constructor llama al del padre
        constructor(name: string, realName: string, public isMutant: boolean){  //sin public las propiedades de super para que no se creen de nuevo en esta clase
            super(name, realName);  //siempre el super lo primero del constructor
            //console.log('Constructor xmen llamado');
        }

        get fullName(){
            return `${this.name} - ${this.realName}`	
        }

        set fullName(name: string){     //solo admite un  argumento
            if(name.length < 3){
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }
            
            this.name = name;
        }
        getFullNameFromXmen(){
            console.log( super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    //console.log(wolverine.fullName) //como es un getter no necesita ()
    wolverine.fullName = 'Fernando';        //invoca al  setter
    //console.log(wolverine.fullName);
    //wolverine.getFullNameFromXmen();


})()