import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify'

function App(props) {

	const [ searchResults, setSearchResults ] = useState([])
	const [ playlistName, setPlaylistName ] = useState("My Playlist")
	const [ playlistTracks, setPlaylistTracks ] = useState([])

	function addTrack(track) {
		for (let i=0; i<playlistTracks.length; i++) {
			if (playlistTracks[i].id === track.id) {
				return
			}
		}
		let arrayCopy = [...playlistTracks]
		arrayCopy.push(track)
		setPlaylistTracks(arrayCopy)
	}

	function removeTrack(track) {
		let arrayCopy = playlistTracks.filter(item => item.id !== track.id);
		setPlaylistTracks(arrayCopy)
	}

	function updatePlaylistName(name) {
		setPlaylistName(name)
	}

	function savePlaylist() {
		const trackUris = playlistTracks.map(track => track.uri);
		Spotify.savePlaylist(playlistName, trackUris).then(() => {
			setPlaylistName('New Playlist')
			setPlaylistTracks([])
		})
	}

	function search(term) {
		Spotify.search(term).then(searchResults => {
			setSearchResults(searchResults)
		})
	}

	return (
		<div>
			<h1><span className="title1">CREATE</span><br /><span className="title2">Spotify Playlists</span></h1>
			<div className="App">
				<div className="App__left-column">
					<SearchBar onSearch={search} />
					<SearchResults searchResults={searchResults} onAdd={addTrack} />
				</div>
				<div className="App__right-column">
					<Playlist playlistTracks={playlistTracks} playlistName={playlistName} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
				</div>
			</div>
		</div>
	)
}


export default App;


