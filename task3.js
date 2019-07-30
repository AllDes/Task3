'use strict'; 

let money, time;

function start() {
    money = +prompt("Your monthly budget?", "1000");

    while(isNaN(money) || money == "" || money == null) {
        alert("Something happened with your money... Please try again to answer the first question.");
        money = +prompt("Your monthly budget?", "1000");
    }

    time = prompt("enter current date in format YYYY-MM-DD", "2019-07-21");

}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    arrIncome: {},
    savings: false
    };

function howManyMadatoryExpenses() {
    let howManyMadatoryExpenses = +prompt("How many mandatory expense item for this month?", "0");

    if (howManyMadatoryExpenses == "") {
        howManyMadatoryExpenses = 0; 
    }

    while(isNaN(howManyMadatoryExpenses) || howManyMadatoryExpenses == null) {
        alert("Please enter how many madatory expenses do you have in a nuber");
        howManyMadatoryExpenses = +prompt("How many mandatory expense item for this month?", "0");
    }

    howManyMadatoryExpenses = Math.abs(Number(howManyMadatoryExpenses));
    return howManyMadatoryExpenses;
}

function chooseExpenses(e) {

    for(let i = 0; i < e; i++) {
    let a = prompt("Enter a mandatory expense item for this month.", ""),
        b = +prompt("How much it will cost?", "0");

    while(isNaN(b) || b == "" || b == null) {
        alert("please enter mandatory expense item cost in a number");
        b = +prompt("How much it will cost?", "0");
    }

    let d = "|" + i + "." + a + "|";
    appData.expenses[d] = b;
    }
}

chooseExpenses(howManyMadatoryExpenses());

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("daily budget: " + appData.moneyPerDay);
}

function detectLevel () {
    if(appData.moneyPerDay <= 100) {
        appData.WealthLevel = "low"
    } else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 100) {
        appData.WealthLevel = "average"
    } else if (appData.moneyPerDay > 2000) {
        appData.WealthLevel = "high"
    } else {
        alert("Something went wrong")
    }

    alert(" Your wealth level is: " + appData.WealthLevel);
}

function isSavings() {
    let i = confirm("Are you have any savings?");
    
    if(i) {
        appData.savings = true;
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What is the sum of your savings?", "100");

        while(isNaN(save) || save == "" || save == null) {
            alert("Please enter sum of your savings in a nuber");
            save = +prompt("What is the sum of your savings?", "100");
        }

        

        let percent = +prompt("Under what percentage are your savings?", "5");
        console.log(percent);
        while(isNaN(percent) || percent == "" || percent == null) {
            alert("Please enter under what percentage are your savings in a nuber");
            percent = +prompt("Under what percentage are your savings?", "5");
        }

        appData.monthIncome = save/1200*percent;
        alert("Income from your deposit: " + appData.monthIncome);
    }
}

function chooseOptExpenses(a) {
    a = Math.abs(a);

    for (let i = 0; i != a; i++) { 
        let c = +prompt("How much a mandatory expense item will cost?", "0");

        while(isNaN(c) || c == "" || c == null) {
            alert("Please enter mandatory expense item cost in a nuber");
            c = +prompt("How much a mandatory expense item will cost?", "0");
        }

        appData.optionalExpenses[i] = c;
    }
}

function howManyOptEpenses() {
    let optExpenses = +prompt("How many optional expenses do you have", "3");

    if (optExpenses == "") {
        optExpenses = 0; 
    }

    while(isNaN(optExpenses) || optExpenses == null) {
        alert("Please enter how many optional expenses do you have in a nuber");
        optExpenses = +prompt("How many optional expenses do you have", "3");
    }

    return optExpenses;
}

chooseOptExpenses(howManyOptEpenses());
isSavings();
checkSavings();
detectDayBudget ();
detectLevel ();