// CHAPTER 21-25

// Task #1


// var firstnam = prompt("Enter your first Name");
// var lastnam = prompt("Enter your last Name");
// var fullName = firstnam  +  lastnam;
// document.write("Welcome !  to our website "  +  fullName);


// Task #2


 //var phone = prompt ("Enter your favourite phone model");
 //var numChars = phone.length;
 //document.write("My favourite phone is : " + phone + "<br>");
// document.write ("Length of string : "+ numChars);


        // Task #3


// var country = "Pakistan";
// var firstChar = country.indexOf ("n");
// document.write("<h3>String : " + country + "<br>");
// document.write("Index of 'n' :" + firstChar + "</h3>");


// Task #4

// var greet = "Hello World";
// var firstChar = greet.lastIndexOf("l");
// document.write("String : " + greet + "<br>");
// document.write("Last index of 'l' :" + firstChar);


// Task #5


// var myC = "Pakistani";
// var thirdChar = myC.charAt("3");
// document.write("String : " + myC + "<br>");
// document.write("Character at index 3 : " + thirdChar); 


// Task #6


// var firstnam = prompt("Enter your first Name");
//  var lastnam = prompt("Enter your last Name");
//  var fullName =  firstnam.concat(lastnam);
//  document.write("Welcome !  to our website "  +  fullName);

// Task #7


// var city = "Hyderabad";
// var newC = city.replace("Hyder" , "Islam");
// document.write("City : " + city + "<br>");
// document.write("After replacement :" + newC);


// Task #8


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var ex = message.replace("and" , "&");
// var ex2 =  ex.replace("and" , "&" );
// document.write(ex2);

// Task #9

// var  num1 = "472";
// var num2 = parseInt("472");
// document.write("Value : " + num1 + "<br>");
// document.write("Type :  string"  + "<br>");
// document.write("Value : " + num2 + "<br>");
// document.write("Type :  number");

// Task #10


// var word = prompt("Write a word to change it to uppercase");
// var word2 = word.toUpperCase();
// document.write("User input :" + word + "<br>");
// document.write("Upper case :" + word2);

// Task #11


// var country = prompt("Enter your country");
// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     document.write("User input :" + country + "<br>");
//  document.write( "Title case : "+sentence.join(" "));
//  return sentence;
//  }
//  titleCase(country);


// Task #12


// var num1 = 35.36;
// var newnumber = num1.toString().replace(".", "");
// document.write("Number : " + num1 + "<br>");
// document.write("Result : " + newnumber );


//   Task 13  

// var User = prompt("Please Enter your username");
// for(var i=0;i<User.length;i++){
//     if(User.charCodeAt(i) == 33 || User.charCodeAt(i) == 44 || User.charCodeAt(i) == 46 || User.charCodeAt(i) == 64){
//         alert("Please Enter a valid username")
//     }
// }


//   Task 14   


// var A =["cake","apple pie","cookie","chips","patties"];
// var Order = prompt("Welcome to ABC Bakery. What you want to order sir/madam?");
// var indexOrder = Order.toLowerCase();
// var index1 = A.indexOf(indexOrder);
// if(index1 < 0 ){
//     alert("We are sorry,"+userOrder+" is not availabe in our bakery");
// }else{
//     alert(userOrder+" is available at index "+index1+" in our bakery")
// }


//   Task 15   



// function validate(userPassword) { 
// for (let i = 0; i < userPassword.length; i++) {
//     const element = userPassword[i];
//     if(userPassword[0] == 1 || userPassword[0] == 2 ||userPassword[0] == 3 ||userPassword[0] == 4 ||userPassword[0] == 5 ||userPassword[0] == 6 ||userPassword[0] == 7 ||userPassword[0] == 8 ||userPassword[0] == 9){
//         alert("Password can not begin with a number");
//         prompt("Please Enter a valid password");
//         return;
//     }else if(userPassword.length <= 6){
//         alert("Password Must be atleast six characters")
//         prompt("Please Enter a valid password");
//         return;
//     }else if(userPassword.match(/[a-zA-Z0-9]/g).length < 0){
//         alert("Password must contain number and characher");
//         return;
//     }else{
//         alert("Welcome");
//         return;
//     }
    
// }   
// }

// var userPassword = prompt("Please Enter Your Password");
// validate(userPassword);

// Task #16

// var university = "University of Karachi";
// for (let i = 0; i < university.length; i++) {
//     const element = university[i];
//     document.write(element+"<br>");
// }

// Task #17


// var userInput = prompt("please enter a word to get its last word");

// var lastInput = userInput[userInput.length-1];

// document.write(`User inout: ${userInput} <br> Last character of input : ${lastInput}`)


// Task #18


//         var str = "the quick brown fox jumps over the lazy dog";
//         var patt1 = /the/g;
//         var result = str.match(patt1);
//         var result2 = result.length;
//       document.write("Text : "+ str + "<br>");
//       document.write("There are " + result2 + "occurencie(s) of word 'the'");  
      

// CHAPTER #26-30

// Task #1

// var num = prompt("Please enter a positive value");
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// document.write("number : " + num + "<br>");
// document.write("round off value : " + num1 + "<br>");
// document.write("floor value : " + num2 + "<br>");
// document.write("ceil value : " + num3);


//Task #2

// var no = prompt("Please enter a negative a value");
// var no1 = Math.round(no);
//  var no2 = Math.floor(no1);
//  var no3 = Math.ceil(no);
//  document.write("number : " + no + "<br>");
//  document.write("round off value : " + no1 + "<br>");
//  document.write("floor value : " + no2 + "<br>");
//  document.write("ceil value : " + no3 ); 


// Task #3

//var value = prompt("enter a value");
//var value2 = Math.abs(value);
//document.write("The absolute value of " +  value  +  " is "   +   value2);


// Task #4

 
// document.write(`random dice value: ${Math.floor(Math.random()*(1-6)+6)} <br> random dice value: ${Math.floor(Math.random()*(1-6)+6)}`);



//Task #5

//var number = Math.floor(Math.random()*9);
//if (number==2) {
//        document.write("<h2>random coin value : Heads")
//} else if(number==1){
//     document.write("random coin value : Tails</h2>")
//}


//Task #6

//var a = Math.floor(Math.random()*100);
//document.write(a);


//Task #7


//var weight = prompt("Enter your weight in kilograms");
//document.write("The weight of user is" + weight )

//Task #8


//var user =  prompt("Try this game");

//var secret = Math.floor(Math.random()*11);
//if (user==secret){
  //      alert("Congratulation  " + "\n" + "You have won the game");
//}
//else{
    //  alert("Try again" + "\n" + "You were very close ");
//}


//CHAPTER #31-34


//Task #1

//var rightnow = new Date ();
//document.write(rightnow);


//Task #2


//var monthNames = ["January", "Febraury", "March", "April", "May", "June", "July", "August","September", "October","November","December"];
 //var now = new Date();
 //var theMonth = now.getMonth();
 //var nameOfToday = monthNames[theMonth];

//alert ("Current Month is " + nameOfToday);



//Task #3



//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//var now = new Date();
//var theDay = now.getDay();
//var nameOfToday = dayNames[theDay];

//alert ("Today is " + nameOfToday);

//Task #4


// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday=="Sunday"){
//   alert("It's Fun day");
// }
//  else if(nameOfToday==="Saturday"){
//   alert("It's Fun day");
// }else{
//   alert("Taoday is " + nameOfToday);
// }


//Task #5


// var now = new Date();
// var theDay = now.getDate();
// if (theDay < 16){
//   alert("First fifteen days of the month ");
// } else {
//   alert("Last days of the month");
// }



//Task #6


//var date = new Date();
//var time = date.getTime();
//var min = time/1000*60;
//document.write("Current date : " + date + "<br>");
//document.write("Elapsed milisecond since  January 1, 1970 : " + time + "<br>");
//document.write("Elapsed minutes  since January 1, 1970 :" + min);
 


//Task #7


// var date = new Date();
// var hour = date.getHours();
// var min = date.getMinutes();
// var sec = date.getSeconds();
// if (hour < "12") {
//  alert("It's A.M")
// } else {
//   alert("It's P.m")
// }



//Task #8


//var day = new Date("December 31, 2020 00:00:00");
//document.write( "Later date : "  + day);


//Task #9


//var today = new Date().getTime();
//var ramdan = new Date("6/18/2015").getTime();
//var msDiff = today - ramdan;
//var dDiff = msDiff/ (1000*60*60*24);
//var newdDiff = Math.floor(dDiff);
//document.write(newdDiff + "  days have passed since 1st Ramdan 2015");



//Task #10

//var date1 = new Date ("12/5/2015 22:50:16 ").getTime();
//var date2 = new Date ("1/1/2015").getTime();
//var smDiff = date1-date2;
//var dDiff = Math.floor((smDiff/1000)/60) ;
//document.write( "On reference date Sat Dec 05 2015 22:50:16 GMT+0500(PKT),<br>" );
//document.write(dDiff + "seconds had passed  since  begining of 2015<br>");


//Task #11

 var date1 = new Date ("12/05/2015 23:09:37");
 var date2 = new Date ("12/05/2015 23:09:37");
 var date = Math.floor((date1-da)/1000/60/60);
 document.write("current date : " + date1 + "<br>");
 document.write(date + " hour ago, it was " + date1);


//Task #12

// var date1 = new Date ("12/05/2015 23:09:37");
// var date2 = new Date("12/05/1915 23:09:37");
// var date = Math.floor((date1-date2)/1000/60/60/24/365);
// document.write("current date : " + date1 + "<br>");
// document.write(date + " years back, it was " + date2);


//Task #13


// var date1 = prompt("Enter your birth date");
//  var date2 = new Date().getFullYear() -date1;
//  document.write("Your age is : " + date1 + "<br>");
//  document.write( " Your birth year is  : " + date2);



//Task #14


// var customerName = "ABC Customer";
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var month = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var grossAmount = netAmount + lateCharge;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${month}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>Gross Amount Payable (after Due Date): <b>${grossAmount}</b><br>`)

//Chapter 35-38 

// Task 1  

// function displayDate() {
//     var today = new Date();
//     document.write(today);
// }
// displayDate();



//   Task 2   



// function greet() {
//     var fistName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     alert("Welcome " + fistName + " "+ lastName);  
// }
// greet();




//   Task 3   




// function sum() {
//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     return num1+num2
// }
// sum();


//   Task 4   


// function calculator(num1,num2,operator) {
//  var result = eval(num1+operator+num2);
//  return result   
// }

//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     var operator =  prompt("Enter the Operator");

// var show = calculator(num1,num2,operator);
// document.write(show);



//   Task 5  


// function convetSquare(num) {
//     var result = Math.pow(num,2)
//     document.write(result)
// }
// convetSquare(5);


//   Task 6   


// function factorial(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return document.write(num);
//   }
//   factorial(5);

//   Task 7     

// function count(num1,num2) {
//     for (let i = num1; i <= num2; i++) {
//         document.write(i)
//     }
// }
// count(1,10);

//   Task 8  

// function calculateHypotenuse(base,perpendicular) {
//     function calculateSquare(num) {
//         return Math.pow(num,2)
//     }
//     var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//     return document.write(hypotenuse)
// }

// calculateHypotenuse(10,10);


//   Task 9     


// function calculateArea(height,width) {
//     var area = height * width
//     return document.write(area+"<br>");
// }
// var height = 100;
// var width =100;
// calculateArea(10,10);

// calculateArea(height,width);


//   Task 10    


// function checkPalindrome(str){
//        var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return document.write("this string is palindome");
//     }

//     checkPalindrome("madam");

//  var userInput = prompt("Enter Any thing to convert first letter to capital");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

//   Task 11     


// var titleCase = toTitleCase(userInput);
// document.write("Example String "+userInput+" <br> Expected Output :"+titleCase);


//   Task 12   



// function largeWord(string) {
//     var str = string.split(" ");
//     var large = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (large < str[i].length) {
//             large = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var large = largeWord("Web Development Tutorial");
// document.write("Example String "+"Web Development Tutorila"+ "<br> Expected Output :"+large);



//  Task 13   



// function checkOccur(string,word) {
//     var regex = new RegExp(word,"g")
//     var count = (string.match(regex) || []).length;
//     return document.write(count);
// }

// checkOccur("Hellow world is world hellow","o");



//   Task 14  



// function calCircumference(radius) {
//     var result = 2 * (3.14) *radius
//     return document.write("The circumference of "+ radius +" is "+result+"<br>")
// }
// function calculateArea(radius) {
//     var result = 3.14 * (Math.pow(radius,2));
//       return document.write("The area of "+ radius +" is "+result)
// }
// calCircumference(35);
// calculateArea(35);
