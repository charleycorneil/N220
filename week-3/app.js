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
  const perimeter = 2 * height + 2 * width;
  document.querySelector("#panswer").innerHTML += perimeter;
}
