(()=>{
type Avengers = {
    nick: string,
    ironman: string,
    vision: string,
    activo: boolean,
    poder: number
}
    const avenger : Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true, 
    poder: 1500
}

// const { poder, vision} = avengers
// console.log(poder.toFixed(2), vision.toUpperCase())

const printAvenger = ( {ironman, ...resto}: Avengers) => {
    console.log( ironman, resto)
}

//printAvenger(avenger)

const avengerArr: [string, boolean, number] = [
    'Capitan America',
    true,
    150.15
]
const [ , iron, ...resto ] = avengerArr
//console.log( { iron, resto})

})()