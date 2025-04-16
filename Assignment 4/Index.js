//1. Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)


// create a function for Student Score
function studentScore (score) {
    //Conditional statement to check if the Score input supplied is 180 and above
    if (score >= 180){
        console.log("Passed");
        // print the Student has passed 
    }
    else{
        console.log("Failed");
        //print the student failed 

    }

}
//to call the function without a score also indicating the person didnt take the exam 
studentScore()
//if the Student had 100 
studentScore(100)
//if the Student had 180 
studentScore(180)
//if the Student had 200 
studentScore(200)

//2.  Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".

function voterAge(age){
    //Conditional statement to check if the Voter's age input supplied is 18 or above
    if (age >= 18){
        console.log("You are eligible to vote");
        // print the Student has passed 
    }
    else{
        console.log("Not eligible");
        //print the student failed 
    }
}
//if Voter's age is 7
voterAge(7)
//if Voter's age is 18
voterAge(18)
//if Voter's age is 30
voterAge(30)

// 3. Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise

//funtion that accepts two input args studentName and student Score

function schoolGradingSystem(studentName, studentScore){
    //conditional statment if the studnet has 90 and and above 
    if (studentScore >= 90){
        console.log("Excellent");
    }
    //conditional statment to check if the studnet has 75 and and 89
    else if (studentScore >= 75){
        console.log("Good");
    }
    //conditional statment to check if the studnet has 50 and and 74
    else if (studentScore >= 50){
        console.log("Average");
    }
    // otherwise the student failed
    else{
        console.log("Fail");
    }
}

// calling the function for a set of student with their scores 
schoolGradingSystem ("James", 90)
schoolGradingSystem ("Joy", 80)
schoolGradingSystem ("Bidemi", 75)
schoolGradingSystem ("Ayo", 50)
schoolGradingSystem ("Temi", 49)

// 4. Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.

// create a function that accepts boolean hasID, isAbove18
function boolFunction (hasID, isAbove18){
    // Condtional statement to check if  hasID and isAbove18 are both true 
    if (hasID == true && isAbove18 == true){
        console.log("Access granted");
    }
    //otherwise deny Access 
    else{
        console.log("Access Denied");
        
    }
}

//calling the function with a test of combination of Input 
boolFunction(true,true)
boolFunction(true,false)
boolFunction(false,true)
boolFunction(false,false)


//5. Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.

// create an Array with student Scores 
const newStudentScore = [50,90,20,100,47,50,70,66,46,57]

// create a For loop that iterates over the length of the array 
for (let a = 0; a < newStudentScore.length; a++){
    console.log(newStudentScore[a]);
    // if the Score is above 50 student passed 
    if (newStudentScore[a] > 50){
        console.log("Pass");
    }
    // if the Score is  50 or below student failed
    else{
        console.log("Fail");
    }
    
}
//_____________________________________________________________
// 6. Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".
//_____________________________________________________________
// create an arrrow Function that take in the scores for maths and english 
const arrowFunctionScore = (maths,english)=>{
    // check if the both scores is higer or equal to 50
    if (maths >= 50 && english >= 50){
        console.log("Yes");
    }
    //otherwise print no
    else{
        console.log("No");
    }
}


// calling the function with several input score combination 
arrowFunctionScore(50,50)
arrowFunctionScore(40,50)
arrowFunctionScore(40,40)


// 7. Create a function that checks if a user has either an email or a phone number before signing up

//create a function to check if a user has email or phone number 
function signUpPortal (hasEmail, hasPhoneNumber){
    // to check if user has either email or Phone number
    if (hasEmail == true || hasPhoneNumber == true){
        console.log("Sign Up Successful");      
    }
    //otherwise 
    else{
        console.log("please enter your Email or phone number");   
    }
}

// calling the function with several input  combination if phone number and Email is true or false  
signUpPortal(true,true)
signUpPortal(true,false)
signUpPortal(false,true)
signUpPortal(false,false)

// 8. Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.
// create a function that takes username and password as input 
function userManagementSystem (username,password){
    // if either of thr values are empty return Invalid input
    if (username == null || password == null){
        console.log("Invalid input");
        
    }
    //otherwise return Access Granted 
    else{
        console.log("Access Granted");
        
    }
    
}

//calling the function with a username and password 
userManagementSystem("james99","hello")
//calling the function with a username 
userManagementSystem("james99")
//calling the function with a  password
userManagementSystem("hello")

// 9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.


// create a function to accept Hours as input 
function hoursWorkedFunction (hours){
    //write a condtional stament using ternary operator 
    hours >= 40 ? console.log("Full-time"): console.log("Part-time")
}

//calling the function with several input  combination if hours is equal or grater than 40
hoursWorkedFunction (20)
hoursWorkedFunction (40)
hoursWorkedFunction (60)

// 10. Write an arrow function that takes two numbers and returns the larger one.
// create an arrow function  that takes 2 numbers as input
const newGreaterNumberFunction = (number1,number2)=>{
    // conditional stament to check is the first number is greater than the second
    if (number1 > number2 ){
        console.log(`The Greater number : ${number1}`);
    
    }
    //otherwise the 2nd number is grather 
    else{
        console.log(`The Greater number : ${number2}`);
    }


}

// calling the function when number 1 is lesser than number 2 
newGreaterNumberFunction(2,3)
// calling the function when number 2 is lesser than number 1 
newGreaterNumberFunction(8,4)