$(document).ready(function() {
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var favThings = [$("#input1").val(), $("#input2").val(), $("#input3").val(), $("#input4").val(), $("#input5").val()]
    var favBook = favThings[1];
    var favMovie = favThings[0];
    var favAnimal = favThings[2];
    var newThings = [];
    newThings.push(favBook);
    newThings.push(favMovie);
    newThings.push(favAnimal);
    $("#hidden1").text(newThings[0]);
    $("#hidden2").text(newThings[1]);
    $("#hidden3").text(newThings[2]);
    $("#hidden-things").show();
    $("#input-form").hide();
  });
});
