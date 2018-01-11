$('button').on("click", function(){

  var result = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + result + "&api_key=7lR48unx4YJHpS2uhYKm1AQu181KLmAr";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {
console.log(response);

  for (let i = 0; i < 10; i++){
      var imageUrl = response.data[i].images.fixed_height_still.url;
      var newImage = $("<img>");
        newImage.attr("src", imageUrl);
        newImage.attr("alt", result);
        $(".images").prepend(newImage);
  }
  console.log(imageUrl);
});
});







  //var api = "http://api.giphy.com/v1/gifs/search";
  //var apikey = "?api_key=7lR48unx4YJHpS2uhYKm1AQu181KLmAr";
  //var query = "&q=animalArr[userSelect]";
/*  function button() {
      $(".button").empty();
var animalArr = ["dog", "tiger", "monkey"];
        for (let i = 0; i < animalArr.length; i++){
            var newButton = $('<button>');
                newButton.addClass("btn");
                newButton.attr("data-name", animalArr[i]);
                newButton.text(animalArr[i]);
                $('.button').append(newButton);
                console.log(animalArr[i]);
        };
  };


  button();
  //buttons to target different animals
  //a search button to add more animal categories
  //these buttons are generated from JavaScript
  //add a NEW button after the search category
  //an array to hold different types of animal buttons
  //push new search catagory into the Array

  //retrieve Giphy information from API
  //display result in HTML








//pseudo code
//giphy API access
*/
