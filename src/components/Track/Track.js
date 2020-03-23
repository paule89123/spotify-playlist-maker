import React from 'react';
import './Track.css';

function Track(props) {
    function renderAction() {
        if (props.isRemoval) {
            return <button onClick={removeTrack} className="Track__plusminus">-</button>
        } 
        else {
            return <button onClick={addTrack} className="Track__plusminus">+</button>
        }
    }
    function addTrack() {
    	props.onAdd(props.track)
    }
    function removeTrack() {
    	props.onRemove(props.track)
    }
    return (
        <div className="Track">
            <div className="Track__text">
                <div className="Track__text__trackname">{props.track.name}</div>
                <div className="Track__text__artistname">{props.track.artist}</div>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;