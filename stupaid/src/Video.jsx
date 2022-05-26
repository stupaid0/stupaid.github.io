import React from 'react';
import Videomp4 from './video.mp4';
import './App.css';

const Video = () => {
    return (
        <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={Videomp4}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover "
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          

          <div className="shadow-2xl">
            
          </div>
        </div>
      </div>
    </div>
    );
}

export default Video;