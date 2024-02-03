// @flow
import * as React from 'react';
import { HeaderMyJourney } from '~/components/my-journey/header.component';
import { HistoryInvasion } from '~/components/my-journey/history-invasion.component';
import { AboutMeMyJourney } from '~/components/my-journey/about-me.component';
import type { V2_MetaFunction } from '@remix-run/node';
import { GrandmotherMyJourney } from '~/components/my-journey/grandmother.component';
import { NewChapter } from '~/components/my-journey/new-chapter.component';

type Props = {};

const MyJourney = (props: Props) => {
  return (
    <section className='my-journey'>
      {/* <Modal title='Do you wish to play with music?' open={consent} onClose={()=> setConsent(()=>!consent)}></Modal> */}
      <HeaderMyJourney />
      <AboutMeMyJourney />
      <GrandmotherMyJourney />
      <HistoryInvasion/>
      <NewChapter/>
    </section>
  );
};

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Boucek Dev | My Journey',
    },
    {
      name: 'description',
      content: 'Explore my journey how I got to Canada and how I have became',
    },
  ];
};

export default MyJourney;
