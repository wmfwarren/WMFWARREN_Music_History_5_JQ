$(document).ready(function() {

	var $addMusicContent = $("#addMusicInfo");
	var $listGenreContent = $("#songInfo");
	var $listSongContent = $("#songDisplay");

	$addMusicContent.toggle();

	$(document).on("click", "#addMusic", function(){
		$addMusicContent.toggle();
		$listSongContent.toggle();
		$listGenreContent.toggle();
		$("#moreButton").toggle();
	});
});

