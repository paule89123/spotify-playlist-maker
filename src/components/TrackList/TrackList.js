import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {
    return (
        <div className="TrackList">
            {props.tracks.map(track => 
                {return <Track isRemoval={props.isRemoval} track={track} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} />}
                )
            }
        </div>
    )
}

export default TrackList;
