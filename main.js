// Aim: Create a function that calculates the area of a triangle given the base and height as arguments. 
// Call the function a few times with different inputs.

let base;
let height;

function triangleArea(base, height){
    let area = .5 * base * height;
    console.log(area);
}

triangleArea(5, 6);
triangleArea(10, 2);
triangleArea(20, 40);