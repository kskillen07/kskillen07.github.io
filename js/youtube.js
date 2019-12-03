var CHANNEL_ID = "UCupvZG-5ko_eiXAupbDfxWw";
var API_KEY = "AIzaSyBYo-POffSRcVnNr6WL0ZNUpJNjS37ZY0s";

$.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?key="+API_KEY+"&channelId="+CHANNEL_ID+"&part=snippet,id&order=date&maxResults=1",
    context: document.body
}).done(function(response) {
    var items = response.items;
    if(items.length>0) {
        var item = items[0];
        var videoid = "https://www.youtube.com/embed/"+item.id.videoId;
        console.log("Latest ID: '"+videoid+"'");
        var video = "<iframe width='420' height='315' src='"+videoid+"' frameborder='0' allowfullscreen></iframe>"; 
        $('#static_video').html(video);
    }
});