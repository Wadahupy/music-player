import waveToEarthImage from './assets/wave to earth.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faBackward, faPlay, faForward, faRepeat } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <body className=" bg-gray-900 flex items-center justify-center h-screen w-full">
      <div className='bg-blend-darken'>
        <img src={waveToEarthImage} alt="image" className='relative flex items-center justify-center h-screen w-full brightness-50 blur-sm overflow-hidden' />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-black/70 rounded-lg showdow-lg w-96 overflow-hidden">
          <div className='w-auto'>
            <h1 className="text-3xl font-bold text-center text-white pt-3">
              MUSIC PLAYER
            </h1>
            <hr className="w-80 h-1 mx-auto my-3 bg-gray-800 border-0 rounded md:my-5" />
            <div className="px-10 pb-2 flex justify-center items-center ">
              <img src={waveToEarthImage} alt="wave to earth" className="w-1/2" />
            </div>
            <div className="flex justify-center flex-col items-center">
              <h1 className='text-xl font-bold text-white'>Seasons</h1>
              <h3 className='text-sm text-white'>wave to earth</h3>
            </div>
            <div className='px-7 mt-5'>
              <input type="range" className='w-full accent-gray-300' />
            </div>
            <div className='flex flex-row justify-center h-20 gap-7 items-center'>
              <FontAwesomeIcon icon={faShuffle} className='text-white' />
              <FontAwesomeIcon icon={faBackward} className='text-white h-7' />
              <FontAwesomeIcon icon={faPlay} className='text-white h-10' />
              <FontAwesomeIcon icon={faForward} className='text-white h-7' />
              <FontAwesomeIcon icon={faRepeat} className='text-white' />
            </div>
            <hr className="w-80 h-1 mx-auto bg-gray-800 border-0 rounded my-2" />
            <div className='px-4'>
              <div className='text-lg font-medium px-5 py-2 text-white'>Playlist</div>
              <div className='space-y-1 px-4 pb-4'>
                <div className='flex justify-between items-center bg-white rounded-lg p-2'>
                  <span className='text-gray-800 text-sm'>Unravel</span>
                  <button className='p-1'><FontAwesomeIcon icon={faPlay} className='text-gray-800' /></button>
                </div>
                <hr className='mx-0 m-10' />
                <div className='flex justify-between items-center p-2'>
                  <span className='text-white text-sm'>Unravel</span>
                  <button className='p-1'><FontAwesomeIcon icon={faPlay} className='text-white' /></button>
                </div>
                <hr className='mx-0 m-10' />
                <div className='flex justify-between items-center p-2'>
                  <span className='text-white text-sm'>Unravel</span>
                  <button className='p-1'><FontAwesomeIcon icon={faPlay} className='text-white' /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
