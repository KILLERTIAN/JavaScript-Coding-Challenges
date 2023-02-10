const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;
const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
    console.log("Mark's BMI", markBMI, "is higher than John's", johnBMI);
} else {
    console.log("John's BMI", johnBMI, "is higher than Mark's", markBMI)
}

// console.log(markBMI, johnBMI, markHigherBMI)