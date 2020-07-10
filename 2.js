let arr = [1, 2, 5, 8, 11, 9, 1005, 100, 997, 31];

const simpleValue = (value) => {
  // Функция отображает в консоли, является ли переданное число простым
  
  
  if ((typeof(value) !== "number") || (value > 1000)) {
    console.log(`${value} - Некорректное значение`);
    return;
  } else if (((value%2==0) && (value != 2)) || (value <= 1)) {
    console.log(`${value} - Число не простое`);
    return;
  } else if (value === 2) {
    console.log(`${value} - Число простое`);
    return;
  } else {
    for (let i = 2; i < Math.round(value / 2); i++) {
      if (value%i == 0) {
        console.log(`${value} - Число не простое`);
        return;
      }
    }
    console.log(`${value} - Число простое`);
  }
}

arr.forEach(simpleValue);