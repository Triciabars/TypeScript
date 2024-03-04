(()=>{

    interface Client {
        name: string;
        age?: number;
        // address?:{      //interfaz con más de un nivel es malo, mejor crear otra interfaz
        //     id: number;
        //     zip: string;
        //     city: string;
        // }
        address: Address;   //mejor esta opción
        getFullAddress(id: string): string; //una clase tiene que implementarlo, la interfaz no
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    const client : Client = {
        name: 'Juan',
        age: 25,
        address: {
            id:125,
            zip: 'KY2 SUD',
            city: 'Salford'
        },
        getFullAddress(id) {
            return this.address.city
        }
    }

    const client2 : Client = {
        name: 'Carlos',
        age: 30,
        address: {
            id:135,
            zip: 'KY2 SXD',
            city: 'Ottawa'
        }, 
        getFullAddress(id) {
            return this.address.city
        }

    }
})()