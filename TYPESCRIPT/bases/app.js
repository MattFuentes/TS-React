"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Force;
    (function (Force) {
        Force[Force["aquaman"] = 0] = "aquaman";
        Force[Force["batman"] = 1] = "batman";
        Force[Force["flash"] = 5] = "flash";
        Force[Force["superman"] = 100] = "superman";
    })(Force || (Force = {}));
    const fuerzaFlash = Force.flash;
    const fuerzaSuperman = Force.superman;
    const fuerzaBatman = Force.batman;
    const fuerzaAcuaman = Force.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    let arr = [1, 2, 3];
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
