type coche = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
};
declare const batimovil: coche;
declare const bumblebee: coche;
type Villano = {
    nombre: string;
    edad: number | undefined;
    mutante: boolean;
};
declare const villanos: Villano[];
type Charles = {
    poder: string;
    estatura: number;
};
declare const charles: Charles;
type Apocalipsis = {
    lider: boolean;
    miembros: string[];
};
declare const apocalipsis: Apocalipsis;
declare let mystique: Apocalipsis | Charles;
//# sourceMappingURL=app3.d.ts.map