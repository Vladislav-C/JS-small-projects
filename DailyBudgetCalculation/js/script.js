'use strict'

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
};

expensesBtn.setAttribute('disabled', '');
optionalExpensesBtn.setAttribute('disabled', '');
countBtn.setAttribute('disabled', '');



startBtn.addEventListener('click', function(){
    time = prompt('Enter today\'s date (YYYY-MM-DD)');
    money = +prompt('What\'s your budget for a month ?');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('What\'s your budget for a month ?');
    };

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();         //the value property for input !!!!
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

    expensesBtn.removeAttribute('disabled');
    optionalExpensesBtn.removeAttribute('disabled');
    countBtn.removeAttribute('disabled');

});


expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((typeof a) === 'string' && a !== '' && (typeof b) === 'string' && b !== '') {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    };

    expensesValue.value = sum;
    expensesValue.textContent = sum;

});


optionalExpensesBtn.addEventListener('click', function() {
    let i = 0;
    do {

        let optExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = optExpenses;

        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';

        i++;

    } while (i < optionalExpensesItem.length);
});


countBtn.addEventListener('click', function() {

    if (appData.budget != undefined){
        appData.moneyPerDay = Math.floor(appData.budget/30);
        dayBudgetValue.textContent = appData.moneyPerDay;

        switch (true){
            case (appData.moneyPerDay <= 100): 
                levelValue.textContent = 'The minimum level of the income';
                break;
            case (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ): 
                levelValue.textContent = 'The avarage level of the income';
                break;
            case (appData.moneyPerDay >= 2000): 
                levelValue.textContent = 'The maximum level of the income';
                break;
            default:
                levelValue.textContent = 'Error';
        };
    }else {
        dayBudgetValue.textContent = 'Error';
    }; 
});


incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');

    incomeValue.textContent = appData.income;
});


checkSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});


sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = (percent/100*sum/12-expensesValue.value).toFixed(1);
        appData.yearIncome = (percent/100*sum-expensesValue.value*12).toFixed(1);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});


percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = (percent/100*sum/12).toFixed(1);
        appData.yearIncome = (percent/100*sum).toFixed(1);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
})

