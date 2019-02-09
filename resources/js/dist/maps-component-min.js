

  $( document ).ready(function() {
    
    var x = document.URL;
    console.log("ready!");
    $(".test").hover(
        function () {
            console.log("print");
        }
    );

  


    $(".ui.facebook.button").click(function() {
        FB.ui({
            method: 'share',
            href: x,
}, function(response){});
    })

});


