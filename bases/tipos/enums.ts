(()=>{
    enum AudioLevel {
        min = 1, //0
        medium, //1, 2
        max = 10 //2
    }

    let currtentAudio:AudioLevel = AudioLevel.medium; //2

    console.log(currtentAudio);
    console.log(AudioLevel);

    enum enumeracion {
        a=10,
        b,  //11
        c=9,
        d   //10
      }
      console.log(enumeracion);
})()