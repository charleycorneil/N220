function simpleFunctionOne() {
  //  Code here
  document.getElementById("changeTxt").innerHTML =
    "Don't change this paragraph.";
}

simpleFunctionOne();

function simpleFunctionTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters.";
}

simpleFunctionTwo();

function sayHelloWorld() {
  console.log("Hello, world");
}

sayHelloWorld();

function sayFavoriteBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayFavoriteBand("The Grateful Dead");
sayFavoriteBand("Credance Clearwater Revival");

function sayMyName(myName) {
  console.log(myName);
}

sayMyName("Say My Name");
sayMyName("Say My Name");
sayMyName("If No One Is Around You");

// Functions that do calculations

function calcRectPerimeter(height, width) {
  const perimeter = 2 * (height + width);
  document.getElementById("#panswer").innerHTML += perimeter;
  document.querySelector("panswer").innerHTML += perimeter;
}

calcRectPerimeter(2, 4);

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  console.log("height", height);
  console.log("width", width);
  document.querySelector("#answer").innerHTML +=
    "Area: " + height * width + "<br />";
  `Area: ${height * width} <br />;`;
}

function calRectAreaAndPeri(height, width) {
  const perimeter = 2 * (height + width);
  const area = height * width;

  document.getElementById("multiAnswer").innerHTML += `Height: ${height} <br />
    Width: ${width} <br />
    Perimeter: ${Perimeter} <br />
    Area: ${area} <br /> <br /> `;

  document.getElementById("multiAnswer").innerHTML += "Height"; + height "<br />";
  document.getElementById("multiAnswer").innerHTML += "Width"; + width "<br />";
  document.getElementById("multiAnswer").innerHTML += "Perimeter"; + perimeter "<br />";
  document.getElementById("multiAnswer").innerHTML += "Area"; + are "<br /> <br />";

}

calRectAreaAndPeri(5, 4);
calRectAreaAndPeri(2, 8);

function myFunction() {
    alert("Who goes there?");
}

function wizard(name, occupation) {
    // confirm("Welcome " + name + ", the " + occupation + "!");
    confirm(`Welcome ${name}, the ${occupation}!`);
    document.getElementById("future").innerHTML += `Welcome ${name}, the ${occupation}!`;
}

function addItem() {
    const newItem = prompt ("Add Item:");
    console.log(newItem);
}

function returnValue(color) {
    return color; 
}

alert(returnValue("green"));

function calcCircleArea(radius) {
    return 2 * Math.PI * radius;
}

document.getElementById("useOne").innerHTML += calcCircleArea(2);
document.getElementById("useTwo").innerHTML += calcCircleArea(4);