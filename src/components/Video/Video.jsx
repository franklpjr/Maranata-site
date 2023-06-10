import YouTube from 'react-youtube';
import "./Video.css"

function Video() {

    
    return(
        <div className="video-wrapper">
            <YouTube videoId="-RAo5sK7IdA" className='video'/>
        </div>
    )
}

export default Video;