//This is my API Key

$(document).ready(function(){


var APIkey = "P3UIZ1yUeYrYTRykaBiQYjoITyFbZoOL";

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + APIkey;

var gifs = ["Cats", "Dogs", "Elephants"];

$.ajax({
    url: "https://api.giphy.com/v1/gifs/trending?api_key=C9oe21FaZr5JHjfQfF0o175Kjscx8dA2&tag=&rating=PG-13",
    method: "GET"
  }).then(function(response){
    for(var i = 0; i < response.data.length; i++){
      console.log(response.data[i])
      var tempDiv = $("<img>").attr(response.data[i].embed_url)
      $("#gifDrop").append(tempDiv)
    }
     
    
  })


})
