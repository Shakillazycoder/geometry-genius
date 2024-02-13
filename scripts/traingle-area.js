function calculateTriangleArea() {
    //   triangle base calculate formula
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);
  
//   triangle height calculate formula
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

//   triangle  calculate area 
 const Area = 0.5 * base * height;
 console.log(Area);

// display triangle area
const triangleAreaSpan = document.getElementById('traingle-area');
triangleAreaSpan.innerHTML = Area;
}
