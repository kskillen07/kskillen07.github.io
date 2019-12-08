var CHANNEL_ID = "UC9quYR2ClHhZyMf_LPOuvOA"; // DP
//var CHANNEL_ID = "UCupvZG-5ko_eiXAupbDfxWw";
var API_KEY = "AIzaSyBS3-gqRn38RL_05Shn8aZOgPCp2e58a3o";

$.ajax({
    //url: "https://www.googleapis.com/youtube/v3/search?key="+API_KEY+"&channelId="+CHANNEL_ID+"&part=snippet,id&order=date&maxResults=1",
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+CHANNEL_ID+"&maxResults=1&order=date&type=video&key="+API_KEY,
    context: document.body
}).done(function(response) {
    console.log(response);
    var items = response.items;
    if(items.length>0) {
        var item = items[0];
        var videoid = "https://www.youtube.com/embed/"+item.id.videoId;
        //console.log("Latest ID: '"+videoid+"'");
        var video = "<iframe width='370' height='220' src='"+videoid+"' frameborder='0' allowfullscreen></iframe>"; 
        $('#static_video').html(video);
    }
});
