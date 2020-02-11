var cheerio = require("cheerio");
var axios = require("axios");

console.log("Grabbing headline, summery, url");

axios.get("https://www.zeit.de/index").then(function(response){
    var $ = cheerio.load(response.data);
    var results = []; 
    
    $("h3.zon-teaser-standard__heading").each(function(i, element){
        var title = $(element).text();
        var link = $(element).children("a").attr("herf");
    
       results.push({title: title, link: link});
});

$("p.zon-teaser-standard__text").each(function(i, element){
    var title = $(element).text();
    var link = $(element).children("a").attr("herf");

   results.push({title: title, link: link});
});

console.log(results);
}); 


//$("figure.zon-teaser-standard_media").each(function(i,element){
    //    var imgLink = $(element).find("a").find("img").attr("data-src").split(",")[0].split(" ")[0];
//
    //
//zon-teaser-standard__heading  , link: imgLink