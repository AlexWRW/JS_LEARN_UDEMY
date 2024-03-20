'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let Q1 = prompt('Один из последних просмотренных фильмов?', '');
let Q2 = +prompt('На сколько оцените его?', '');
let Q3 = prompt('Один из последних просмотренных фильмов?', '');
let Q4 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[Q1] = Q2;
personalMovieDB.movies[Q3] = Q4;

console.log(personalMovieDB);

