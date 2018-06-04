// Setup
var tracklistObj = {},
    currentPlaylist,
    checkIntervalTime = 100,
    lastTime;



// Process the visible tracks
function getVisibleTracks() {
    var playlist = document.querySelectorAll('table.song-table.tight tr.song-row');
    for(var i = 0; i < playlist.length ; i++) { 
        var l = playlist[i],
            title = l.querySelector('td[data-col="title"] .column-content').textContent,
            artist = l.querySelector('td[data-col="artist"] .column-content').textContent,
            album = l.querySelector('td[data-col="album"] .column-content').textContent
        
	if(printTracksToConsole) {
                console.log(artist + ' - ' + title);
        }
    }
}


// Whether or not to print the tracks obtained to the console
var printTracksToConsole = true;

getVisibleTracks()
