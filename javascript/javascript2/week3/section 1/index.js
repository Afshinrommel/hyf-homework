let numbers = [1, 2, 3, 4];
let newNumbers = [];
//let newNumbersWithFilter
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}
console.log("The doubled numbers are", newNumbers); // [2, 6]
let newNumbersWithFilter = numbers.filter((num) => {
    if (num % 2 == !0) {
        return (num * 2);
    }
})
let newNumberWithMap = newNumbersWithFilter.map((num) => {
    return num * 2;
}
)
for (i = 0; i < newNumbersWithFilter.length; i++) {
    console.log(newNumbersWithFilter[i]);
}
for (i = 0; i < newNumberWithMap.length; i++) {
    console.log(newNumberWithMap[i]);
}
const moview = [{ "title": "A Midsummer Night's Dream", "year": 1999, "rating": 6.5, "votes": 22260, "running_times": 6960 },
{ "title": "A Midsummer Night's Sex Comedy", "year": 1982, "rating": 6.7, "votes": 16072, "running_times": 5280 },
{ "title": "A Mighty Heart", "year": 2007, "rating": 6.7, "votes": 25029, "running_times": 6480 },
{ "title": "A Mighty Wind", "year": 2003, "rating": 7.3, "votes": 23379, "running_times": 5460 },
{ "title": "A Million Ways to Die in the West", "year": 2014, "rating": 6.1, "votes": 149454, "running_times": 8160 },
{ "title": "A Monster Calls", "year": 2016, "rating": 7.5, "votes": 54692, "running_times": 6480 },
{ "title": "A Most Violent Year", "year": 2014, "rating": 7, "votes": 53486, "running_times": 7500 },
{ "title": "A Most Wanted Man", "year": 2014, "rating": 6.8, "votes": 63277, "running_times": 7320 },
{ "title": "A Night at the Opera", "year": 1935, "rating": 8, "votes": 26694, "running_times": 5760 },
{ "title": "A Night at the Roxbury", "year": 1998, "rating": 6.2, "votes": 51079, "running_times": 4920 },
{ "title": "A Night to Remember", "year": 1958, "rating": 7.9, "votes": 11342, "running_times": 7380 },
{ "title": "A Nightmare on Elm Street", "year": 1984, "rating": 7.5, "votes": 168011, "running_times": 6060 },
{ "title": "A Nightmare on Elm Street", "year": 2010, "rating": 5.2, "votes": 80750, "running_times": 5700 },
{ "title": "A Nightmare on Elm Street 3: Dream Warriors", "year": 1987, "rating": 6.6, "votes": 56620, "running_times": 5760 },
{ "title": "A Nightmare on Elm Street 4: The Dream Master", "year": 1988, "rating": 5.7, "votes": 40437, "running_times": 5940 },
{ "title": "A Nightmare on Elm Street Part 2: Freddy's Revenge", "year": 1985, "rating": 5.4, "votes": 49036, "running_times": 5220 },
{ "title": "A Nightmare on Elm Street: The Dream Child", "year": 1989, "rating": 5.1, "votes": 33151, "running_times": 5340 },
{ "title": "A Passage to India", "year": 1984, "rating": 7.4, "votes": 14283, "running_times": 9840 },
{ "title": "A Perfect Day", "year": 2015, "rating": 6.8, "votes": 14727, "running_times": 6360 },
{ "title": "A Perfect Getaway", "year": 2009, "rating": 6.5, "votes": 60120, "running_times": 6480 },
{ "title": "A Perfect Murder", "year": 1998, "rating": 6.5, "votes": 68812, "running_times": 6420 },
{ "title": "A Perfect World", "year": 1993, "rating": 7.5, "votes": 62447, "running_times": 8280 },
{ "title": "A Place in the Sun", "year": 1951, "rating": 7.8, "votes": 16542, "running_times": 7320 },
{ "title": "A Prairie Home Companion", "year": 2006, "rating": 6.8, "votes": 20330, "running_times": 6300 },
{ "title": "A River Runs Through It", "year": 1992, "rating": 7.3, "votes": 45327, "running_times": 7380 },
{ "title": "A Room with a View", "year": 1985, "rating": 7.4, "votes": 32554, "running_times": 7020 },
{ "title": "A Scanner Darkly", "year": 2006, "rating": 7.1, "votes": 95310, "running_times": 6000 },
{ "title": "A Series of Unfortunate Events", "year": 2004, "rating": 6.8, "votes": 173998, "running_times": 6480 },
{ "title": "A Serious Man", "year": 2009, "rating": 7, "votes": 111295, "running_times": 6360 },
{ "title": "A Shot in the Dark", "year": 1964, "rating": 7.6, "votes": 21546, "running_times": 6120 },
{ "title": "A Simple Plan", "year": 1998, "rating": 7.5, "votes": 54525, "running_times": 7260 },
{ "title": "A Single Man", "year": 2009, "rating": 7.6, "votes": 93627, "running_times": 5940 },
{ "title": "A Sound of Thunder", "year": 2005, "rating": 4.2, "votes": 17277, "running_times": 6600 },
{ "title": "A Star Is Born", "year": 1954, "rating": 7.8, "votes": 11576, "running_times": 10860 },
{ "title": "A Street Cat Named Bob", "year": 2016, "rating": 7.4, "votes": 18086, "running_times": 6180 },
{ "title": "A Streetcar Named Desire", "year": 1951, "rating": 8, "votes": 84993, "running_times": 7500 },
{ "title": "A Thousand Words", "year": 2012, "rating": 5.9, "votes": 33739, "running_times": 5460 },
{ "title": "A Time to Kill", "year": 1996, "rating": 7.4, "votes": 110362, "running_times": 8940 },
{ "title": "A Very Harold & Kumar 3D Christmas", "year": 2011, "rating": 6.3, "votes": 58988, "running_times": 5760 },
{ "title": "A View to a Kill", "year": 1985, "rating": 6.3, "votes": 74476, "running_times": 7860 },
{ "title": "A Walk Among the Tombstones", "year": 2014, "rating": 6.5, "votes": 96762, "running_times": 6840 },
{ "title": "A Walk in the Clouds", "year": 1995, "rating": 6.7, "votes": 26854, "running_times": 6120 },
{ "title": "A Walk in the Woods", "year": 2015, "rating": 6.3, "votes": 19128, "running_times": 6240 },
{ "title": "A Walk to Remember", "year": 2002, "rating": 7.4, "votes": 176490, "running_times": 6060 },
{ "title": "A Wednesday", "year": 2008, "rating": 8.3, "votes": 56214, "running_times": 6240 },
{ "title": "A Woman Under the Influence", "year": 1974, "rating": 8.2, "votes": 16018, "running_times": 9300 },
{ "title": "A.C.O.D.", "year": 2013, "rating": 5.7, "votes": 11540, "running_times": 5280 },
{ "title": "ARQ", "year": 2016, "rating": 6.4, "votes": 22206, "running_times": 5280 },
{ "title": "ATM", "year": 2012, "rating": 4.7, "votes": 20365, "running_times": 5400 },
{ "title": "AVP: Alien vs. Predator", "year": 2004, "rating": 5.6, "votes": 159110, "running_times": 6540 },
{ "title": "AVPR: Aliens vs Predator - Requiem", "year": 2007, "rating": 4.7, "votes": 101047, "running_times": 6120 }];
let movieCount = moview.filter((movie) => {
    if (movie.year >= 1980 && movie.year <= 1989) {
        console.log(movie.title);
        return true
    }
})
let newMovie = moview.slice(0, moview.length);
newMovie.forEach((movie) => {
    if (movie.rating >= 7) {
        tagRate = "Good"
    } else if
        (movie.rating >= 4 && movie.rating < 7) {
        tagRate = "Average"
    } else if (movie.rating < 4) { tagRate = "Bad" }
    movie.tag = tagRate
    //    console.log(movie.tag)
}
);
const ratingFunc = function (mov) {
    if (mov.rating >= 6) {
        return true
    }
}
let movieRatedHigherSix = moview.filter(ratingFunc)
for (i = 0; i < movieRatedHigherSix.length; i++) {
    console.log(movieRatedHigherSix[i].rating)
}
const mapFunc = function (mov) {
    //   delete mov.title;
    delete mov.year;
    delete mov.running_times;
    delete mov.votes;
    delete mov.tag;
    return mov
}
let mapMovieRatedHigherSix = movieRatedHigherSix.map(mapFunc)
let selectMovie = moview.filter((movie) => {
    let textSelect = movie.title;
    if (textSelect.indexOf("The") || textSelect.indexOf('dog') || textSelect.indexOf('who') ||
        textSelect.indexOf('is') || textSelect.indexOf('not') || textSelect.indexOf('a')
        || textSelect.indexOf('man')) {
        console.log(textSelect);
        return true;
    };
});
let averageMovieRatingNumber = 0;
let sumMovieRating = 0;
let averageRatingMovie = moview.reduce((total, amount, index, array) => {
    total.rating += amount.rating;
    if (index === array.length - 1) {
        averageMovieRatingNumber = total.rating / array.length;
        return total / array.length;
    } else {
        sumMovieRating = total.rating;
        return total;
    }
})
let newMovie2 = moview.slice(0, moview.length);
newMovie2.forEach((movie) => {
    if (movie.rating >= 7) {
        tagRate = "Good"
    } else if
        (movie.rating >= 4 && movie.rating < 7) {
        tagRate = "Average"
    } else if (movie.rating < 4) { tagRate = "Bad" }
    movie.tag = tagRate
}
);
let iAverage = 0;
let iBad = 0;
let iGood = 0;
let objectMovie = {}
let selectedMovie = newMovie2.reduce((tot, amount) => {
    if (amount.tag === "Average") {
        console.log(amount.tag)
        iAverage = iAverage + 1;
    }
    else if (amount.tag === "Bad") {
        console.log(amount.tag)
        iBad = iBad + 1;
    }
    else if (amount.tag === "Good") {
        console.log(amount.tag)
        iGood = iGood + 1;
    }
    objectMovie = {
        Good: iGood,
        Average: iAverage,
        Bad: iBad
    }
    return objectMovie;
}, 0)
console.log(objectMovie.Good);
console.log(objectMovie.Bad);
console.log(objectMovie.Average);