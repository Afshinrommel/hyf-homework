let housePrice ;
let volumeInMeters;
let gardenSizeInM2;
function calcVolumeInMeters(wide,deep,high){
    volumeInMeters =wide*deep*high;
    
    return volumeInMeters;
}
function housePric (volumeInMeters,gardenSizeInM2){
    housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
   
    return housePrice;
}
calcVolumeInMeters(8,10,10);
console.log( volumeInMeters);

housePric(volumeInMeters,100);
console.log(housePrice);
calcVolumeInMeters(5,11,8);
housePric(volumeInMeters,100);
console.log(housePrice);
