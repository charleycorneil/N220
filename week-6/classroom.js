const classroom = {
  students: [],
  name: "N220",
  showStudents() {
    document.getElementById("students").innerHTML = "";

    // this.students.forEach(function (studentName) {
    //   innerHTML += studentName + "<br />";
    // });
    for (let i = 0; i < classroom.students.length; i++) {
      const studentName = classroom.students[i];
      document.getElementById("students").innerHTML += studentName + "<br />";
    }
  },
  maxStudents: 2,
};

function addNewStudent() {
  const currentStudents = classroom.students.length;
  if (currentStudents >= classroom.maxStudents) {
    console.log("No Seats Avaliable");
  } else {
    classroom.students.push(document.getElementById("studentNamef").value);
    classroom.showStudents();
  }
}
