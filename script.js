'use strict';
//
// var number = 1;
// let number2 = 2;
// const number3 = 3;
//
// var string = 'Hello world';
// var boolean = false;
// var sym = Symbol();
// null;
// undefined;
// var obj = {
//     name: 'Didar',
//     age: 25,
//     isMarried: true
// }
//
// console.log(obj.isMarried? 'da zenat' : 'net ne zenat')
//
// let arr = ['hello my friend', 'how a u', 'what are u doing']
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
//
// console.log(arr)
// //
// // confirm("Hello World!")
//
// let incr = 10,
//     decr = 10;
//
// let ostatok = 9;
//
// console.log(ostatok%3? "true" : "false")
//
// console.log(incr++, --decr)

let money, time;

function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD','');

    while(isNaN(money) || money == null || money == ''){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце',''),
            b = prompt('Во сколько обойдется?','')

        if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a !== '' && b !== '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function detectedDayBudget() {
    appData.moneyPerDay = +(appData.budget/30).toFixed(2)
    alert(`Бюджет на один день ${appData.moneyPerDay} руб.`);
    detectLevel();
}

function detectLevel(){
    console.log(appData);
    (appData.moneyPerDay < 1000) ? alert('Минимальный уровень достатка'):(appData.moneyPerDay > 1000
        && appData.moneyPerDay < 2000 )? alert('Средний уровень достатка'): (appData.moneyPerDay > 2000)?
        console.log('Высокий уровень достатка') : alert('Что-то пашло не так');
}
detectedDayBudget();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?",''),
            percent = +prompt("Под какой процент?",'');

        appData.monthIncome = save/100/12*percent;

        alert(appData.monthIncome)
    }
}

checkSavings();


function chooseOptExpenses(){
    for (let i = 1; i < 4; i++) {
        let questionOptExpenses  = prompt('Статья необязательных расходов?','')
        appData.optionalExpenses[i] = questionOptExpenses ;
    }
}

chooseOptExpenses();