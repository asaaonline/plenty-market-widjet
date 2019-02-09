

  $( document ).ready(function() {
    
    var x = document.URL;
    console.log("ready!");
    $(".test").hover(
        function () {
            console.log("print");
        }
    );

  

    var fbButton = document.getElementById('fb-share-button');
    var url = window.location.href;
    
    fbButton.addEventListener('click', function() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
            'facebook-share-dialog',
            'width=800,height=600'
        );
        return false;
    });

    var ur="https://www.linkedin.com/shareArticle?mini=true&url="+x+"&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn";


    $('#link_id').click(function(){
        window.open(ur, 'window name', 'window settings');
        return false;
      });

});



function test(value) {
    console.log(value);
            if ($('#fun').is(":checked")) {
                bootbox.prompt({
                    title: "This is a prompt with a set of checkbox inputs!",
                    inputType: 'checkbox',
                    inputOptions: [
                        {
                            text: 'Choice One',
                            value: '1',
                        },
                    
                    ],
                    callback: function (result) {
                        console.log(result);
                    }
                });
            }
    
    
        }
