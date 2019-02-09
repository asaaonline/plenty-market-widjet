

  $( document ).ready(function() {
    
    var x = document.URL;
    console.log("ready!");
    $(".test").hover(
        function () {
            console.log("print");
        }
    );

    $("#fb").attr("data-href",x);


});


