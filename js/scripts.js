
$(document).ready(function(){
$('form.quiz').submit(function(){
  event.preventDefault();
var color =$("input:radio[name=exampleRadios]:checked").val();
var movie =$("input:radio[name=movie]:checked").val();



if (color === "option1" && movie === "option5") {
$("#johnny").show();
}


});
});
