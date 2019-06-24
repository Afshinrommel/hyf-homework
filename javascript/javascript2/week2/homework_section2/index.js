let clickMe = document.createElement('button');
clickMe.setAttribute('class','log');
let textOnLog = document.createTextNode('clickMe');
clickMe.appendChild(textOnLog);
document.body.appendChild(clickMe);
document.querySelector('.log').onclick = function(){
  console.log('you click me');
  alert('you click me');
};

let buttonClick = document.createElement('button'); 
buttonClick.setAttribute('class', 'example'); 
let textOnButton = document.createTextNode('calculate'); 
buttonClick.appendChild(textOnButton); 
document.body.appendChild(buttonClick); 
document.querySelector(".example").onclick = function () {
  var input = document.querySelector('.inputNumber'); 
//check if input is Number
let numberCheck = input.value;
let numCheck = parseInt(numberCheck);
if (isNaN(numCheck)===true){
alert('You forgot to enter number');
console.log('must input number');
}
  console.log('input changed to: ', input.value); 
  let divideByThree = false; 
  let divideByFive = false; 
  document.body.style.backgroundColor = "LightGreen"; 
  a = parseInt(input.value); 
  threeCallback(a); 
  fiveCallback(a); 
  function threeCallback(a) {
    divideByThree = false; 
    let resultDivideByThree = a % 3; 
    if (resultDivideByThree === 0) {
      console.log("for " + a + " reminder of divide by 3 is equal to zero "); 
      divideByThree = true; 
      document.body.style.backgroundColor = "SlateBlue"; 
      //  dividedByThree.push(a);
    }; 
  }; 
  function fiveCallback(a) {
    divideByFive = false; 
    let resultDivideByFive = a % 5; 
    if (resultDivideByFive === 0) {
      console.log("for " + a + " reminder of divide by 5 is equal to zero "); 
      divideByFive = true; 
      document.body.style.backgroundColor = "Yellow"; 
      //  dividedByFive.push(a);
    }; 
  }; 
  if (divideByThree === true && divideByFive === true) {
    //  divideByFiveThree.push(myArray[index]);
    console.log("for " + a + " reminder of divide by 5 and 3 is equal to zero "); 
    alert("for " + a + " reminder of divide by 5 and 3 is equal to zero "); 
    document.body.style.backgroundColor = "DarkSlateGray"; 
  }; 
}; 
let inputText = document.createElement('INPUT'); 
inputText.setAttribute("value", "type number"); 
inputText.setAttribute("class", "inputNumber"); 
document.body.appendChild(inputText); 
document.body.style.backgroundColor = "LightGreen"; 
////////////////////////////
let showMap = document.createElement('button'); 
showMap.setAttribute('class', 'mapShowbyCode'); 
let textOnMap = document.createTextNode('show location'); 
showMap.appendChild(textOnMap); 
document.body.appendChild(showMap); 
document.querySelector(".mapShowbyCode").onclick = function () {initMap()}; 
function initMap() {
  let cityName; 
  $.ajax( {
    url:"https://geoip-db.com/jsonp",
jsonpCallback:"callback", 
    dataType:"jsonp", 
    success:function (location) {
      $('#country').html(location.country_name); 
      $('#state').html(location.state); 
      $('#city').html(location.city); 
      cityName = location.city
      $('#latitude').html(location.latitude); 
      $('#longitude').html(location.longitude); 
      $('#ip').html(location.IPv4); 
    }
  }); 
  if ("geolocation"in navigator === true) {
    console.log("geolocation is available"); 
  }else {
    console.log("geolocation is not available"); 
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude, position.coords.longitude); 
    let a = position.coords.latitude; 
    let b = position.coords.longitude; 
    //map options
    var options =  {
      zoom:14, 
      center: {
        lat:a, 
        lng:b
      }
    }; 
    //add map
    var map = new
      google.maps.Map(document.getElementById('map'), options); 
    //add markers
    var marker = new
      google.maps.Marker( {
        position: {lat:a, lng:b }, 
        map:map, 
        //  icon:'https://img.icons8.com/color/2x/map-pin.png'
        icon:'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Flag-3-Right-Azure-icon.png'
})
    var infoWindow = new google.maps.InfoWindow( {
      content:cityName
    }); 
    marker.addListener('click', function () {
      infoWindow.open(map, marker); 
    }); 
  }); 
}; 