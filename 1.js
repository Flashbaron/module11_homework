let arr = ['b', 'c', 5, null, 0, 4, 8, 15, 16, 23, 42, 0, 'm']

function evenOddCounter(arr) {
    // Функция перебирает массив и выводит в консоль кол-во нулей, четных и 
    // нечетных чисел

    let isEven = 0, isOdd = 0, isZero = 0;

    for (let i=0; i<arr.length; i++) {

        if ((arr[i]===null) || (isNaN(arr[i])) || (typeof(arr[i])!=="number")) {
            continue;
        } else if (arr[i] === 0) {
            isZero += 1;
        } else if (arr[i]%2 === 0) {
            isEven += 1;
        } else if (arr[i]%2 === 1) {
            isOdd += 1;
        }
    
    }

    console.log(`Чётных чисел - ${isEven}, нечётных чисел - ${isOdd}, нулей - ${isZero}`)
}

evenOddCounter(arr)