function calculateRectangleArea(){
    // rectangle width 
     const rectangleWidthInput = document.getElementById('rectangle-width');
     const rectangleWidthtext = rectangleWidthInput.value;
     const width = parseFloat(rectangleWidthtext);
     console.log(width);
    
    // rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthtext = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthtext);
    console.log(length);
    
    // calculate rectangle area
    const Area = width * length;
    console.log(Area);
    
    // calculate rectangle display area
    
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = Area;
    }