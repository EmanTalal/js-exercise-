var title = "Welcom to My JavaScript Lesson"
    //Caulate the length
console.log(title.length)

//Slice mwthod!
console.log(title.slice(0, 12))

//String toUpperCase()
console.log(title.toUpperCase())

//String toLowerCase()
console.log(title.toLowerCase())

//REPLACE mwthod
let rep = title.replace("Welcom", "Hello");
console.log(rep)

//typeof
console.log(typeof title)

//revers it's Used for array Then ..Seprate the Proces!
var Split = title.split(''); // process1
var Rev = Split.reverse(); //Procees2
var Joins = Rev.join(''); // Process3
console.log(Joins);

// Question 2
let numberOne = 10;
let numberTow = 20;
let NumberThree = 30;
let MaxNumber = Math.max(numberOne, numberTow, NumberThree)
console.log(MaxNumber);
//min Number 
let MinNumber = Math.min(numberOne, numberTow, NumberThree)
console.log(MinNumber);
//Result Boolean
let Boolean = false;
if (MaxNumber > MinNumber) {
    Boolean = true;
}
console.log(Boolean)
    //Question 5
let yearLeap = 2000;
if ((yearLeap % 4 == 0 && yearLeap % 100 !== 0) || (yearLeap % 400 === 0)) {
    console.log(yearLeap + " The year Leap!");
} else
    console.log(yearLeap + " Not Year Leap!")
    //Question 4
let num = 5;
if (num % 2 == 0) {
    console.log("The Number the Even!")
} else if (num % 2 == 1) {
    console.log("The Number the odd!")
}

//Question 5
let height = 190;
let weight = 44;
let heightInMeters = height / 100;

let BMI = weight / (heightInMeters * heightInMeters)


if (BMI < 15) {
    console.log("نقص حاد جدا في الوزن");
} else if (BMI >= 15 && BMI < 16) {
    console.log("نقص حاد  في الوزن");
} else if (BMI >= 16 && BMI < 18.5) {
    console.log("نقص الوزن");
} else if (BMI >= 18.5 && BMI < 25) {
    console.log("  الوزن طبيعي");
} else if (BMI >= 25 && BMI < 30) {
    console.log(" زيادة في الوزن");
} else if (BMI >= 30 && BMI < 35) {
    console.log("سمنه درجه اولى");
} else if (BMI >= 35 && BMI < 40) {
    console.log("   سمنه درجه اولى")
} else if (BMI >= 40) {
    console.log(" سمنه مفرطه جدأ");
}
//Question 6
var shirtWidth = 23;
let shirtLength = 30;
let shirtSleeve = 8.71;

let size = "NA";

if (shirtWidth >= 18 && shirtWidth < 20 && shirtLength >= 28 && shirtLength < 29 && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
    size = "S";
} else if (shirtWidth >= 20 && shirtWidth < 22 && shirtLength >= 29 && shirtLength < 30 && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
    size = "M";
} else if (shirtWidth >= 22 && shirtWidth < 24 && shirtLength >= 30 && shirtLength < 31 && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
    size = "L";
} else if (shirtWidth >= 24 && shirtWidth < 26 && shirtLength >= 31 && shirtLength < 33 && shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
    size = "XL";
} else if (shirtWidth >= 26 && shirtWidth < 28 && shirtLength >= 33 && shirtLength < 34 && shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
    size = "2XL";
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
    size = "3XL";
} else {
    console.log("Non");
}
console.log(size);