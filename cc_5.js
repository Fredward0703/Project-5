// step 2 of creating the employees
let employees = [
    {name:"Santiago Jimenez", hourlyRate:17, hoursWorked:30},
    {name:"Edson Alvares", hourlyRate:20, hoursWorked:36},
    {name:"Javier Hernandez", hourlyRate:26, hoursWorked:42},
    {name:"Memo Ochoa", hourlyRate:25, hoursWorked:45},
];

// start of step 3
function calculateBasePay(rate, hours) {
    if (hours > 40) {
        hours = 40;
    }
    return rate * hours;
}

// console.log(calculateBasePay(20,45));
// step 4
function calculateOvertimePay(rate , hours) {
    if (hours > 40) {
        let overTimeHours = hours - 40
        return (overTimeHours * (rate * 1.5));
    } else {
        return 0;
    }
}

// console.log(calculateOvertimePay(20,39));