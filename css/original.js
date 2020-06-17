/* Задание на урок:

1) Первую часть задания повторить по уроку





P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

const personalMovies = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцение его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovies.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
        }    
    }
}

function detectPersonalLevel() {
    if (personalMovies.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
} else if (personalMovies.count >= 10 && personalMovies.count < 30) {
        console.log("Вы классический зритель");
} else if (personalMovies.count >= 30) {
        console.log("Вы киноман");
} else {
        console.log("Произошла ошибка!");    
    
}
}



rememberMyFilms();

detectPersonalLevel();


// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB() {
    if(personalMovies.privat == false) 
    console.log(personalMovies);
}

showMyDB;


// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres


function writeYourGenres() {
for(let i = 0; i < 3; i++) {
    personalMovies.genres[i] = prompt("Ваш любимый жанр под номером: 1:вестерн, 2:комедия, 3:детектив, 4:фантастика, 5:экшн, 6:мелодрама, 7:исторический фильм", ''); 
}
}

writeYourGenres();
console.log(personalMovies.genres);

// let i = 0;

// while ( i < 2) {
//   
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцение его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovies.movies[a] = b;
//              i++;
//             console.log('done');
//         } else {
//             console.log('error');
//            
//             }  

// }

// do {    
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцение его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovies.movies[a] = b;
//             i++;
//             console.log('done');
//         } else {
//             console.log('error');
//                 }    
//     // console.log(i);

//         }  while ( i < 2)





console.log(personalMovies);
