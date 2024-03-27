'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count<=30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count>30) {
    console.log('Вы киноман');
} else {
    console.log('Ответ перепиши, пидор');
}

// let Q1 = prompt('Один из последних просмотренных фильмов?', '');
// let Q2 = +prompt('На сколько оцените его?', '');
// let Q3 = prompt('Один из последних просмотренных фильмов?', '');
// let Q4 = +prompt('На сколько оцените его?', '');

for (let i=0; i<2; i++) {
    const Q1 = prompt('Один из последних просмотренных фильмов?', '');
    const Q2 = +prompt('На сколько оцените его?', '');
    if(Q1 != null && Q2 != null || Q1 != '' && Q2 != '' || Q1.length <50 && Q2 <50) {
        personalMovieDB.movies[Q1] = Q2;
    } else {
        i--;
    }
}

// personalMovieDB.movies[Q1] = Q2;
// personalMovieDB.movies[Q3] = Q4;


