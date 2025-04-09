// Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you
//  variable for First name 
const firstName = "David"
//  variable for Last name 
const lastName = "James"
// variable for Age
const age = 40
//  variable for which country you come from
const nationality = "Nigerian"

// variable to Combine a message Togther 
const message = `My name is ${firstName} ${lastName}. I am ${age} years old. I am a ${nationality} studying Software Engineering in CareerEx `
// output the Message 
console.log(message);

// __________________________________________________
//  Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps
//  variable for your Favourite Qoute
const favoriteQuote = "You only Live Once (YOLO), so enjoy Life while you have it"
// Output of the Default Favourite Qoute  text 
console.log(favoriteQuote)
// Output of the Favourite Qoute changed to Upper case 
console.log(favoriteQuote.toLocaleUpperCase());
// Output of the Favourite Qoute changed to Lower case 
console.log(favoriteQuote.toLocaleLowerCase());

// _________________________________________________
// 3.Take a word and rearrange it in reverse order, then log the reversed word.
//  a variable for the Word 
const testWord = "Happy"
//  a variable for the Reversed word 
// use Split to seperate the characters into an Array of Individual Characters. Then Reverse the Array so that it reverses the order of the Word , then Join them Back togther as a string using join("")
const reversedWord = testWord.split("").reverse().join("")

// output the Reversered word 
console.log(reversedWord);

// _________________________________________________
// 4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
//  a Variable to Store the price of 3 different Items bought from the store 
const priceOfLaptop = 5200000
const priceOfMouse = 29000 
const priceOfKeyboard = 26000

//  a variable to Calculate the Total Price and add the Price Together 
const totalPrice = priceOfLaptop + priceOfMouse + priceOfKeyboard

console.log(totalPrice);

// create a variable to add a message to the Output 
const newMessage = `The Customer bought a laptop, a mouse and a keyboard that cost N${priceOfLaptop}, N${priceOfMouse}, N${priceOfKeyboard} respectively. This Cost a total of N${totalPrice}`
// output the Message
console.log(newMessage);

// _________________________________________________
// 5.Find the average of 5 test scores stored in variables. Display the average with a message.

// Create a 5 Different variables for the test scores 
const mathTest = 30
const englishTest = 60
const physicsTest = 50
const chemistryTest = 80
const biologyTest = 10

// Calculate the Averge test score 
const averageTestScore = (mathTest + englishTest + physicsTest + chemistryTest + biologyTest) / 5
console.log(averageTestScore);

// write a message and output the message for  test Score
const testScoreMessage = `The average score of the Current Student in the Test : ${averageTestScore} `
console.log(testScoreMessage);

// _________________________________________________
// 6.Create an array of your 5 favorite foods. Display the first and last items in the array.

//  Variable Contianing your 5 favorite Food
const myFavoriteFood = ["Jollof Rice", "Eba", "Yam and Egg", "Semo and Egusi", "Burger"]

// Select the first Element in the array 
console.log(myFavoriteFood[0]);

// Select the last Element in the array 
console.log(myFavoriteFood[4]);

// _________________________________________________
// 7.Add two more food items to the list: one at the beginning and one at the end. Display the new list.

// adding a new food item at the end of an array 
myFavoriteFood.push("Pounded Yam")
// adding a new food to the Begining of the Array
myFavoriteFood.unshift("Pizza and Iceream")
// display the new array list
console.log(myFavoriteFood);

// _________________________________________________
// Create three arrays: 8.jssOne 9.jssTwo 10.jssThree Each array must contain 10 student names as string values.

// an array with 10 names 
const jssOne = ["Samuel Hunsa", "Prosper Omesieta", "John Sowemimo", "Adeniyi Saheed", "David Sampson", "Sarah Victoria", "Ukpono Ekong", "Oluwatosin Oguntoyinbo","Akanni Opeyemi", "Victor Moses"]

// an array with 10 names 
const jssTwo = ["Akinola Alice", "Uzoma", "Dennis Onoja", "Oluwaseyi Fashina", "Dauda Tijani", "Opeyemi Fasanu", "Kiingsley Chukwuwmeka", "Raphael k","Tochukwu ikechukwu", "Emeka Nwagbo"]

// an array with 10 names 
const jssThree = ["Aishat Omolara", "Orji Onuoha", "Oluwatobi Kehinde", "Chidimma Onuora", "Jeff Mgbe", "Patrick", "Jeremiah Adegboyega", "Nnado Victory ","Adebite Micheal", "Tony Akalonu"]

// display the array for jssOne
console.log(jssOne);

// display the array for jssTwo
console.log(jssTwo);

// display the array for jssThree
console.log(jssThree);