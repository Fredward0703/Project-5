// step 2 of creating the employees
let employee = [
    {name:"Santiago Gimenez", hourlyRate:17, hoursWorked:30},
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
// step 5
function calculateTaxes(grosspay) {
    return (grosspay * (1 - .15));
}

// console.log(calculateTaxes(300));

//step 6
function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let netPay = calculateTaxes(grossPay);
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

// console.log(processPayroll(employee[3]));


// Step 6: Write processPayroll(employee) that returns an object with:
// name
// basePay
// overtimePay
// grossPay
// netPay