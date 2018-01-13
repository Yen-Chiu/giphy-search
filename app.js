var animalArr = ["kangaroo", "tiger", "horse", "monkey", "elephant", "puppies", "kitten", "koala bear", "lion", "rabbit"];
//for loop to create buttons for existing array
function createButton(){
  $(".create-button").empty();

  for (let i = 0; i < animalArr.length; i++){
    var newBtn = $("<button>");
    newBtn.attr("data-animal", animalArr[i]);
    newBtn.addClass("btn");
    newBtn.text(animalArr[i]);
    $(".create-button").append(newBtn);
  }
}
//new search and push into array
$("#new-search").on("click", function(event){
    event.preventDefault();
    var newAnimal = $("#search-input").val().trim();
    animalArr.push(newAnimal);
    console.log(newAnimal);
    createButton();
});

//initiate API and retrieve information
function initiateApi(){

  var animal = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=7lR48unx4YJHpS2uhYKm1AQu181KLmAr&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
console.log(response);
  var resultUrl = response.data;
//for loop to iterate dynamic element to display images
  for (let i = 0; i < 10; i++){
      var animalImage = $("<img>");
      var sourceTag = animalImage.attr("src", resultUrl[i].images.fixed_height_still.url);
      animalImage.attr('data-still', resultUrl[i].images.fixed_height_still.url);
      animalImage.attr('data-animate', resultUrl[i].images.fixed_height_still.url);
      animalImage.attr('data-state', 'still');
      animalImage.attr('class', 'gif');
      $(".image").append(animalImage, sourceTag);
};
});
};
$(document).on('click', '.btn', initiateApi);
createButton();
