
var client = require('cheerio-httpcli');
var URL = require('url');
var param = {};

var url = "http://www.aozora.gr.jp/index_pages/person81.html";

client.fetch( url, param, function(err, $, res) {

    if( err ){
        consol.log('err');
    }

    $("a").each(function( idx ) {
        var text = $(this).text();
        var href = $(this).attr('href');

        if( !href ){
            return;
        }

        var href2 = URL.resolve( url, href );
        console.log(text + " : " + href2);
    });


    // var body = $.html();
    // console.log( body );

});


