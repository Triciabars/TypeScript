(() => {
 function callBatman():void {
    return;
 }

 const callSuperman = ():void => {
     //return null; //error no es void
     //return true; //error no es void
     //void significa que esa función no devuelve nada
     return;
 }
 const a = callBatman();
 console.log(a);
 
 //si no pones tipo void y la función no devuelve nada se devuelve undefined
})()