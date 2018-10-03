$(document).ready(function(){
  GenerateQuote();
$( "#image" ).click(function() {
  GenerateQuote();
});
  
function RandomInt (max){
  var i;
  i = Math.floor(Math.random() * (max - 0)) + 0;
  return(i);
}
  
function GenerateQuote (){
  $.getJSON("//raw.githubusercontent.com/t3chm0nkey/random-Quote-generator/master/quotes", function(data){
    i = RandomInt(data.quotes.length);
        $("#quote").html(JSON.stringify(data.quotes[i].quote));
        $("#author").html("- "+data.quotes[i].author);
        $(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?text="+JSON.stringify(data.quotes[i].quote).replace(/ /g,"%20")+"%0A"+"- "+ data.quotes[i].author.replace(/ /g,"%20") );
  });
  $.getJSON("https://api.github.com/repos/t3chm0nkey/random-Quote-generator/contents/RandomQuotePhotos",function(images){
    x = RandomInt(images.length);
    $("#image").css("background-image","url("+images[x].download_url.toString()+")");
  });
}
});