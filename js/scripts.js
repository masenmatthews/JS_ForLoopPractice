$(document).ready(function() {
  var inputArray = [];

  $("#form-one").submit(function(event){
    var formInput = $("#music").val();
    inputArray.push(formInput);
    // console.log(inputArray);

    // after each submit, this code resets the form field
    this.reset();
    event.preventDefault();
  }); // first submit tag

  $("#form-two").submit(function(event){
    event.preventDefault();
    for (var index = 0; index < inputArray.length; index += 1) {
      // here, in the argument, "inputArray[index]" points to the value of inputArray for the current iteration
      $("#favoriteBands").append("<li>" + inputArray[index] + "</li>");
    }
    alert("This button worked");


  }); // second submit tag
}); // document tag
