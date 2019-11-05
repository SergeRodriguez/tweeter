// this script handles the character counter in the textarea for tweets
// if the there is more than 140 characters the counter adds a class which changes the color of the 
// font to red and removes that class if there is less than 140 characters in the text area

$("document").ready(function () {

  $("textarea").on("keyup", function (event) {
    let count = 140 - ($(this).val()).length
  
    $(".counter").text(count)
    if (count < 0) {
      $(".counter").addClass("redCounter")
    } else {
      $(".counter").removeClass("redCounter")
    }
  })

})