let lngForm = document.getElementById("lngForm");
let ulLngInput = document.getElementById("ulLng");
let button = document.querySelector('button');
let latForm = document.getElementById("latForm");
let ulLatInput = document.getElementById("ulLat");
let lngInput = document.getElementById('lngMap');
let latInput = document.getElementById('latMap');
let latArrays =[];
let lngArrays = [];
//localStorage.clear();
// let lngArrays = localStorage.getItem('lngMaps') ? JSON.parse(localStorage.getItem('lngMaps')) : [];
// let latArrays = localStorage.getItem('latMaps') ? JSON.parse(localStorage.getItem('latMaps')) : [];
lngArrays = JSON.parse(localStorage.getItem('lngMaps'));
if (lngArrays!==null && lngArrays.length>1){
  let dataX = JSON.parse(localStorage.getItem('lngMaps'));
  dataX.forEach(item => {
 let li = document.createElement('li');
  li.textContent = item;
  ulLngInput.appendChild(li);
  });
} else{
lngArrays = [];
}
latArrays = JSON.parse(localStorage.getItem('latMaps'));
if (latArrays!==null && latArrays.length>1){
  let dataY = JSON.parse(localStorage.getItem('latMaps'));
  dataY.forEach(item => {
    let li = document.createElement('li');
    li.textContent =item;
    ulLatInput.appendChild(li);
  });
}else{
latArrays = [];
}
let liMakerLng = (text) => {
  let li = document.createElement('li');
  li.textContent = text;
  ulLngInput.appendChild(li);
}
let liMakerLat = (text) => {
  let li = document.createElement('li');
  li.textContent = text;
  ulLatInput.appendChild(li);
}
lngForm.addEventListener('submit', function (e) {
  e.preventDefault();
  lngArrays.push(lngInput.value);
  localStorage.setItem('lngMaps', JSON.stringify(lngArrays));
  liMakerLng(lngInput.value);
  lngInput.value = "";
});
latForm.addEventListener('submit', function (e) {
  e.preventDefault();
  latArrays.push(latInput.value);
  localStorage.setItem('latMaps', JSON.stringify(latArrays));
  liMakerLat(latInput.value);
  latInput.value = "";
});
button.addEventListener('click', function () {
  window.localStorage.clear()
  while (ulLngInput.firstChild) {
    ulLngInput.removeChild(ulLngInput.firstChild);
  }
  lngInput.value = "";
  while (ulLatInput.firstChild) {
    ulLatInput.removeChild(ulLatInput.firstChild);
  }
  latInput.value = "";
  latArrays = [];
  lngArrays = [];
  localStorage.clear()
});
let currentPosition = false;
let langValue;
let longValue;
let iconImage;
let labelCity = document.createElement('label');
labelCity.setAttribute('class', 'labelCity');
let labelForCityName = document.createTextNode('Name of City :')
labelCity.appendChild(labelForCityName);
document.body.appendChild(labelCity);
labelCity.style.position = "absolute"
labelCity.style.left = "10px";
labelCity.style.top = "95px";
labelCity.style.width = "110px";
labelCity.style.height = "30px";
labelCity.style.fontSize = "14px";
labelCity.style.fontWeight = "900";
let cityName = document.createElement('input');
cityName.setAttribute('id', "cityName")
document.body.appendChild(cityName);
cityName.textContent = "copenhagen";
document.getElementById("cityName").value = "copenhagen"
cityName.style.position = "absolute"
cityName.style.left = "127px";
cityName.style.top = "95px";
cityName.style.width = "110px";
cityName.style.height = "14px";
cityName.style.fontSize = "16px";
///temperature 
let temperature = document.createElement('label');
temperature.setAttribute('id', 'temperature');
let labelTemperature = document.createTextNode('temperature(\'C:)')
temperature.appendChild(labelTemperature);
document.body.appendChild(temperature);
let temperatureTag = document.createElement('input');
temperatureTag.setAttribute('id', "temperatureTag")
document.body.appendChild(temperatureTag);
temperature.style.position = "absolute"
temperature.style.left = "20px";
temperature.style.top = "130px";
temperature.style.width = "110px";
temperature.style.height = "30px";
//temperature.style.backgroundColor = 'Tan';
temperature.style.fontSize = "14px";
temperature.style.fontWeight = "900";
temperatureTag.style.position = "absolute"
temperatureTag.style.left = "136px";
temperatureTag.style.top = "130px";
temperatureTag.style.width = "110px";
temperatureTag.style.height = "14px";
//temperature.style.backgroundColor = 'Tan';
temperatureTag.style.fontSize = "16px";
//pressure
let pressure = document.createElement('label');
pressure.setAttribute('id', 'pressure');
let labelpressure = document.createTextNode('pressure:')
pressure.appendChild(labelpressure);
document.body.appendChild(pressure);
let pressureTag = document.createElement('input');
pressureTag.setAttribute('id', "pressureTag")
document.body.appendChild(pressureTag);
pressure.style.position = "absolute"
pressure.style.left = "20px";
pressure.style.top = "155px";
pressure.style.width = "110px";
pressure.style.height = "30px";
//pressure.style.backgroundColor = 'Tan';
pressure.style.fontSize = "16px";
pressure.style.fontWeight = "900";
pressureTag.style.position = "absolute"
pressureTag.style.left = "136px";
pressureTag.style.top = "155px";
pressureTag.style.width = "110px";
pressureTag.style.height = "14px";
//pressure.style.backgroundColor = 'Tan';
pressureTag.style.fontSize = "14px";
//humidity
let humidity = document.createElement('label');
humidity.setAttribute('id', 'humidity');
let labelhumidity = document.createTextNode('humidity:')
humidity.appendChild(labelhumidity);
document.body.appendChild(humidity);
let humidityTag = document.createElement('input');
humidityTag.setAttribute('id', "humidityTag")
document.body.appendChild(humidityTag);
humidity.style.position = "absolute"
humidity.style.left = "20px";
humidity.style.top = "180px";
humidity.style.width = "110px";
humidity.style.height = "30px";
//humidity.style.backgroundColor = 'Tan';
humidity.style.fontSize = "16px";
humidity.style.fontWeight = "900";
humidityTag.style.position = "absolute"
humidityTag.style.left = "136px";
humidityTag.style.top = "180px";
humidityTag.style.width = "110px";
humidityTag.style.height = "14px";
//humidity.style.backgroundColor = 'Tan';
humidityTag.style.fontSize = "14px";
//wind speed
let windspeed = document.createElement('label');
windspeed.setAttribute('id', 'windspeed');
let labelwindspeed = document.createTextNode('windspeed(m/s):')
windspeed.appendChild(labelwindspeed);
document.body.appendChild(windspeed);
let windspeedTag = document.createElement('input');
windspeedTag.setAttribute('id', "windspeedTag")
document.body.appendChild(windspeedTag);
windspeed.style.position = "absolute"
windspeed.style.left = "20px";
windspeed.style.top = "205px";
windspeed.style.width = "110px";
windspeed.style.height = "30px";
//windspeed.style.backgroundColor = 'Tan';
windspeed.style.fontSize = "16px";
windspeed.style.fontWeight = "900";
windspeedTag.style.position = "absolute"
windspeedTag.style.left = "136px";
windspeedTag.style.top = "205px";
windspeedTag.style.width = "110px";
windspeedTag.style.height = "14px";
//windspeed.style.backgroundColor = 'Tan';
windspeedTag.style.fontSize = "14px";
//Latitude
let latitude = document.createElement('label');
latitude.setAttribute('id', 'latitude');
let labellatitude = document.createTextNode('latitude:')
latitude.appendChild(labellatitude);
document.body.appendChild(latitude);
let latitudeTag = document.createElement('input');
latitudeTag.setAttribute('id', "latitudeTag")
document.body.appendChild(latitudeTag);
latitude.style.position = "absolute"
latitude.style.left = "20px";
latitude.style.top = "230px";
latitude.style.width = "110px";
latitude.style.height = "30px";
//latitude.style.backgroundColor = 'Tan';
latitude.style.fontSize = "16px";
latitude.style.fontWeight = "900";
latitudeTag.style.position = "absolute"
latitudeTag.style.left = "136px";
latitudeTag.style.top = "230px";
latitudeTag.style.width = "110px";
latitudeTag.style.height = "14px";
//latitude.style.backgroundColor = 'Tan';
latitudeTag.style.fontSize = "14px";
//Longitude
let longitude = document.createElement('label');
longitude.setAttribute('id', 'longitude');
let labellongitude = document.createTextNode('longitude:')
longitude.appendChild(labellongitude);
document.body.appendChild(longitude);
let longitudeTag = document.createElement('input');
longitudeTag.setAttribute('id', "longitudeTag")
document.body.appendChild(longitudeTag);
longitude.style.position = "absolute"
longitude.style.left = "20px";
longitude.style.top = "255px";
longitude.style.width = "110px";
longitude.style.height = "30px";
//longitude.style.backgroundColor = 'Tan';
longitude.style.fontSize = "16px";
longitude.style.fontWeight = "900";
longitudeTag.style.position = "absolute"
longitudeTag.style.left = "136px";
longitudeTag.style.top = "255px";
longitudeTag.style.width = "110px";
longitudeTag.style.height = "14px";
//longitude.style.backgroundColor = 'Tan';
longitudeTag.style.fontSize = "14px";
//country
let country = document.createElement('label');
country.setAttribute('id', 'country');
let labelcountry = document.createTextNode('country:')
country.appendChild(labelcountry);
document.body.appendChild(country);
let countryTag = document.createElement('input');
countryTag.setAttribute('id', "countryTag")
document.body.appendChild(countryTag);
country.style.position = "absolute"
country.style.left = "20px";
country.style.top = "280px";
country.style.width = "110px";
country.style.height = "30px";
//country.style.backgroundColor = 'Tan';
country.style.fontSize = "16px";
country.style.fontWeight = "900";
countryTag.style.position = "absolute"
countryTag.style.left = "136px";
countryTag.style.top = "280px";
countryTag.style.width = "110px";
countryTag.style.height = "14px";
//country.style.backgroundColor = 'Tan';
countryTag.style.fontSize = "14px";
//get weather
let mainWeather = document.createElement('label');
mainWeather.setAttribute('id', 'mainWeather');
let labelmainWeather = document.createTextNode('weather:')
mainWeather.appendChild(labelmainWeather);
document.body.appendChild(mainWeather);
let mainWeatherTag = document.createElement('input');
mainWeatherTag.setAttribute('id', "mainWeatherTag")
document.body.appendChild(mainWeatherTag);
mainWeather.style.position = "absolute"
mainWeather.style.left = "20px";
mainWeather.style.top = "305px";
mainWeather.style.width = "110px";
mainWeather.style.height = "30px";
//mainWeather.style.backgroundColor = 'Tan';
mainWeather.style.fontSize = "16px";
mainWeather.style.fontWeight = "900";
mainWeatherTag.style.position = "absolute"
mainWeatherTag.style.left = "136px";
mainWeatherTag.style.top = "305px";
mainWeatherTag.style.width = "110px";
mainWeatherTag.style.height = "14px";
//mainWeather.style.backgroundColor = 'Tan';
mainWeatherTag.style.fontSize = "14px";
let getWeatherInfo = document.createElement("button");
getWeatherInfo.setAttribute("id", "getWeatherInfo");
let labelButton = document.createTextNode('get info');
// let imageCanvas =document.createElement('canvas');
// imageCanvas.setAttribute('id','imageCanvas');
getWeatherInfo.appendChild(labelButton);
document.body.appendChild(getWeatherInfo);
getWeatherInfo.style.position = "absolute"
getWeatherInfo.style.left = "1090px";
getWeatherInfo.style.top = "50px";
getWeatherInfo.style.width = "160px";
getWeatherInfo.style.height = "30px";
getWeatherInfo.style.backgroundColor = 'yellow';
getWeatherInfo.style.fontSize = "18px";
let getfromLonLng = document.createElement('button');
getfromLonLng.setAttribute('id', 'getfromLonLng');
let textOngetfromLonLng = document.createTextNode('get from Map');
getfromLonLng.appendChild(textOngetfromLonLng);
document.body.appendChild(getfromLonLng);
getfromLonLng.style.position = "absolute"
getfromLonLng.style.left = "700px";
getfromLonLng.style.top = "62px";
getfromLonLng.style.height = '30px';
getfromLonLng.style.fontSize = "18px";
getfromLonLng.style.backgroundColor = 'orange';
getfromLonLng.style.width = "180px";
document.getElementById('getfromLonLng').addEventListener('click', () => {
  let x1 = document.getElementById('latMap').value;
  let x2 = document.getElementById('lngMap').value;
  if (x1 !== "" && x2 !== "") {
    console.log('you click');
    langValue = x1;
    longValue = x2;
    addInfo();
  }
})
let url = '';
document.getElementById("getWeatherInfo").onclick = function () { letMe() };
function letMe() {
  let city = document.getElementById("cityName").value;
  url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=my_ap_id
  ";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      let a = JSON.stringify(myJson);
      console.log(JSON.stringify(myJson));
      console.log(typeof (a));
      let b = JSON.parse(a);
      console.log(typeof (b));
      console.log(b.weather);
      //console.log(b.weather[0].id);
      console.log(b.weather[0].main);
      console.log(b.weather[0].icon);
      iconImage = b.weather[0].icon;
      console.log(b.main.temp);
      console.log(b.main.pressure);
      console.log(b.main.humidity);
      console.log(b.wind.speed);
      console.log(b.coord.lon);
      console.log(b.coord.lat);
      console.log(b.sys.country);
      let kelvinTemperature = b.main.temp;
      let temperatureC = Number(kelvinTemperature) - 273.15;
      document.getElementById("temperatureTag").value = temperatureC.toFixed(1);
      document.getElementById("pressureTag").value = b.main.pressure;
      document.getElementById("humidityTag").value = b.main.humidity;
      document.getElementById("windspeedTag").value = b.wind.speed;
      document.getElementById("latitudeTag").value = b.coord.lat;
      document.getElementById("longitudeTag").value = b.coord.lon;
      document.getElementById("mainWeatherTag").value = b.weather[0].main;
      let shortCountryName = b.sys.country;
      let countryFullName = getCountryName(shortCountryName)
      document.getElementById("countryTag").value = countryFullName;
      // currentPosition = true;
      langValue = Number(b.coord.lat);
      longValue = Number(b.coord.lon);
      initMap();
    });
}
let showMap = document.createElement('button');
showMap.setAttribute('class', 'mapShowbyCode');
let textOnMap = document.createTextNode('current location');
showMap.appendChild(textOnMap);
document.body.appendChild(showMap);
//document.querySelector(".mapShowbyCode").onclick = function () {initMap()}; 
//////////////////////////////////////
document.querySelector(".mapShowbyCode").onclick = function () { initMapx() };
document.querySelector(".mapShowbyCode").onclick = function () { initMapf() };
function initMapf() {
  let cityName;
  if ("geolocation" in navigator === true) {
    console.log("geolocation is available");
  } else {
    console.log("geolocation is not available");
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude, position.coords.longitude);
    let a = position.coords.latitude;
    let b = position.coords.longitude;
    langValue = position.coords.latitude;
    longValue = position.coords.longitude;
    console.log(a);
    console.log(b);
    var options = {
      zoom: 14,
      center: {
        lat: a,
        lng: b
      }
    };
    //add map
    var map = new
      google.maps.Map(document.getElementById('map'), options);
    google.maps.event.addListener(map, 'click', function (event) {
      document.getElementById('latMap').value = event.latLng.lat();
      document.getElementById('lngMap').value = event.latLng.lng();
    });
    //add markers
    var marker = new
      google.maps.Marker({
        position: { lat: a, lng: b },
        map: map,
        //  icon:'https://img.icons8.com/color/2x/map-pin.png'
        icon: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Flag-3-Right-Azure-icon.png'
      })
    var infoWindow = new google.maps.InfoWindow({
      content: cityName
    });
    marker.addListener('click', function () {
      infoWindow.open(map, marker);
    });
  });
  addInfo();
};
function addInfo() {
  url = "http://api.openweathermap.org/data/2.5/weather?" + "lat=" + langValue + "&" + "lon=" + longValue + "&APPID=my_ap_id";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      let a = JSON.stringify(myJson);
      console.log(JSON.stringify(myJson));
      console.log(typeof (a));
      let b = JSON.parse(a);
      console.log(typeof (b));
      console.log(b.weather);
      //console.log(b.weather[0].id);
      console.log(b.weather[0].main);
      console.log(b.weather[0].icon);
      iconImage = b.weather[0].icon;
      console.log(b.main.temp);
      console.log(b.main.pressure);
      console.log(b.main.humidity);
      console.log(b.wind.speed);
      console.log(b.coord.lon);
      console.log(b.coord.lat);
      console.log(b.sys.country);
      let kelvinTemperature = b.main.temp;
      let temperatureC = Number(kelvinTemperature) - 273.15;
      document.getElementById("temperatureTag").value = temperatureC.toFixed(1);
      document.getElementById("pressureTag").value = b.main.pressure;
      document.getElementById("humidityTag").value = b.main.humidity;
      document.getElementById("windspeedTag").value = b.wind.speed;
      document.getElementById("latitudeTag").value = b.coord.lat;
      document.getElementById("longitudeTag").value = b.coord.lon;
      document.getElementById("mainWeatherTag").value = b.weather[0].main;
      document.getElementById("cityName").value = b.name;
      let shortCountryName = b.sys.country;
      let countryFullName = getCountryName(shortCountryName)
      document.getElementById("countryTag").value = countryFullName;
      imageShow();
    });
}
//////////////////////////////////////
function initMap() {
  if ("geolocation" in navigator === true) {
    console.log("geolocation is available")
    var options = {
      zoom: 14,
      center: {
        lat: langValue,
        lng: longValue
      }
    };
    var map = new
      google.maps.Map(document.getElementById('map'), options);
    google.maps.event.addListener(map, 'click', function (event) {
      document.getElementById('latMap').value = event.latLng.lat();
      document.getElementById('lngMap').value = event.latLng.lng();
    });
  }
  imageShow();
};
function imageShow() {
  let imageWeather = document.createElement('img');
  imageWeather.setAttribute('id', 'imageCanvas');
  //imageWeather.src = "images/"+imageNames[0];
  imageWeather.src = "http://openweathermap.org/img/w/" + iconImage + ".png";
  imageWeather.width = 150;
  //document.body.appendChild(imageWeather);
  document.body.appendChild(imageWeather);
}
var isoCountries = {
  'AF': 'Afghanistan',
  'AX': 'Aland Islands',
  'AL': 'Albania',
  'DZ': 'Algeria',
  'AS': 'American Samoa',
  'AD': 'Andorra',
  'AO': 'Angola',
  'AI': 'Anguilla',
  'AQ': 'Antarctica',
  'AG': 'Antigua And Barbuda',
  'AR': 'Argentina',
  'AM': 'Armenia',
  'AW': 'Aruba',
  'AU': 'Australia',
  'AT': 'Austria',
  'AZ': 'Azerbaijan',
  'BS': 'Bahamas',
  'BH': 'Bahrain',
  'BD': 'Bangladesh',
  'BB': 'Barbados',
  'BY': 'Belarus',
  'BE': 'Belgium',
  'BZ': 'Belize',
  'BJ': 'Benin',
  'BM': 'Bermuda',
  'BT': 'Bhutan',
  'BO': 'Bolivia',
  'BA': 'Bosnia And Herzegovina',
  'BW': 'Botswana',
  'BV': 'Bouvet Island',
  'BR': 'Brazil',
  'IO': 'British Indian Ocean Territory',
  'BN': 'Brunei Darussalam',
  'BG': 'Bulgaria',
  'BF': 'Burkina Faso',
  'BI': 'Burundi',
  'KH': 'Cambodia',
  'CM': 'Cameroon',
  'CA': 'Canada',
  'CV': 'Cape Verde',
  'KY': 'Cayman Islands',
  'CF': 'Central African Republic',
  'TD': 'Chad',
  'CL': 'Chile',
  'CN': 'China',
  'CX': 'Christmas Island',
  'CC': 'Cocos (Keeling) Islands',
  'CO': 'Colombia',
  'KM': 'Comoros',
  'CG': 'Congo',
  'CD': 'Congo, Democratic Republic',
  'CK': 'Cook Islands',
  'CR': 'Costa Rica',
  'CI': 'Cote D\'Ivoire',
  'HR': 'Croatia',
  'CU': 'Cuba',
  'CY': 'Cyprus',
  'CZ': 'Czech Republic',
  'DK': 'Denmark',
  'DJ': 'Djibouti',
  'DM': 'Dominica',
  'DO': 'Dominican Republic',
  'EC': 'Ecuador',
  'EG': 'Egypt',
  'SV': 'El Salvador',
  'GQ': 'Equatorial Guinea',
  'ER': 'Eritrea',
  'EE': 'Estonia',
  'ET': 'Ethiopia',
  'FK': 'Falkland Islands (Malvinas)',
  'FO': 'Faroe Islands',
  'FJ': 'Fiji',
  'FI': 'Finland',
  'FR': 'France',
  'GF': 'French Guiana',
  'PF': 'French Polynesia',
  'TF': 'French Southern Territories',
  'GA': 'Gabon',
  'GM': 'Gambia',
  'GE': 'Georgia',
  'DE': 'Germany',
  'GH': 'Ghana',
  'GI': 'Gibraltar',
  'GR': 'Greece',
  'GL': 'Greenland',
  'GD': 'Grenada',
  'GP': 'Guadeloupe',
  'GU': 'Guam',
  'GT': 'Guatemala',
  'GG': 'Guernsey',
  'GN': 'Guinea',
  'GW': 'Guinea-Bissau',
  'GY': 'Guyana',
  'HT': 'Haiti',
  'HM': 'Heard Island & Mcdonald Islands',
  'VA': 'Holy See (Vatican City State)',
  'HN': 'Honduras',
  'HK': 'Hong Kong',
  'HU': 'Hungary',
  'IS': 'Iceland',
  'IN': 'India',
  'ID': 'Indonesia',
  'IR': 'Iran, Islamic Republic Of',
  'IQ': 'Iraq',
  'IE': 'Ireland',
  'IM': 'Isle Of Man',
  'IL': 'Israel',
  'IT': 'Italy',
  'JM': 'Jamaica',
  'JP': 'Japan',
  'JE': 'Jersey',
  'JO': 'Jordan',
  'KZ': 'Kazakhstan',
  'KE': 'Kenya',
  'KI': 'Kiribati',
  'KR': 'Korea',
  'KW': 'Kuwait',
  'KG': 'Kyrgyzstan',
  'LA': 'Lao People\'s Democratic Republic',
  'LV': 'Latvia',
  'LB': 'Lebanon',
  'LS': 'Lesotho',
  'LR': 'Liberia',
  'LY': 'Libyan Arab Jamahiriya',
  'LI': 'Liechtenstein',
  'LT': 'Lithuania',
  'LU': 'Luxembourg',
  'MO': 'Macao',
  'MK': 'Macedonia',
  'MG': 'Madagascar',
  'MW': 'Malawi',
  'MY': 'Malaysia',
  'MV': 'Maldives',
  'ML': 'Mali',
  'MT': 'Malta',
  'MH': 'Marshall Islands',
  'MQ': 'Martinique',
  'MR': 'Mauritania',
  'MU': 'Mauritius',
  'YT': 'Mayotte',
  'MX': 'Mexico',
  'FM': 'Micronesia, Federated States Of',
  'MD': 'Moldova',
  'MC': 'Monaco',
  'MN': 'Mongolia',
  'ME': 'Montenegro',
  'MS': 'Montserrat',
  'MA': 'Morocco',
  'MZ': 'Mozambique',
  'MM': 'Myanmar',
  'NA': 'Namibia',
  'NR': 'Nauru',
  'NP': 'Nepal',
  'NL': 'Netherlands',
  'AN': 'Netherlands Antilles',
  'NC': 'New Caledonia',
  'NZ': 'New Zealand',
  'NI': 'Nicaragua',
  'NE': 'Niger',
  'NG': 'Nigeria',
  'NU': 'Niue',
  'NF': 'Norfolk Island',
  'MP': 'Northern Mariana Islands',
  'NO': 'Norway',
  'OM': 'Oman',
  'PK': 'Pakistan',
  'PW': 'Palau',
  'PS': 'Palestinian Territory, Occupied',
  'PA': 'Panama',
  'PG': 'Papua New Guinea',
  'PY': 'Paraguay',
  'PE': 'Peru',
  'PH': 'Philippines',
  'PN': 'Pitcairn',
  'PL': 'Poland',
  'PT': 'Portugal',
  'PR': 'Puerto Rico',
  'QA': 'Qatar',
  'RE': 'Reunion',
  'RO': 'Romania',
  'RU': 'Russian Federation',
  'RW': 'Rwanda',
  'BL': 'Saint Barthelemy',
  'SH': 'Saint Helena',
  'KN': 'Saint Kitts And Nevis',
  'LC': 'Saint Lucia',
  'MF': 'Saint Martin',
  'PM': 'Saint Pierre And Miquelon',
  'VC': 'Saint Vincent And Grenadines',
  'WS': 'Samoa',
  'SM': 'San Marino',
  'ST': 'Sao Tome And Principe',
  'SA': 'Saudi Arabia',
  'SN': 'Senegal',
  'RS': 'Serbia',
  'SC': 'Seychelles',
  'SL': 'Sierra Leone',
  'SG': 'Singapore',
  'SK': 'Slovakia',
  'SI': 'Slovenia',
  'SB': 'Solomon Islands',
  'SO': 'Somalia',
  'ZA': 'South Africa',
  'GS': 'South Georgia And Sandwich Isl.',
  'ES': 'Spain',
  'LK': 'Sri Lanka',
  'SD': 'Sudan',
  'SR': 'Suriname',
  'SJ': 'Svalbard And Jan Mayen',
  'SZ': 'Swaziland',
  'SE': 'Sweden',
  'CH': 'Switzerland',
  'SY': 'Syrian Arab Republic',
  'TW': 'Taiwan',
  'TJ': 'Tajikistan',
  'TZ': 'Tanzania',
  'TH': 'Thailand',
  'TL': 'Timor-Leste',
  'TG': 'Togo',
  'TK': 'Tokelau',
  'TO': 'Tonga',
  'TT': 'Trinidad And Tobago',
  'TN': 'Tunisia',
  'TR': 'Turkey',
  'TM': 'Turkmenistan',
  'TC': 'Turks And Caicos Islands',
  'TV': 'Tuvalu',
  'UG': 'Uganda',
  'UA': 'Ukraine',
  'AE': 'United Arab Emirates',
  'GB': 'United Kingdom',
  'US': 'United States',
  'UM': 'United States Outlying Islands',
  'UY': 'Uruguay',
  'UZ': 'Uzbekistan',
  'VU': 'Vanuatu',
  'VE': 'Venezuela',
  'VN': 'Viet Nam',
  'VG': 'Virgin Islands, British',
  'VI': 'Virgin Islands, U.S.',
  'WF': 'Wallis And Futuna',
  'EH': 'Western Sahara',
  'YE': 'Yemen',
  'ZM': 'Zambia',
  'ZW': 'Zimbabwe'
};
function getCountryName(countryCode) {
  if (isoCountries.hasOwnProperty(countryCode)) {
    return isoCountries[countryCode];
  } else {
    return countryCode;
  }
}
// let labelradio1 = document.createElement('label');
// labelradio1.setAttribute('class', 'labelCity');
// let labelForradioName1 = document.createTextNode('Current Location:')
// labelradio1.appendChild(labelForradioName1);
// document.body.appendChild(labelradio1);
// labelradio1.style.position = "absolute"
// labelradio1.style.left = "10px";
// labelradio1.style.top = "55px";
// labelradio1.style.width = "110px";
// labelradio1.style.height = "30px";
// labelradio1.style.fontSize = "14px";
// labelradio1.style.fontWeight = "900";
// var radioInput1 = document.createElement('input');
// radioInput1.setAttribute('type', 'radio');
// radioInput1.setAttribute('id', 'radioInput1');
// document.body.appendChild(radioInput1);
// radioInput1.style.position = "absolute"
// radioInput1.style.left = "127px";
// radioInput1.style.top = "55px";
// radioInput1.style.width = "110px";
// radioInput1.style.height = "30px";
// document.getElementById("radioInput1").addEventListener('click', () => {
//   currentPosition = true;
//   document.getElementById("radioInput2").checked = false;
//   //console.log(this.value);
// })
// let labelradio2 = document.createElement('label');
// labelradio2.setAttribute('class', 'labelCity');
// let labelForradioName2 = document.createTextNode("Other Location:")
// labelradio2.appendChild(labelForradioName2);
// document.body.appendChild(labelradio2);
// labelradio2.style.position = "absolute"
// labelradio2.style.left = "10px";
// labelradio2.style.top = "25px";
// labelradio2.style.width = "110px";
// labelradio2.style.height = "30px";
// labelradio2.style.fontSize = "14px";
// labelradio2.style.fontWeight = "900";
// var radioInput2 = document.createElement('input');
// radioInput2.setAttribute('type', 'radio');
// radioInput2.setAttribute('id', 'radioInput2');
// document.body.appendChild(radioInput2);
// radioInput2.style.position = "absolute"
// radioInput2.style.left = "127px";
// radioInput2.style.top = "25px";
// radioInput2.style.width = "110px";
// radioInput2.style.height = "30px";
// document.getElementById("radioInput2").addEventListener('click', () => {
//   currentPosition = false;
//   //console.log(this.value);
//   document.getElementById("radioInput1").checked = false;
// })