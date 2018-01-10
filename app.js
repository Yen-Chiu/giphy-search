//pseudo code
//giphy API access
var userSelect = 5;
var animalArr = ["bird", "cat", "dog", "elephant", "fowl", "goat"];
//var api = "http://api.giphy.com/v1/gifs/search";
//var apikey = "?api_key=7lR48unx4YJHpS2uhYKm1AQu181KLmAr";
//var query = "&q=animalArr[userSelect]";
  for (let i = 0; i < animalArr.length; i++){
      var button = $('<button>');
      button.attr("type", 'button');
      button.attr("class", 'btn btn primary');
      button.attr("value", animalArr[i]);
      $('.button').append(button);
  }

$(".btn").on("click", function(){

  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=7lR48unx4YJHpS2uhYKm1AQu181KLmAr&q="+animalArr[userSelect];

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {

  for (let i = 0; i < 10; i++){
      var imageUrl = response.data[i].images.fixed_height_small_still.url;
      var catImage = $("<img>");
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");
        $(".images").append(catImage);
}
});
});
//buttons to target different animals
//a search button to add more animal categories
//these buttons are generated from JavaScript
//add a NEW button after the search category
//an array to hold different types of animal buttons
//push new search catagory into the Array

//retrieve Giphy information from API
//display result in HTML
