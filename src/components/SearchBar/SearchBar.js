import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar(props) {
	const [ term, setTerm ] = useState("")

	function search() {
		props.onSearch(term)
	}

	function handleTermChange(event) {
		setTerm(event.target.value)
	}
	return (
		<div className="SearchBar">
			<input placeholder="Enter A Song, Album, or Artist..." onChange={handleTermChange}/>
			<button onClick={search} className="SearchButton capitalised">SEARCH</button>
		</div>
	)
}

export default SearchBar;