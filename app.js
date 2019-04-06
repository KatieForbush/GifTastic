//This is my API Key
var gifs = ["raccoons", "hippo", "Elephants"];

    for (var i = 0; i < gifs.length; i++) {
      generateBtn(gifs[i])
      // console.log(gifs[i]);
    }

function generateBtn(btnName){
  var a = $("<button>");
      a.addClass("pageGifs");
      a.attr("name", btnName);
      a.text(btnName);
      $("#buttons-view").prepend(a);
}

$(document).ready(function () {


  var APIkey = "P3UIZ1yUeYrYTRykaBiQYjoITyFbZoOL";

  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + APIkey;

  $.ajax({
    url: "https://api.giphy.com/v1/gifs/trending?api_key=C9oe21FaZr5JHjfQfF0o175Kjscx8dA2&tag=&rating=PG-13",
    method: "GET"
  }).then(function(response){
    responseFnctn(response)
  })

  $("#add-gif-type").on("click", function(event){
    event.preventDefault();
    var searchTerm = $("#Gif-input").val().trim()
    generateBtn(searchTerm);
    searchGifImg(searchTerm);
  })

  function searchGifImg (searchTerm){
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?api_key=C9oe21FaZr5JHjfQfF0o175Kjscx8dA2&q=${searchTerm}`,
      method: "GET"
    }).then(function(response){
      responseFnctn(response)
    })
  }

  function responseFnctn(response) {
    console.log(response);
    console.log("made it to resposneFnctn")
    for (var i = 0; i < 10; i++) {
      // console.log(response.data[i])
      console.log(response.data[i].title)
      var tempDiv = $("<img>");
      tempDiv.addClass("gifDiv");
      tempDiv.attr("src", response.data[i].images.fixed_height_small.url);
      tempDiv.attr("animateURL", response.data[i].images.fixed_height_small.url);
      tempDiv.attr("stillURL", response.data[i].images.fixed_height_small_still.url)
      tempDiv.attr("imgState", "animate")
      $("#gifDrop").prepend(tempDiv);
    }
    
  }


  $(document).on("click", ".pageGifs", function(event){
    event.preventDefault();
    var btnsearchTerm = $(this).text();
    console.log(btnsearchTerm);
    searchGifImg(btnsearchTerm);
  })

  $(document).on("click", ".gifDiv", function(event){
    event.preventDefault();
    if($(this).attr("imgState") === "animate"){
      let newSrc = $(this).attr("stillURL")
      $(this).attr("src", newSrc);
      $(this).attr("imgState", "still")
    } else{
      let newSrc = $(this).attr("animateURL");
      $(this).attr("src", newSrc);
      $(this).attr("imgState", "animate")
    }
  })

})

//darjeeling limited