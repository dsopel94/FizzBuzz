$(document).ready(function(){


function fizzBuzz2(max) {

var text = " ";
	for (i = 1; i <= max; i++) {
  if (i%3 == 0) {
  $("#fb").append('<p>' + 'fizz' + '</p>');
  	}
   else if (i%5 == 0) {
    //text+="Buzz";
     $("#fb").append('<p>' + 'buzz' + '</p>');
  	}
  else if (i%3 == 0 || i%5 == 0 ) {
   $("#fb").append('<p>' + 'fizz buzz' + '</p>');
   //text +="Fizz Buzz";
  	}
  else {
  //text +=i;
$("#fb").append('<p>' + i + '</p>');
  			}
  		}
    $("#fb").append(text);
    }
    fizzBuzz2(100);
  });