import React, { useState } from 'react';


const Stars = () => {
    const [difficulty, setDifficulty] = useState(0);
    const getDifficulty = () => {
        return difficulty;
    }

    return (
        <div className="stars">
            <input type="radio" id="star5" name="stars" value="5" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star5"></label>
            <input type="radio" id="star4" name="stars" value="4" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star4"></label>
            <input type="radio" id="star3" name="stars" value="3" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star3"></label>
            <input type="radio" id="star2" name="stars" value="2" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star2"></label>
            <input type="radio" id="star1" name="stars" value="1" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star1"></label>
        </div>
    )
}

export default Stars;