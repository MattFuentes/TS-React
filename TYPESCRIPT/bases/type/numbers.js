"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    console.log(avengers);
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
