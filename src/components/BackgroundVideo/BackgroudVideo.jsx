import './BackgroundVideo.css';
import colors from '../../assets/video/colors.mp4';


function BackgroundVideo() {
    return (
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={colors} type="video/mp4" />
        </video>
        <div className="overlay" />
      </div>
    );
  }

export default BackgroundVideo