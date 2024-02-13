function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);
 
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);
 
 //    calculate area
 const Area = base * height;
 console.log(Area);
 
 // display area
 
 const parallelogramArea = document.getElementById('parallelogram-area');
 parallelogramArea.innerText = Area;
 }