

// задание №1
//1.	Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

"use strict" 

let arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if (isNaN(arr[i])) continue;
  arr[i] = Number(arr[i]);
    sum = sum + arr[i];
      }
console.log(sum);


// задание №2
//2.Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
//  Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().

let arr = [];
let n = 4;
let res;
let i;
for (i = 0; i < n; i++) {
    arr.push(Math.random());
    res = arr[i] ** 5;
    console.log(res);
}  
console.log(arr);

// задание №3
// 3.	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a.	Добавьте в начало массива значение ‘Backbone.js’
// b.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c.	Добавьте в массив значение ‘CommonJS’ вторым элементом
// d.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

let arr = ["AngularJS", "jQuery"];
arr.unshift("Backbone.js");
console.log(arr);
arr.push("ReactJS", "Vue.js");
console.log(arr);		
arr.splice(1,0,"CommonJS");
console.log(arr); 
alert(arr[arr.indexOf("jQuery")] + " - Это здесь лишнее");
arr.splice(arr.indexOf("jQuery"), 1);
console.log(arr);

// задание №4
//4.Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
// Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). 
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

let str = "Как однажды Жак звонарь сломал фонарь головой";
let arr = str.split(" ");
console.log(arr);
arr.splice(1, 0, arr[arr.indexOf("Жак")], arr[arr.indexOf("звонарь")]);
arr.splice(4,2);
arr.splice(5,0, arr[arr.indexOf("головой")]);
arr.pop();
console.log(arr);
let str2 = arr.join(" ");
alert(str + "  -   " + str2);

// задание №5
// 5.Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей.
//  С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
//   Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

let person = {
	name : "Megan",
	lastName : "Fox",
	age : 30,
	pet : "cat",  
}
let key = prompt("Укажите свойство");
if (typeof person[key] !== "undefined") {
		alert(person[key]);
} else {
	 person[key] = prompt("Введите значение введенного ранее свойства");
}
  console.log(person);

// задание №6
// 6.Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...),
// не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

let person = {
	name : "Megan",
	lastName : "Fox",
	age : 30,
	pet : "cat",
    mobilePhone : {
    	brand : prompt("Укажите бренд телефона"),
		model : prompt("Укажите модель телефона"),
		resolution : prompt("Укажите разрешение телефона"),
		color : prompt("Укажите цвет телефона"),  
}
};
console.log(person);

// задание №7
//7.Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней. 
//Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

let d1 = new Date();
let d2 = new Date(new Date()-365*24*60*60*1000);
console.log(d1);
console.log(d2);  
let dates = {
	date1 : (d1.getFullYear() + '-' + ('0' + (d1.getMonth() + 1)).slice(-2) + '-' + ('0' + d1.getDate()).slice(-2)),
  	date2 : (d2.getFullYear() + '-' + ('0' + (d2.getMonth() + 1)).slice(-2) + '-' + ('0' + d2.getDate()).slice(-2)),
}
console.log(dates);
date3 = prompt("Введите дату в формате yyyy-mm-dd");
if ((date3 <= dates.date1) && (date3 >= dates.date2)) {
	alert("Входит в диапазон дат объекта dates");
} else {
	alert("Не входит в диапазон дат объекта dates");
}

// задание №8
//8.Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
// полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let arr = [];
let n = 5;
let i;
let sum = 0;
for (i = 0; i < n; i++) {
	x = prompt("Введите любые символы");
	arr.push(x);
	if (isNaN(arr[i])) continue;
	arr[i] = Number(arr[i]);
	sum = sum + arr[i];
}
console.log(arr);
alert("Сумма всех чисел массива: " + sum);

// задание №9
// 9.Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения

let arr = []; 
for(let i = 0; i < 10; i++) { 
    arr[i] = [] ;
     for(let j = 1; j <= 10; j++) { 
     x = (((i + 1) + " " + "*" + " " + j + " " + " = " + (i + 1)*j)); 
     arr[i].push(x);
    } 
 } 
console.log(arr);

// задание №10
// 10.	Создайте структуру данных, полностью описывающую html-разметку картинки.
/* <img src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" style="border: 1px solid #ccc" width="200" /> */

let img = {
	tagName : "img",
	url : "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
	description : "",
	width : 200,
	border : {
		width : 1,
		type : "solid",
		color : "#ccc",
	},
};
console.log(img);