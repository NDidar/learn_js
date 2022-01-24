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

let money = +prompt("Ваш бюджет на месяц?", ''), time = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце',''),
        b = prompt('Во сколько обойдется?','')

    if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a !== '' && b !== '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i--;
    }
  }

appData.moneyPerDay = appData.budget/30

alert(`Бюджет на один день ${appData.moneyPerDay} руб.`);

console.log(appData);
(appData.moneyPerDay < 1000) ? console.log('Минимальный уровень достатка'):(appData.moneyPerDay > 1000
    && appData.moneyPerDay < 2000 )? console.log('Средний уровень достатка'): (appData.moneyPerDay > 2000)?
    console.log('Высокий уровень достатка') : console.log('Что-то пашло не так');
