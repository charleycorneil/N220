const studentGrades = [78, 86, 92, 77];

const answersPTag = document.getElementById("answers");

function printAnswer(answer) {
  answersPTag.innerHTML += `<br /> ${answer}`;
}

// 1. Arrays will print as a string seperated with commas by default
answersPTag.innerHTML += studentGrades;

//2. Access spectif values in array using indexes
// studentGrades[0]; indexes start at 0
// answersPTag.innerHTML += `<br /> ${studentGrades[1]}`;
printAnswer(studentGrades[1]);

//3. Assign new values to array items in the same way you would a variable declared with let
studentGrades[1] = 83;

// console.log(studentGrades);

//4. same as 1
// answersPTag.innerHTML += `<br /> ${studentGrades}`;
printAnswer(studentGrades);

//5. All arrays have a length even if it zero
printAnswer(studentGrades.length);

//6. Arrays have a forEach method that takes a function as the perimeter
// That function has access to the vales and indexes in the array
studentGrades.forEach(function (currentStudent, currentStudentIndex) {
  //Loop here
  studentGrades[currentStudentIndex] += 1;
  printAnswer(studentGrades[currentStudentIndex]);
});

// Same as 1
printAnswer(studentGrades);

//8. similar to 2
// printAnswer(studentGrades[3]);
const indexOfLastStudent = studentGrades.length - 1;
printAnswer(studentGrades[indexOfLastStudent]);

//9. Use variable to track total of grades added together
// Loop throught array and added total (average)
let totalOfGrades = 0;
studentGrades.forEach(function (currentGrade) {
  totalOfGrades += currentGrade;
});

const averageGrade = totalOfGrades / studentGrades.length;
printAnswer(averageGrade);

// printAnswer(totalOfGrades / studentGrades.length);

//10.
printAnswer(averageGrade > 80);

// More Array

//0. Create an array
const friends = [
  "elmo",
  "spongebob",
  "catdog",
  "danny phantom",
  "timmy turner",
];

function printExtraAnswers(answer) {
  document.querySelector("#extraAnswers").innerHTML += `<br /> ${friends}`;
}

//1. Add items to an array using the push method
friends.push("jimmy neutron");
printExtraAnswers();

//2. Remove the last item to an array using the pop method
friends.pop();
printFriends();

//3. Remove the first item to an array using splice method
friends.splice(0, 1);
printFriends();

//4. Add item to front of array using the
friends.splice(0, 0, "invader zim");
printFriends();

//5. Use splice again
friends.splice(2, 1);
printFriends();

//6. Splice
friends.splice(2, 0, "gir");
printFriends();

//7. Splice
friends.splice(3, 0, ["patrick", "squidward"]);
printFriends();

// splice method takes three parameters
// 1. What index to start at
//2. How many elements starting from that index dhousld be deleted
//3. that to add to the array
//      This could be just a value or or an array of values to ass multiple

// Objects
const person = {
  firstName: "charley",
  lastName: "corneil",
  age: 20,
  hometown: "valparaiso",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

//1. Show full name
document.getElementById("fullName").innerHTML += person.getFullName();

//2. Change value
person.age += 1;
document.getElementById("newFProp").innerHTML += person.age;

//3. Printing object variables ise the JSON.stringify method
document.getElementById("newFProp").innerHTML += `<br /> ${person}`;

//4. Remove property from person using delete key
delete person.hometown;
document.getElementById("newFProp").innerHTML += `<br /> ${JSON.stringify(
  person
)}`;

//5. Print a sentence using our object
console.log(`${person.getFullName()} is ${person.age} years old.`);

//6. Add a method to an existing object
person.isSenior = function () {
  return this.age >= 65;
};
console.log(person.isSenior());

person.age += 10;
console.log(person.isSenior());

let keyProp = "age";
console.log(`person[keyProp] = ${person[keyProp]}`);
console.log(`person.keyProp = ${person.keyProp}`);

person["Middle Inital"] = "L";
console.log(person["Middle Initial"]);

person.hair_color = "black";
