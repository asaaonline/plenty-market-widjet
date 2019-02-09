
$(".test" ).hover(
    function() {
      console.log("print");
    }
  );

  $( document ).ready(function() {
    console.log( "ready!" );
});


$( ".test" ).click(function() {
    alert( "Handler for .click() called." );
  });
