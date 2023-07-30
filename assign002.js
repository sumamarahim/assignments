/**
 * Announcement:
July 29, 30 and 31

Next Saturday, July 29, there will be no class in honor of Muharram. Our next class will resume on August 5.
During this break, to ensure that we stay on track with our learning. Therefore, here are some assignments for you to complete before our next class:

Assignment 1:
Is there an alternative method available to transpile our TypeScript code without executing the tsc command?

Assignment 2:
Create a grading system that takes subject marks as input from the user through prompts and returns the corresponding grades using functions and if-else conditions.

Assignment 3 (Only for Beginners):
Complete the exercises provided in this repository:
https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md

Assignment 3 (Only for Seniors):
Complete the exercises provided in this repository:
https://github.com/panaverse/typescript-node-projects
 */
console.log("Assignment 2: Create a grading system that \ntakes subject marks as input from the user through \n prompts and returns the corresponding grades using \nfunctions and if-else conditions.");
// START OF ASSIGNMENT NO 2: 
// Assignement No 2: Grading System with user input
console.log("**************Start of Assignment  No 2******************");
// Marks input from user 
console.log("Please enter your each sub marks out of 100");
var sub1 = require("prompt-sync")()("Enter your Sub 1 marks: ");
var sub2 = require("prompt-sync")()("Enter your Sub 2 marks: ");
var sub3 = require("prompt-sync")()("Enter your Sub 3 marks: ");
var sub4 = require("prompt-sync")()("Enter your Sub 4 marks: ");
var totalMarks = 400;
var sum = Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4);
var percent = Number((sum / totalMarks) * 100);
//console.log(`the sum of all is: ${Number(sum)}`);
console.log("Total Marks is: ", sum, " Out of ", totalMarks);
console.log("Percentage is: ", percent, "%");
console.log(gradeFunc());
function gradeFunc() {
    var gradeVar = percent;
    if (gradeVar <= 100 && gradeVar >= 90) {
        console.log("Brilliant Student you've A+ grade");
    }
    else if (gradeVar < 90 && gradeVar >= 80) {
        console.log("Greate Student you have: A grade");
    }
    else if (gradeVar < 80 && gradeVar >= 70) {
        console.log("B+ Grade");
    }
    else if (gradeVar < 70 && gradeVar >= 60) {
        console.log("B Grade");
    }
    else if (gradeVar < 60 && gradeVar >= 50) {
        console.log("C Grade");
    }
    else if (gradeVar > 100) {
        console.log("Sorry dear! Your entered marks is above the 100%\n please correct it first");
    }
    else
        console.log("SOrry! you are below the Grade C and your %age is: ", percent);
}
