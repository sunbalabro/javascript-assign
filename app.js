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


// Task #13


// var username = prompt("Enter a your username");
// if (condition) {
   
// } else {
    
// }

//var num =  String.fromCharCode(33);
//alert(num);


// Task #16

// var str = 'University  Of  Karachi';
// var chars = str.split('');
// document.write( "<h3>"+chars[0] + "<br>");

// var chars = str.split('');
// document.write(chars[1] + "<br>");

// var chars = str.split('');
// document.write(chars[2] + "<br>");

// var chars = str.split('');
// document.write(chars[3] + "<br>");

// var chars = str.split('');
// document.write(chars[4] + "<br>");

// var chars = str.split('');
// document.write(chars[5] + "<br>");

// var chars = str.split('');
// document.write(chars[2] + "<br>");

// var chars = str.split('');
// document.write(chars[6] + "<br>");

// var chars = str.split('');
// document.write(chars[7] + "<br>");

// var chars = str.split('');
// document.write(chars[8] + "<br>");

// var chars = str.split('');
// document.write(chars[9] + "<br>");

// var chars = str.split('');
// document.write(chars[10] + "<br>");

// var chars = str.split('');
// document.write(chars[11] + "<br>");

// var chars = str.split('');
// document.write(chars[12] + "<br>");


// var chars = str.split('');
// document.write(chars[13] + "<br>");


// var chars = str.split('');
// document.write(chars[14] + "<br>");


// var chars = str.split('');
// document.write(chars[15] + "<br>");


// var chars = str.split('');
// document.write(chars[16] + "<br>");


// var chars = str.split('');
// document.write(chars[17] + "<br>");


// var chars = str.split('');
// document.write(chars[18] + "<br>");


// var chars = str.split('');
// document.write(chars[19] + "<br>");


// var chars = str.split('');
// document.write(chars[20] + "<br>");


// var chars = str.split('');
// document.write(chars[21] + "<br>");


// var chars = str.split('');
// document.write(chars[22] + "</h3><br>");


// Task #17


//var country = "Pakistan";
//var lastindex = country.charAt("7");

//document.write("User input : " + country + "<br>");
//document.write("Last character of input : " + lastindex);


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
// var num2 = Math.floor(num1);
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

 
// var ran1 = Math.floor(Math.random()*10);
// var ran2 = Math.floor(Math.random()*9);
 //document.write( "random dice value : " + ran1 + "<br>");
// document.write( "random dice value : " + ran2);



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



//Task #13



















































































