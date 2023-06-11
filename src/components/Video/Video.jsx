import YouTube from 'react-youtube';
import "./Video.css"

function Video() {

    const opts = {
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
    return(
        <div className="video-wrapper">
            <YouTube videoId="-RAo5sK7IdA" className='video' opts={opts}/>
        </div>
    )
}

export default Video;