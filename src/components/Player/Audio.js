import React, {useEffect, useRef} from 'react';

const Audio = ({src, play, volume}) => {
  const audio = useRef(null);
  useEffect(() => {
    audio.current.src = src;
    if (play) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [src]);

  useEffect(() => {
    if (play) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [play]);

  useEffect(() => {
    audio.current.volume = volume / 100;
  });

  return <audio ref={audio}/>;
};

export default Audio;
