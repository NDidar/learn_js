// let options = {
//     width: 1024,
//     height: 640,
//     name: 'test'
// }
//
// console.log(options.name)
// options.bool = false
// options.colors = {
//     border: 'black',
//     bg: 'white'
// }
//
// delete options.bool
//
// console.log(options)
//
//
// for (let optionsKey in options) {
//     console.log(`Свойства ${optionsKey} содержит значение ${options[optionsKey]}`)
// }
//
// console.log(Object.keys(options).length)


let arr = [1,23,4,5,6,7]

arr.pop();
arr.push(8)
arr.shift();
arr.unshift(2)

console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const arrKey in arr) {
//     console.log(arrKey)
// }

arr.sort(compareNum);

function compareNum(a,b){
    return a- b;
}

// arr.splice(1,2);

for (const number of arr) {
    console.log(number)
}




