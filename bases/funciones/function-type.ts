(()=>{
    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    // let myFunction;
    // myFunction = 10; //no da error porque es de tipo any
    // console.log(myFunction);

    // myFunction = addNumber;
    // console.log(myFunction(1, 2));

    // myFunction = greet;
    // console.log(myFunction('Fernando'));

    // myFunction = saveTheWorld;
    // console.log(myFunction());

//     let myFunction: Function;
//    // myFunction = 10; //da error porque es de tipo Function
//     //console.log(myFunction);

//     myFunction = addNumber;
//     console.log(myFunction(1, 2));

//     myFunction = greet;
//     console.log(myFunction('Fernando'));

//     myFunction = saveTheWorld;
//     console.log(myFunction());
let myFunction: (y: number, z:number) => number;
// myFunction = 10; //da error porque es de tipo Function
 //console.log(myFunction);

 myFunction = addNumber;
 console.log(myFunction(1, 2));

//  myFunction = greet; //error 
//  console.log(myFunction('Fernando'));

//  myFunction = saveTheWorld;
//  console.log(myFunction());
})()