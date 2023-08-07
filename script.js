//Write a program to print the following output for the given values a=10,b=20 Output expected is: 10+20=30 10-20=-10 10*20=200 10/20=0 10%20=10
// let a = 10;
// let b= 20;
// let c = a / b;
// console.log(a+"/"+b+"="+parseInt(c));
// document.write(c);
//Write a program to print the following for a given value a=3; Output expected: 3*1=3 3*2=6 3*3=9 3*4=12 3*5=15 3*6=18
//Given a variable var x = 23. Increment its value by 1
// let x = 23;
// x += 1;
// console.log(x);
//Print the sum of 12 and 23 using the addition operator.
// let a=12;
// let b=24;
// let c = a+b;
// console.log(c);
//Print the difference of 52 and 36 using the subtraction operator.
// let a=52;
// let b=36;
// let c = a-b;
// console.log(c);
//Print the difference of 52 and 36 using the subtraction operator.
//Print the product of 23 and 56 using the multiplication operator.
// let a=23;
// let b=56;
// let c = a * b;
// console.log(c);
//Divide 36 by 5 and print the output by using the division operator.
// let a=36;
// let b=5;
// let c = a/b;
// console.log(c);
//Divide 67 by 4 and print the quotient.
// let a = 67;
// let b = 4;
// let c = a/b;
// console.log(parseInt(c));
//Divide 48 by 7 and print the remainder.

// let a = 67;
// let b = 4;
// let c = a%b;
// console.log(c);
//Print the value of 2 raised to the power of 6.
// let a = 2;
// let b = 6;
// let c = a**b;
// console.log(c);
//Given var x = “Edupoly” and var y = “Training”. Print “Edupoly Training” in the console.
// let x = "Edupoly";
// let y = "Training";
// console.log(x+" "+y);
//Find the perimeter of a square having each side 4cm.
// let a = 4;
// let perimeterOfSquare = 4*a;
// console.log(perimeterOfSquare);
//Find the perimeter of a rectangle of length 50cm and breadth 35cm.
// let height = 50;
// let width = 35;
// let perimeterOfRectangle = 2*(height+width);
// console.log(perimeterOfRectangle);
//14. Find the circumference of a circle of radius 20cm. (Take π = 3.14);2pir
// let radius = 20;
// let circumference = 2 * 3.14 * radius;
// console.log(circumference);
//15. Find the area of a square having each side 12cm.
// let a = 12;
// let area = a * a;
// console.log(area);
//16. 
//19. Given the cost of a product as ₹538.56, add 18% GST to it and print the total cost.
// let costOfProduct = 538.56;
// let gst = 18;
// let totalCost = costOfProduct + (costOfProduct * gst /100);
// console.log(totalCost);
//20. Given a variable var x = 48. Decrement its value by 1.
// let x = 48;
//     x--;
//     console.log(x);
//21. Write a script to swap two numbers;
// let a = 5;
// let b = 10;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);
// 22. Write a script to swap two numbers without using 3rd variable (please use *,%,/ not + and -)
// let a = 5;
// let b = 10;
//     a = a * b;
//     b = a / b ;
//     a = a / b;
//     console.log(a);
//     console.log(b);
//23. Write a program to print the reminder of a division
// let a = 4;
// let b = 2;
// let c = a % b;
// console.log(c);
//24. Write a program to print the simple interest rate of given P T R values
// let P = 1000;
// let T =  12;
// let R = 10;
// let simpleInterest = (P * T *  R)/100;
// console.log(simpleInterest);
// 26.  Write a program to print the max of given two numbers using ternary operator
// 32. Check a given number is even or not using ternary operator
// const number = 3;
// const isEven = number % 2 === 0 ? true : false;
//console.log(isEven);
// if (isEven) {
//     console.log(number + ' is even number');
// } else {
//     console.log(number + ' is not an even number');
// }
//33.  Check a given number is odd or not using ternary operator
// const number = 5;
// const isOdd = number % 2 !== 0 ? true : false;
// console.log(isOdd);
// if (isOdd) {
//     console.log(number + ' is a odd number');
// } else {
//     console.log(number + ' is not an odd number');
// }
// 34.Check a given number is positive or not using ternary operator
// const number = 10;
// const isPositive = number > 0 ? true : false;
// console.log(isPositive);
// if (isPositive) {
//     console.log(number + ' is positive number');
// } else {
//     console.log(number + ' is not a positive number');
// }
// 35. Check a given number is multiple of 4 or not using ternary operator
// const number = 64;
// const isMultipleOf4 = number % 4 === 0 ? true : false;
// console.log(isMultipleOf4);
// if (isMultipleOf4) {
//     console.log(number + ' is multiple of 4');
// } else {
//     console.log(number + ' is not a multiple of 4');
// }
// 36. Print the (a+b)^2 for given a and b values
// let a = 3;
// let b = 4;
// let c = (a + b) ** 2;
// console.log(c);
// 37. Print the (a+b)^3 for given a and b values
// let a = 2;
// let b = 1;
// let c = (a + b) ** 3;
// console.log(c);
// 38. Print the (a+b+c)^2 for given a,b and c values
// let a = 1;
// let b = 2;
// let c = 3;
// let result = (a + b + c) ** 2;
// console.log(result);
// 39. Ramesh’s basic salary is input through the keyboard. His dearness allowance is 40% of basic salary, and house rent allowance is 20% of basic salary. Write a program to calculate his gross salary.
// let basicSalary = +prompt('Enter basic salary here');
// let dearness = (basicSalary * 40) / 100;
// let houseRentAllowance = (basicSalary * 20) / 100;
// let grossSalary = basicSalary + dearness + houseRentAllowance;
// console.log(grossSalary);
// 40. The distance between two cities (in km.) is input through the keyboard. Write a program to convert and print this distance in meters, feet, inches and centimeters.
// let distanceBetweenTwoCities = +prompt('Enter distance in kilometers here');
// let distanceInMeters = distanceBetweenTwoCities * 1000;
// let distanceInfeet = 3280.84 * distanceBetweenTwoCities;
// let distanceInCentimeters = distanceBetweenTwoCities * 100000;
// console.log(distanceInMeters);
// console.log(distanceInfeet);
// console.log(distanceInCentimeters);
// 41. If the marks obtained by a student in five different subjects are input through the keyboard, find out the aggregate marks and percentage marks obtained by the student. Assume that the maximum marks that can be obtained by a student in each subject is 100.
// let sub1 = +prompt('Enter marks of sub1');
// let sub2 = +prompt('Enter marks of sub2');
// let sub3 = +prompt('Enter marks of sub3');
// let sub4 = +prompt('Enter marks of sub4');
// let sub5 = +prompt('Enter marks of sub5');
// let marksPerSubject = 100;
// let totalMarks = marksPerSubject * 5;
// let aggregate = sub1 + sub2 + sub3 + sub4 + sub5;
// let percentage = (aggregate / totalMarks) * 100;
// console.log(aggregate);
// console.log(percentage);
// 42. Temperature of a city in Fahrenheit degrees is input through the keyboard. Write a program to convert this temperature into Centigrade degrees.
// let temperatureInFahrenheit = +prompt('Enter temperature in Fahrenheit');
// let temperatureInCentigrade = (temperatureInFahrenheit-32) * (5 / 9);
// console.log(temperatureInCentigrade);
// 43. The length & breadth of a rectangle and radius of a circle are input through the keyboard. Write a program to calculate the area & perimeter of the rectangle, and the area & circumference of the circle.
// let lengthOfRectangle = +prompt('Enter length of rectangle');
// let breadthOfRectangle = +prompt('Enter breadth of rectangle');
// let radiusOfCircle = +prompt('Enter radius of Circle');
// let areaOfRectangle = lengthOfRectangle * breadthOfRectangle;
// let perimeterOfRectangle = 2 * (lengthOfRectangle + breadthOfRectangle);
// let areaOfCircle = 3.14 * (radiusOfCircle ** 2);
// let circumferenceOfCircle = 2 * 3.14 * radiusOfCircle;
// console.log(areaOfRectangle);
// console.log(perimeterOfRectangle);
// console.log(areaOfCircle);
// console.log(circumferenceOfCircle);
// 44. Two numbers are input through the keyboard into two locations C and D. Write a program to interchange the contents of C and D.
// let cValue = +prompt('Enter value of C');
// let dValue = +prompt('Enter value of D');
// let temp = cValue;
//  cValue = dValue;
//  dValue = temp;
//  console.log(cValue);
//  console.log(dValue);
// 45. If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits. (Hint: Use the modulus operator ‘%’)
