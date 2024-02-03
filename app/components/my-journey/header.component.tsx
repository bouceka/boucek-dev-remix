// @flow
import * as React from 'react';
import maVlast from '../../../public/assets/music/ma-vlast-shorter.mp3';
import { useEffect, useState } from 'react';
import { Modal } from '~/components/modal/modal.component';

export const HeaderMyJourney = () => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [clickHere, setClickHere] = useState(true);

  const handleClickHere = () => {
    setClickHere(false)
  }
  const [isVlastPlaying, setIsVlastPlaying] = useState(false);
  useEffect(() => {
    const audioSrc = new Audio(maVlast);
    setAudio(audioSrc);
    // only run once on the first render on the client
  }, []);

  const playPauseHandler = () => {
    handleClickHere()
    if (audio?.paused) {
      audio.play();
      setIsVlastPlaying(true);
    } else {
      audio?.pause();
      setIsVlastPlaying(false);
    }
  };
  return (
    <header>
      <div className='title-header'>
        <h1 className='title'>My journey I want to be proud</h1>
        <span className='p--large--bold'>People regret things they didn't do than the things they did</span>
      </div>

      <div className='player' >
        {clickHere ? <span className='click'>Click Here &darr;</span> :''}
        <div className='player__title' onClick={() => playPauseHandler()}>
          <span className='p--xxlarge'>Ma vlast: No. 2. Vltava</span>
          {isVlastPlaying ? (
            <img width={40} height={40} src='/assets/volume-up-white.svg' alt='' />
          ) : (
            <img width={40} height={40} src='/assets/volume-off-white.svg' alt='' />
          )}
        </div>
        <span className='p--medium'>Bedrich Smetana</span>
      </div>
    </header>
  );
};
