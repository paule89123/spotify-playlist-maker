import React from 'react';
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

function SearchResults(props) {
	return (
		<div className="SearchResults">
			<div className="heading capitalised">SEARCH RESULTS</div>
			<TrackList onAdd={props.onAdd} isRemoval={false} tracks={props.searchResults} />
		</div>
	)
}


export default SearchResults;