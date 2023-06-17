// This function's purpose is to calculate grades.
function calculateGrade() {
    // Captures the input and displays the grade.
    let MarksInput = document.getElementById("Marks");
    let gradeOutput = document.getElementById("resultsDisplayed");
    
    // It parses a string argument and returns a number.
    let Marks = parseInt(MarksInput.value);

    // This function determines whether a value is NaN when converted to a number.
    if (isNaN(Marks) || Marks < 0 || Marks > 100) {
      gradeOutput.textContent = "Invalid mark! Please enter a mark between 0 and 100.";
      return;
    }
    // Where variables are declared. 
    let grade;
    if (Marks > 79) {
      grade = "A";
    } else if (Marks > 59) {
      grade = "B";
    } else if (Marks > 49) {
      grade = "C";
    } else if (Marks > 39) {
      grade = "D";
    } else {
      grade = "E";
    }
    // Gives the output. 
    gradeOutput.textContent = "The student's grade is: " + grade;}
