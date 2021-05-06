// ЗАДАНИЕ 1
var a = 1,
    b = 1,
    c, d;

c = ++a;
alert(c); // 2  (прединкремент) переменной "a" прибавляем единицу (прединкремент сразу выводит готовое значение)

d = b++;
alert(d); // 1 в данном случае постинкремент, переменная "d" , которая выводится в значении 1, прибавляем единицу и выводим предыдущее значение переменной

c = (2 + ++a);
alert(c); // 5  т.к. в первом примере мы прибавили единицу в переменную а ее значение стало равно 2, в данном примере прибавляем еще единицу и а становится равно 3, получившийся результат 5 

d = (2 + b++);
alert(d); // 4  в данном примере прибавляем еще единицу, получается 3, но в результате предыдущее значение т.е 2, ответ 4

alert(a); // 3  в данном примере прибавили единицу в 1 примере и 3
alert(b); // 3  здесь прибавили единицу в примере 2 и 4



// ЗАДДАНИЕ 2
var a = 2;
var x = 1 + (a *= 2);
alert(x); // ответ равен 5  т.к. оператор *= это сокращенный оператор, полностью он будет выглядеть x = 1 + (a = a * 2 )




// ЗАДАНИЕ 3

var a = 5;
var b = 3;
if (a > 0 && b > 0) {
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    alert(x);
}


// ЗАДАНИЕ 4

var a4 = parseInt(prompt('Введите число от 0 до 15'));

if (isNaN(a4)) {
    alert('Вы ввели не число!')
} else
    switch (a4) {
        case 1:
            alert(a4++);

        case 2:
            alert(a4++);

        case 3:
            alert(a4++);

        case 4:
            alert(a4++);

        case 5:
            alert(a4++);

        case 6:
            alert(a4++);

        case 7:
            alert(a4++);

        case 8:
            alert(a4++);

        case 9:
            alert(a4++);

        case 10:
            alert(a4++);

        case 11:
            alert(a4++);

        case 12:
            alert(a4++);

        case 13:
            alert(a4++);

        case 14:
            alert(a4++);

        case 15:
            alert(a4);
            break;
    }





// ЗАДАНИЕ 5

var a = 2;
var b = 3;

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}

var a3 = parseInt(prompt("Введите первое число:"));
var b3 = parseInt(prompt("Введите второе число:"));
if (!isNaN(a3) && !isNaN(b3)) {
    alert("сумма: " + sum(a3, b3));
    alert("разность: " + sub(a3, b3));
    alert("частное: " + div(a3, b3));
    alert("произведение: " + mul(a3, b3));
} else alert("Вы ввели неверное значение");

//ЗАДАНИЕ 6

function mathOperation(a3, b3, operation3) {
    switch (operation3) {
        case "sum":
            return sum(a3, b3);

        case "sub":
            return sub(a3, b3);

        case "div":
            return div(a3, b3);

        case "mul":
            return mul(a3, b3);
    }
}

var a3 = parseInt(promp("Введите первое число:"));
var b3 = parseInt(promp("Введите второе число:"));
var operation3 = prompt("Введите название операции:\n1) sum\n2) sub\n3 div mul\n4");
if (!isNaN(a3) && !isNaN(b3) && (operation3 == "sum" || operation3 == "sub" || operation3 == "div" || operation3 == "mul")) {
    if (operation3 == "sum") alert("сумма: " + mathOperation(a3, b3, operation3));
    if (operation3 == "sub") alert("разность: " + mathOperation(a3, b3, operation3));
    if (operation3 == "div") alert("частное: " + mathOperation(a3, b3, operation3));
    if (operation3 == "mul") alert("произведение: " + mathOperation(a3, b3, operation3));
} else alert("Вы ввели неверное значение");