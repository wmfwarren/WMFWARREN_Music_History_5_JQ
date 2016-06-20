var $songDisplayZone = $("#songDisplay");
var songs = null;

var initialSongs = (function() {
  $.ajax({
  	url:"../json/songs.json"
  }).done(printSongs);
	
})();

function printSongs(songData) {
	songs = songData.songs;
}


