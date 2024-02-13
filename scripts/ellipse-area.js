function calculateEllipseArea(){
    const a = getInputRhombusId('ellipse-major-radius');
    const b = getInputRhombusId('ellipse-minor-radius');
   
    const Area =  3.14 * a * b;
   
   setRhombusInnerTextByID('ellipse-area', Area);
}