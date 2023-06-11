import YouTube from 'react-youtube';
import "./Video.css"

function Video() {

    const opts = {
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    
    return(
        <div className="video-wrapper">
            <YouTube videoId="-RAo5sK7IdA" opts={opts}/>
        </div>
    )
}

export default Video;