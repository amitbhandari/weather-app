$(document).ready(function(){
   if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  var long;
  var lat;
    long = position.coords.longitude;
    lat = position.coords.latitude;
 //API URL with geolocation
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=12fb9231690c4b760c7b753f2134d825';
    console.log(api);
$.getJSON(api, function(data){
       var fTemp;
  var cTemp;
  var kTemp;
      var tempSwap=true;
    //JSON call for Open Weather API
   var weatherType= data.weather[0].description;
        kTemp = data.main.temp;
       var windSpeed= data.wind.speed;
    var city = data.name;
    //Temperture in Kelvin
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    //Temp in F
    //City name
    cTemp = (kTemp-273).toFixed(1);
      console.log(city);
     $("#city").html(city);
      $("#weatherType").html(weatherType);
      $("#fTemp").html(fTemp + " &#8457;");
      $("#fTemp").click(function(){
        if(tempSwap===false){
          $("#fTemp").html(fTemp + " &#8457;");
          tempSwap=true;
        }
        else{
          $("#fTemp").html(cTemp + " &#8451;");
          tempSwap=false;
        }
      });
windSpeed = (2.237*(windSpeed)).toFixed(1);
       $("#windSpeed").html(windSpeed + " mph");
    if(fTemp>80){
     $('body').css('background-color','rgb(251, 203, 147)');
    }
     else if(fTemp>70){
         $('body').css('background-color','rgb(46, 102, 168)');
     }
       else if(fTemp>60){
         $('body').css('background-color','rgb(12, 134, 172)');
     }
      else if(fTemp>50){
        $('body').css('background-color','rgb(168, 242, 240)');
      }
// wether icon
if(fTemp>80){
 $('#clouds').css('background-image','url(img/suny.svg)');
}
else if(fTemp>70){
 $('#clouds').css('background-image','url(img/raining.svg)');
}
else if(fTemp>60){
 $('#clouds').css('background-image','url(img/rain.svg)');
}
else if(fTemp>50){
 $('#clouds').css('background-image','url(img/snow.svg)');
}

if(fTemp>80){
 $('#mosam').text('Sunny');
}
else if(fTemp>70){
 $('#mosam').text('Cold');
}
else if(fTemp>60){
 $('#mosam').text('Colder');
}
else if(fTemp>50){
 $('#mosam').text('Coldest');
}
  });
  });
}
});

slider
$(".button-collapse").sideNav();
