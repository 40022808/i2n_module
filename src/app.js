import { calcArea } from "./triangle.js";

const doc = {
    baseInput:document.querySelector('#base'),
    heightInput:document.querySelector('#height'),
    areaInput:document.querySelector('#area'),
    calcButton:document.querySelector('#calcButton')
}


const state = {
    area:0
}

doc.calcButton.addEventListener('click',()=>{
    startCalc()
})


function startCalc() {
    const base = Number(doc.baseInput.value);
    const height = Number(doc.heightInput.value);
    state.area = calcArea(base,height);
    doc.areaInput.value = state.area;
}
