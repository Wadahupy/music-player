import waveToEarthImage from './assets/wave to earth.jpg';
import seasonsAudio from './assets/seasons.mp3'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faBackward, faPlay, faPause, faForward, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function App() {
  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State to manage play/pause
  const [currentTime, setCurrentTime] = useState(0); // State for current time of audio
  const [duration, setDuration] = useState(0); // State for total duration of audio

  useEffect(() => {
    // Set the duration once the metadata is loaded
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      // Update current time whenever audio plays
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (audio) {
        audio.removeEventListener('loadedmetadata', () => {});
        audio.removeEventListener('timeupdate', () => {});
      }
    };
  }, []);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Function to handle slider change
  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime; // Seek to new time
    setCurrentTime(newTime);
  };

  // Function to format time (mm:ss)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center h-screen w-full">
      {/* Audio Element */}
      <audio ref={audioRef} src={seasonsAudio} /> {/* Ensure this path is correct */}

      <div className="bg-blend-darken">
        <img
          src={waveToEarthImage}
          alt="image"
          className="relative flex items-center justify-center h-screen w-screen brightness-50 backdrop-blur- overflow-hidden blur-lg"
        />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-black/50 rounded-xl shadow-2xl w-96 overflow-hidden mt-10">
          <div className="w-auto">
            <h1 className="text-3xl font-bold text-center text-white pt-5">
              MUSIC PLAYER
            </h1>
            <hr className="w-80 h-1 mx-auto my-3 bg-slate-700 border-0 rounded md:my-5" />
            <div className="px-10 pb-2 flex justify-center items-center ">
              <img src={waveToEarthImage} alt="wave to earth" className="w-1/2 rounded-lg" />
            </div>
            <div className="flex justify-center flex-col items-center">
              <h1 className="text-xl font-bold text-white pt-3">Seasons</h1>
              <h3 className="text-sm text-white">wave to earth</h3>
            </div>
            <div className="px-7 mt-3">
              <input
                type="range"
                className="w-full accent-gray-300"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSliderChange}
              />
              <div className="flex justify-between text-white text-sm mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            <div className="flex flex-row justify-center h-20 gap-7 items-center">
              <FontAwesomeIcon icon={faShuffle} className="text-white" />
              <FontAwesomeIcon icon={faBackward} className="text-white h-7" />
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className="text-white h-10 cursor-pointer"
                onClick={togglePlayPause}
              />
              <FontAwesomeIcon icon={faForward} className="text-white h-7" />
              <FontAwesomeIcon icon={faRepeat} className="text-white" />
            </div>
            <hr className="w-80 h-1 mx-auto bg-slate-700 border-0 rounded my-2" />
            <div className="px-4">
              <div className="text-lg font-medium px-5 py-2 text-white">Playlist</div>
              <div className="space-y-1 px-4 pb-4">
                <div className="flex justify-between items-center bg-white rounded-lg p-2">
                  <span className="text-gray-800 text-sm">Unravel</span>
                  <button className="p-1">
                    <FontAwesomeIcon icon={faPlay} className="text-gray-800" />
                  </button>
                </div>
                <hr className="mx-0 m-10" />
                <div className="flex justify-between items-center p-2">
                  <span className="text-white text-sm">Unravel</span>
                  <button className="p-1">
                    <FontAwesomeIcon icon={faPlay} className="text-white" />
                  </button>
                </div>
                <hr className="mx-0 m-10" />
                <div className="flex justify-between items-center p-2">
                  <span className="text-white text-sm">Unravel</span>
                  <button className="p-1">
                    <FontAwesomeIcon icon={faPlay} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
