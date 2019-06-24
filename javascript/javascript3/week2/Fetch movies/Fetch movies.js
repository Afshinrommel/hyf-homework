let runningTimesArray = [];
let titleMovies = [];
let badMovies = [];
let yearMovies = [];
let yearMoviesSince2000 = [];
let titleMoviesSince2000 = [];
let selectedIndex = [];
let badMoviesArray = [];
let titleBadmovieSince = [];
const fetch = require("node-fetch");
let url = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/";
fetch(url).
    then(function (response) {
        console.log(response.status)
        console.log(response.body);
        return response.json();
    }).then(function (myJson) {
        let myObj = JSON.stringify(myJson);
        let myArray = JSON.parse(myObj);
        console.log(myArray);
        console.log(myArray[0]);
        for (i = 0; i < myArray.length; i++) {
            let runtimes = myArray[i].running_times;
            runningTimesArray.push(runtimes)
            titleMovies.push(myArray[i].title)
            yearMovies.push(myArray[i].year)
        }
        console.log(runningTimesArray.length);
        let titleLongMovie = [];
        let longMoviesArray = runningTimesArray.filter(calcLength);
        function calcLength(lengthFilm, ix) {
            if (lengthFilm >= 7000) {
                titleLongMovie.push(titleMovies[ix]);
                //console.log(titleMovies[ix]) 
                return true
            }
        }
        badMovies = titleMovies.filter(numberBadMovie);
        function numberBadMovie(filmName, ix) {
            //  console.log(titleMovies[ix])
            let res = filmName.toLocaleLowerCase();
            //let res2 = res.match(/ bad /);
            let res2 = res.match("bad" + " ")
            if (res2 !== null) {
                //console.log(titleMovies[ix])
                console.log(filmName);
                selectedIndex.push(ix);
                badMoviesArray.push(myArray[ix]);
                return true
            }
        }
        console.log(badMovies.length);
        yearMoviesSince2000 = badMoviesArray.filter(sinceTwoThousand);
        function sinceTwoThousand(film, ix) {
            let i = selectedIndex[ix]
            if (yearMovies[i] > 2000) {
                let xy = film.title;
                titleBadmovieSince.push(xy);
                return true
            }
        }
        console.log(yearMoviesSince2000.length);
    })