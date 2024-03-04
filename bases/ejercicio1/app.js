"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    const fuerzaFlash = fuerza.flash;
    const fuerzaSuperman = fuerza.superman;
    const fuerzaBatman = fuerza.batman;
    const fuerzaAcuaman = fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxDQUFDLEdBQUcsRUFBRTtJQUdGLE1BQU0sTUFBTSxHQUFVLE9BQU8sQ0FBQztJQUM5QixNQUFNLFFBQVEsR0FBVSxPQUFPLENBQUM7SUFFaEMsTUFBTSxNQUFNLEdBQVcsS0FBSyxDQUFDO0lBRzdCLE1BQU0sWUFBWSxHQUFtQixDQUFDLE1BQU0sRUFBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxNQUFNLE9BQU8sR0FBMkIsQ0FBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBRzdELE1BQU0sT0FBTyxHQUFZLENBQUMsaUJBQWlCLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUd0RSxJQUFLLE1BS0o7SUFMRCxXQUFLLE1BQU07UUFDVCx5Q0FBVyxDQUFBO1FBQ1gsdUNBQVUsQ0FBQTtRQUNWLHFDQUFTLENBQUE7UUFDVCw2Q0FBYyxDQUFBO0lBQ2hCLENBQUMsRUFMSSxNQUFNLEtBQU4sTUFBTSxRQUtWO0lBQ0QsTUFBTSxXQUFXLEdBQVUsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN4QyxNQUFNLGNBQWMsR0FBVSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzlDLE1BQU0sWUFBWSxHQUFVLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDMUMsTUFBTSxhQUFhLEdBQVUsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUc1QyxTQUFTLGlCQUFpQjtRQUN4QixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUyxXQUFXO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELE1BQU0sS0FBSyxHQUFRLEtBQUssQ0FBQztJQUN6QixNQUFNLGFBQWEsR0FBVyxLQUFnQixDQUFDLE1BQU0sQ0FBQztJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFFLGFBQWEsQ0FBRSxDQUFDO0FBRS9CLENBQUMsQ0FBQyxFQUFFLENBQUEifQ==