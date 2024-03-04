import  powers  from '../data/powers';
import  {Power}  from '../data/powers';
export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) {}

    get power (): string {
        return powers.find(p => p.id === this.powerId)?.desc || 'not found';
    }
    //si en vez de ? ponemos ! significa que le decimos a ts que confíe en nosotros que nunca va a ser undefined y puede llevar a errores
}

export class Hero2 {}
export class Hero3 {}

export const Pi = 3.14
export const miNombre = 'Patricia'