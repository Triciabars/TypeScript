// //import { Hero as SuperHero, Hero2} from './classes/hero';
// //as es un alias para usarlo en todo el archivo y que no haya conflicto con la variable que quieres declarar de nombre Hero

// import * as HeroClasses from './classes/hero';
// //import { powers  } from './data/powers';
// import powers from './data/powers'; //con la importanción por defecto no necesita {}
// //console.log('Hola Mundo!');

// const Hero = 123;
// //const ironman = new SuperHero('Ironman', 1, 55);
// const ironman = new HeroClasses.Hero('Ironman', 1, 55);
// console.log(ironman);

// console.log(powers);

// import {Hero} from './classes/hero';

// const ironman = new Hero('Ironman', 1, 55);
// console.log(ironman);
// console.log(ironman.power);

 import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";

// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2, c:3});
// printObject([1,2,3,4,5,6,7,8,9,10]);
// printObject('Hola Mundo!');

// console.log( genericFunction(123.4556).toFixed(2) );
// console.log( genericFunction('Hola Mundo!').toUpperCase() );
// console.log( genericFunction(new Date()).getDate() );  

// console.log( genericFunctionArrow(123.4556).toFixed(2) );
// console.log( genericFunctionArrow('Hola Mundo!').toUpperCase() );
// console.log( genericFunctionArrow(new Date()).getDate() );


// import {Hero} from './interfaces/hero';
// import {Villian} from './interfaces/villian';

// const deadpool = {
//     name: 'Deadpool',
//     realName: 'Wade Wilson',
//     dangerLevel: 130
// }

// console.log( genericFunctionArrow<Hero>(deadpool).name);
// console.log( genericFunctionArrow<Villian>(deadpool).dangerLevel);

import {Villian, Hero} from '../interfaces';

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Hero>(deadpool).name);
console.log( genericFunctionArrow<Villian>(deadpool).dangerLevel)