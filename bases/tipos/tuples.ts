(()=>{
    const hero: [string, number, boolean] = ['Dr. Strange', 100, true];
    //hero[0] = 500; //Error, en javascript  no se controla este error
    hero[1] = 50;
    hero[0] = 'Ironman';
    hero[2] = false;
    console.log(hero);

})()