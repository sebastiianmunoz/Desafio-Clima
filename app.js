// COSUMIENDO TODA LA DATA

// $('#boton').on("click", function() {
//   var url = 'https://jsonplaceholder.typicode.com';

//   var id = parseInt(Math.random() * 100);

//   $.ajax({
//     url: url + '/posts/',
//     method: 'GET'
//   }).then(function(data) {
//     data.map(function(row){
// $('body').append('<H2>'+row.title+'</H2>');
//     })
//     });
// });


// COSUMIENDO ubicacion etapa 1


// $(document).ready(function(){

// var url='https://api.darksky.net/forecast/';
// var key='fb7c681ff52912ff060676bb1abdc041';
// var coords ={
// scl:'-33.4488897,-70.6692655',
// ccp:'-36.8270169,-73.0503189'
// }
// $('#select').on('change', function(){
//   $.ajax({
//     url : url+key+'/'+coords['scl'],
//    method: 'GET'
//    }).then(function(data) {
//     console.log(data)
//     });
// })
// });

// COSUMIENDO ubicacion etapa 2

// $(document).ready(function(){

//   var url='https://api.darksky.net/forecast/';

//   var key='fb7c681ff52912ff060676bb1abdc041';
//   var coords ={
//   scl:'-33.4488897,-70.6692655',
//   ccp:'-36.8270169,-73.0503189'
//   };

//   var queryParams=  ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','units=auto']

//   $('#select').on('change', function(){
//     $.ajax({
//       url : url+key+'/'+coords[$(this).val()]+'?'+queryParams[0]+'&'+queryParams[1]+'&'+queryParams[2],
//      method: 'GET'
//      }).then(function(data) {
//       console.log(data)
//       });
//   })
//   });

  // COSUMIENDO ubicacion etapa 3

// $(document).ready(function(){

//   var url='https://api.darksky.net/forecast/';

//   var key='fb7c681ff52912ff060676bb1abdc041';
//   var coords ={
//   scl:'-33.4488897,-70.6692655',
//   ccp:'-36.8270169,-73.0503189'
//   };

//   var queryParams=  ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','units=auto']

//   $('#select').on('change', function(){
//     $.ajax({
//       url : url+key+'/'+coords[$(this).val()]+'?'+queryParams[0]+'&'+queryParams[1]+'&'+queryParams[2],
//      method: 'GET'
//      }).then(function(data) {
//       console.log(data)
//       $('#resumen').text( paseInt(data.currently.temperature)+'º' + data.currently.summary);
//       $('#sensacion').text( data.currently.apparentTemperature+'º');
//       $('#probabilidad').text( paseInt(data.currently.precipProbability) *100 + '%');
//       $('#humedad').text( paseInt(data.currently.humidity) *100 + '%');
//       });
//   })
//   });

  
  // COSUMIENDO ubicacion etapa 4

// $(document).ready(function(){

//   var url='https://crossorigin.me/https://api.darksky.net/forecast/';

//   var key='fb7c681ff52912ff060676bb1abdc041';
//   var coords ={
//   scl:'-33.4488897,-70.6692655',
//   ccp:'-36.8270169,-73.0503189'
//   };

//   var queryParams=  ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','units=auto']

// var images = {
//   'clear-day':'https://previews.123rf.com/images/dmytro121287/dmytro1212871306/dmytro121287130600001/20278016-iconos-del-tiempo-ilustraci%C3%B3n-tiempo-soleado-.jpg',
//   'rain':'data:image/jpeg;base64,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'
// }

//   $('#select').on('change', function(){
//     $.ajax({
//       url : url+key+'/'+coords[$(this).val()]+'?'+queryParams[0]+'&'+queryParams[1]+'&'+queryParams[2],
//      method: 'GET'
//      }).then(function(data) {
//       console.log(data)
//       $('#resumen').text( paseInt(data.currently.temperature)+'º' + data.currently.summary);
//       $('#sensacion').text( data.currently.apparentTemperature+'º');
//       $('#probabilidad').text( paseInt(data.currently.precipProbability) *100 + '%');
//       $('#humedad').text( paseInt(data.currently.humidity) *100 + '%');
//       $('img-responsive').atrr('src',image[data.currently.icon]);
//       });
//   })
//   });


   // COSUMIENDO ubicacion etapa 5

var mymap ="";
var coords="";
var resumen= $('#resumen');
var sensacion= $('#sensacion');
var probabilidad= $('#probabilidad');
var humedad=  $('#humedad');
var imagen= $('.img-responsive');
var escondido= $('#escondido');

 var url='https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';

  var key='fb7c681ff52912ff060676bb1abdc041';
  coords ={
  scl:'-33.4488897,-70.6692655',
  ccp:'-36.8270169,-73.0503189'
  };

$(document).ready(function(){
generarMapa()

var queryParams=  ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','units=auto']
var images = {
  'clear-day':'https://previews.123rf.com/images/dmytro121287/dmytro1212871306/dmytro121287130600001/20278016-iconos-del-tiempo-ilustraci%C3%B3n-tiempo-soleado-.jpg',
  'rain':'data:image/jpeg;base64,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'
}

  $('#select').on('change', function(){
    $.ajax({
      url : url+key+'/'+coords[$(this).val()]+'?'+queryParams[0]+'&'+queryParams[1]+'&'+queryParams[2],
     method: 'GET'
     }).then(function(data) {
      // console.log(data)
      // resumen.text("dssadsds")
      resumen.text(parseInt(data.currently.temperature)+'º' + data.currently.summary);
      sensacion.text( data.currently.apparentTemperature+'º');
      probabilidad.text( parseInt(data.currently.precipProbability) *100 + '%');
      humedad.text( parseInt(data.currently.humidity) *100 + '%');
      imagen.attr('src',images[data.currently.icon]);
console.log(coords[$(this).val()])
      changeMarkerPosition(coords[$(this).val()]);






      //  escondido.removeAtrr('hidden');
      });
  })
function generarMapa(){
  var mymap = L.map('mapid').setView([-33.4488897,-70.6692655], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiY2FtY3Jpc3RpYW4iLCJhIjoiY2pveXl2eW0xMm9pZDN0cGljMGR0azM5YiJ9.HuNeOJp4A_sfgyJlU6CIVg'
  }).addTo(mymap);
  
  var marker = L.marker([-33.4488897,-70.6692655]).addTo(mymap);

}

function changeMarkerPosition(coords1){
  console.log(coords1)
  var latitud = coords1.split(",")[0];
  var longitud =coords1.split(",")[1];
  mymap.panTo(new L.LatLng [latitud,longitud]);
  L.marker([latitud,longitud]).addTo(mymap);

}
});