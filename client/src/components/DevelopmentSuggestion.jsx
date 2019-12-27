import React from 'react';
import DevSuggestItem from './DevelopmentSuggestion/DevSuggestItem.jsx'
import DevSuggestVideo from './DevelopmentSuggestion/DevSuggestVideo.jsx'
import Searchbar from './DevelopmentSuggestion/Searchbar.jsx'

function DevelopmentSuggestion() {
    return (
        <div className="row m-2 p-3">
            <div className="col-12"><Searchbar/></div>
            <div className="col-6"><DevSuggestItem/></div>
            <div className="col-6"><DevSuggestVideo/></div>
        </div>
    )
}

export default DevelopmentSuggestion
