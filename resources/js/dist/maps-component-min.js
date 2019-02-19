

//   $( document ).ready(function() {
    
//     var x = document.URL;
//     console.log("ready!");
//     $(".test").hover(
//         function () {
//             console.log("print");
//         }
//     );

//     var gogle="https://plus.google.com/share?url="+x;

//         $("#google").attr("href",gogle);
        

//     var fbButton = document.getElementById('fb-share-button');
//     var url = window.location.href;
    
//     fbButton.addEventListener('click', function() {
//         window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
//             'facebook-share-dialog',
//             'width=800,height=600'
//         );
//         return false;
//     });

//     var ur="https://www.linkedin.com/shareArticle?mini=true&url="+x+"&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn";


//     $('#link_id').click(function(){
//         window.open(ur, 'window name', 'window settings');
//         return false;
//       });

// });



// function test(value) {
//     console.log(value);
//             if ($('#fun').is(":checked")) {
//                 bootbox.prompt({
//                     title: "This is a prompt with a set of checkbox inputs!",
//                     inputType: 'checkbox',
//                     inputOptions: [
//                         {
//                             text: 'Choice One',
//                             value: '1',
//                         },
                    
//                     ],
//                     callback: function (result) {
//                         console.log(result);
//                     }
//                 });
//             }
    
    
//         }






$(document).ready(function () {
    var x = document.URL;

    $('[data-toggle="tooltip"]').tooltip();  
    console.log("ready!");
    $(".test").hover(
        function () {
            console.log("print");
        }
    );
    var gogle = "https://plus.google.com/share?url=" + x;

    $("#google").attr("href", gogle);
    // $("#a").append("");

    ///////facebook/////////////////////////////////////////
    $(".ui.facebook.button").click(function () {
        FB.ui({
            method: 'share',
            href: x,
        }, function (response) { });
    })

    var fbButton = document.getElementById('fb-share-button');
    var url = "http://www.facebook.com";

    fbButton.addEventListener('click', function () {
        if($("#fb-share-button").attr("avalability")==='true'){
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
            'facebook-share-dialog',
            'width=800,height=600'
        );
        return false;
        }
    });


    ////////////////////linkdn//////////////////////////////////////////
    var ur = "https://www.linkedin.com/shareArticle?mini=true&url=" + x + "&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn";



    $('#link_id').click(function () {
        window.open(ur, 'window name', 'window settings');
        return false;
    });

    ///////////////////////pinterest//////////////////////////////////////

    // var pinOneButton = document.querySelector('.pinterest');
    // pinOneButton.addEventListener('click', function (e) {


    //     PinUtils.pinAny();
    // });


    //skype//////////////////////
    (function (r, d, s) {
        r.loadSkypeWebSdkAsync = r.loadSkypeWebSdkAsync || function (p) {
            var js, sjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(p.id)) { return; }
            js = d.createElement(s);
            js.id = p.id;
            js.src = p.scriptToLoad;
            js.onload = p.callback
            sjs.parentNode.insertBefore(js, sjs);
        };
        var p = {
            scriptToLoad: 'https://swx.cdn.skype.com/shared/v/latest/skypewebsdk.js',
            id: 'skype_web_sdk'
        };
        r.loadSkypeWebSdkAsync(p);
    })(window, document, 'script');



    /////////////////xing//////////////////////////////
    var xingUrl = "https://www.xing.com/spi/shares/new?url=" + x;
    $('#xing').click(function () {
        window.open(xingUrl, 'window name', 'window settings');
        return false;
    });

    /////////////////////////////////// tumblrUrl/////////////////
    var tumblrUrl = "http://tumblr.com/widgets/share/tool?canonicalUrl=" + x
    $('#tumblr').click(function () {
        window.open(tumblrUrl, 'window name', 'window settings');
        return false;
    });


    ///////////////////////////Redit////////////////////////////////////
    var redditUrl = "http://www.reddit.com/submit?url=" + x
    $('#reddit').click(function () {
        window.open(redditUrl, 'window name', 'window settings');
        return false;
    });




    $('.check').click(function () {
        
        console.log('checked');
        var id = $(this).attr('id');
        var style = $(this).attr('styles')
        if ($(this).is(":checked")) {
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
                    tes44(id, result, style);
                }
            });
        } else {
            uncheck(id);
        }
    
    
    });


    function tes44(id, result, style) {
        console.log('value1', id);
        console.log('result', result);
    if(result!==null){
        if (result.length == 1) {
            switch (style) {
                case "one": {
                    var id2 = $('#' + id).closest('.row').find('img').attr('src', main+'/images/' + id + '_selected.png');
                    
                }
                    break;
                case "one": {
                    var id2 = $('#' + id).closest('.row').find('img').attr('src', main+'/images/' + id + '_selected2.png');
                }
                    break;
                case "one": {
                    var id2 = $('#' + id).closest('.row').find('img').attr('src', main+'/images/' + id + '_selected3.png');
                }
                    break;
            }
            $('#' + id).closest('.row').find('img').parents().attr('avalability','true');
            // console.log('pp',id2);
        } else {
            $('#' + id).closest('.row').find('img').parents().attr('avalability','false');
           $('#'+id).prop('checked',false);
        }
    }else{
        uncheck(id);

    }
    }
    
    
    function uncheck(id) {
        $('#'+id).prop('checked',false);
        $('#' + id).closest('.row').find('img').attr('src', main+'/images/' + id + '_unselected.png')
        $('#' + id).closest('.row').find('img').parents().attr('avalability','false');
    }

    
});











////////////////check box///////////////////////////

// $(".check").click(()=>{
//     console.log("dddd")
//     console.log($(this));
// })


        // $('.check').click(function(){
        //     var id = $(this).attr('id');
        //     console.log(id);
        //     // switch(id){}


        //   });
        