// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import invastionRadio from '../../../public/assets/music/invasion-audio.mp3';
import useScrollToElement from '~/hooks/ElementScrolledTo';
type Props = {};
export const HistoryInvasion = (props: Props) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [clickHere, setClickHere] = useState(true);

  const handleClickHere = () => {
    setClickHere(false);
  };
  // const [consent,setConsent] = useState(true)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  useEffect(() => {
    const audioSrc = new Audio(invastionRadio);
    setAudio(audioSrc);
    // only run once on the first render on the client
  }, []);

  const playPauseHandler = () => {
    handleClickHere();
    if (audio?.paused) {
      audio.play();
      setIsAudioPlaying(true);
    } else {
      audio?.pause();
      setIsAudioPlaying(false);
    }
  };

  const { elementRef, isElementVisible } = useScrollToElement();

  return (
    <section className='history-invasion' ref={elementRef}>
      <div className='row'>
        <div className='content'>
          <div className='content__description p--xlarge'>
            <p>
              At the beginning of 1968, a political liberalization was called Prague Spring. The border opened,
              censorship was lifted, and decentralization of the economy and democratization was added. This
              liberalization promised a brighter future for the Czechoslovakian nation. My grandmother was 23 and
              successfully working as an X-ray nurse with the open border. She got a job offer in Germany, looking for
              qualified healthcare workers.
            </p>
            <p>
              My grandmother was very family-oriented and couldn't imagine leaving her family in Czechoslovakia. She had
              been considering the offer until it was too late. On August 22nd, 1968, the Soviet Union invaded
              Czechoslovakia and occupied our country until our government resigned and restored previous communist
              restrictions, which were stricter than before.
            </p>
          </div>
          <div className='illustration'>
            <img
              className={isElementVisible ? 'animated' : ''}
              src='https://res.cloudinary.com/boucekdev/image/upload/v1706918650/github/my-journey/Subject_jsdbcr.png'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/boucekdev/image/upload/v1706921023/github/my-journey/1968_jq8rnw.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='player invasion'>
        {clickHere ? <span className='click'>Click Here &darr;</span> : ''}
        <div className='player__title' onClick={() => playPauseHandler()}>
          <span className='p--xxlarge'>To All the People of Czechoslovakia</span>
          {isAudioPlaying ? (
            <img width={40} height={40} src='/assets/volume-up-white.svg' alt='' />
          ) : (
            <img width={40} height={40} src='/assets/volume-off-white.svg' alt='' />
          )}
        </div>
        <span className='p--medium'>Vladimir Fiser</span>
      </div>
    </section>
  );
};
