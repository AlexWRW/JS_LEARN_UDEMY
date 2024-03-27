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

for (let i=0; i<2; i++) {
    const Q1 = prompt('Один из последних просмотренных фильмов?', '');
    const Q2 = +prompt('На сколько оцените его?', '');
    if(Q1 != null && Q2 != null || Q1 != '' && Q2 != '' || Q1.length <50 && Q2 <50) {
        personalMovieDB.movies[Q1] = Q2;
    } else {
        i--;
    }
}
function ShowMyDB () {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

ShowMyDB();

function WriteYourGenres () {
    for (let i =1; i<=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

WriteYourGenres();