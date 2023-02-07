/*
* File: app.js
* Author: Sztana Balázs
* Copyright: 2023, Sztana Balázs
* Group: Szoft I-2-E
* Date: 2023-02-07
* Github: https://github.com/BalazsSztana/
* Licenc: GNU GPL
*/

const atmeroElem = document.querySelector("#atmero");
const calcButton = document.querySelector("#calcButton");
const calcButton2 = document.querySelector("#calcButton2");
const areaElem = document.querySelector("#terfogat");
const area2Elem = document.querySelector("#felszin");

calcButton.addEventListener('click', () => {
    let atmero = Number(atmeroElem.value);
    let area = calcArea(atmero)
    areaElem.value = area; 
});
calcButton2.addEventListener('click', () => {
     let atmero = Number(atmeroElem.value);
     let area2 = calcArea2(atmero)
     area2Elem.value = area2; 
 });

function calcArea(r) {
    let terfogat = ((4 * r * r * r * Math.PI) / 3)
    return terfogat;
}
function calcArea2(r) {
    let felszin = (4 * Math.PI * (r * r))
    return felszin;
}