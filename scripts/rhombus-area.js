function calculateRhombusArea(){
    const diagonal1 = getInputRhombusId('rhombus-diagonal1');
    const diagonal2 = getInputRhombusId('rhombus-diagonal2');
   
    const Area =  0.5 * diagonal1 * diagonal2;
   
   setRhombusInnerTextByID('rhombus-area', Area);
   
   
   }
   
   function getInputRhombusId(inputTextId){
       const getRhombusDiagonalInput = document.getElementById(inputTextId);
       const getRhombusDiagonalText = getRhombusDiagonalInput.value;
       const value = parseFloat(getRhombusDiagonalText);
       return value
   }
   
   function setRhombusInnerTextByID(elementId, Area){
       const getRhombusID = document.getElementById(elementId);
       getRhombusID.innerText = Area;
   }