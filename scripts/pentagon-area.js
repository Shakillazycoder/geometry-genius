function calculatePentagonArea(){
    const p = getInputRhombusId('pentagon-perimeter');
    const b = getInputRhombusId('pentagon-apothem');
   
    const Area =  0.5 * p * b;
   
   setRhombusInnerTextByID('pentagon-area', Area);
}