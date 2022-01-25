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
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == null || money == '') {
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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '')

            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a !== '' && b !== '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectedDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(2)
        alert(`Бюджет на один день ${appData.moneyPerDay} руб.`);
    },
    detectLevel: function () {
        console.log(appData);
        (appData.moneyPerDay < 1000) ? alert('Минимальный уровень достатка') : (appData.moneyPerDay > 1000
            && appData.moneyPerDay < 2000) ? alert('Средний уровень достатка') : (appData.moneyPerDay > 2000) ?
            console.log('Высокий уровень достатка') : alert('Что-то пашло не так');
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert(appData.monthIncome)
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?', '')
            appData.optionalExpenses[i] = questionOptExpenses;
        }
    },
    chooseIncome: function () {
        let item = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

        if (typeof(item) != 'string' || item == '' || typeof(item) == null){
            console.log('Вы ввели некорректные данные или не ввели их вовсе')
        } else {
            appData.income = item.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
        }

        appData.income.forEach(function (item, index) {
            alert(`${index + 1} способы доп. заработка: ${item}`);
        })
    }
};

for (let appDataKey in appData) {
    console.log(`Наша программа включает в себя данные: ${appDataKey}  ${appData[appDataKey]}`);
}
