"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currtentAudio = AudioLevel.medium;
    console.log(currtentAudio);
    console.log(AudioLevel);
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log(enumeracion);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsQ0FBQyxHQUFFLEVBQUU7SUFDRCxJQUFLLFVBSUo7SUFKRCxXQUFLLFVBQVU7UUFDWCx5Q0FBTyxDQUFBO1FBQ1AsK0NBQU0sQ0FBQTtRQUNOLDBDQUFRLENBQUE7SUFDWixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtJQUVELElBQUksYUFBYSxHQUFjLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXhCLElBQUssV0FLRjtJQUxILFdBQUssV0FBVztRQUNaLHdDQUFJLENBQUE7UUFDSix3Q0FBQyxDQUFBO1FBQ0QsdUNBQUcsQ0FBQTtRQUNILHdDQUFDLENBQUE7SUFDSCxDQUFDLEVBTEUsV0FBVyxLQUFYLFdBQVcsUUFLYjtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQSJ9