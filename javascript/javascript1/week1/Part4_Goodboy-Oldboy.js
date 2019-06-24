let dogYear;
let dogYearFuture;
let dogYearOfBirth;
let shouldShowResultInDogYears=false;


    function agecalc (dogYearOfBirth,dogYearFuture,shouldShowResultInDogYears){
        if (shouldShowResultInDogYears==false){
        dogYear =  dogYearFuture- dogYearOfBirth;
        return  dogYear;
    }
    if (shouldShowResultInDogYears==true){
        dogYear =  (dogYearFuture- dogYearOfBirth)*10;
        return  dogYear;

}}

agecalc(1987,2012,false);
agecalc(1987,2012, true);
console.log( dogYear);


