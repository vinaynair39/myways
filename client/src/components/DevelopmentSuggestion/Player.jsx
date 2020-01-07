import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from 'react-player';
import { connect } from "react-redux";


const Player = ({url="https://www.youtube.com/watch?v=FETEXnreL8M"}) => {
    const [playing, setPlaying] = useState(false);
    const [url, setUrl] = useState('');
    const inputRef = useRef(null);


    useEffect(() => {
        setUrl(props.currentUrl);
        console.log(url, 1000);
    }, [props.current]);



    return (
        <>
            <div className="player">
                <div className="player-video">
                    <ReactPlayer url={url}
                        ref={inputRef}
                        playing={playing}
                        width={'35vw'}
                        height={'40vh'}
                        onEnded={handleEnded}
                    />
                </div>
                </div>
        </>
    );
};


export default connect(undefined, undefined)(Player);