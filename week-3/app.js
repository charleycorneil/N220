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
    "Area: " + height * width + "<br/>";
}
