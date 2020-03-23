import React from 'react';
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

function Playlist(props) {
	function handleNameChange(event) {
		let name = event.target.value;
		props.onNameChange(name);
	};
	return (
		<div className="Playlist">
			<div className="heading capitalised">PLAYLIST</div>
			<input onChange={handleNameChange} defaultValue={'Name Your Playlist...'}/>
			<TrackList tracks={props.playlistTracks} playlistName={props.playlistName} isRemoval={true} onRemove={props.onRemove} />
			<button className="Playlist-save" onClick={props.onSave}><span className="capitalised">SAVE TO SPOTIFY</span></button>
		</div>
	)
}


export default Playlist;