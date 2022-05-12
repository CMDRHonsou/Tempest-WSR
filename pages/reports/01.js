/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 1;
const startDate = '2021-07-01';
const endDate = '2021-07-12';
const submissionDate = '2021-07-13';

const citations = [
  'TIE-TC 12',
  'TIE-TC 76',
  'TIE-TC 168',
  'XWA-TC 8',
  'XWA-TC 22',
];

const citationsChange = '+1';

const orders = [{
  name: 'TIE-TC 1',
  id: 1,
  title: 'Capture of Zaarin',
}, {
  name: 'TIE-TC 10',
  id: 10,
  title: 'Battle for the Death Star',
}, {
  name: 'TIE-TC 16',
  id: 16,
  title: 'Dacian Downfall',
}, {
  name: 'TIE-TC 19',
  id: 19,
  title: 'The Tethys Honeymoon',
}, {
  name: 'TIE-TC 30',
  id: 30,
  title: 'Save the Emperors Archives',
}, {
  name: 'TIE-TC 153',
  id: 390,
  title: 'Koph Supremacy Project',
}];

const competitions = [{
  id: '3294',
  name: 'Imperial Storm III',
  ends: '2021-07-30',
  units: 'Entire TC',
  notes: 'Imperial Storm is a turn based war-game that pits all three Battlegroups against the others over a map of the planetary systems that we are currently near.',
  highlight: true,
}, {
  id: '3301',
  name: 'Crossword Challenge',
  ends: '2021-09-30',
  units: 'Entire TC',
  notes: 'Alright pilots, strap into your fighters and drink your Bantha milk, it’s time to show off your knowledge with a crossword puzzle.',
  highlight: true,
}, {
  id: '3299',
  name: 'Real Heroes of the Challenge',
  ends: '2021-08-01',
  units: 'ISD-II Challenge',
  notes: 'VA Silwar Naiilo, Challenge COM, invites you to create an NPC for the ships support staff.',
  highlight: true,
}, {
  id: '3297',
  name: 'Guess the pilot',
  ends: '2021-08-30',
  units: 'Entire TC',
  notes: 'Every week you will be presented with five uniforms. You have to guess to which pilot that uniform belongs to.',
  highlight: true,
}, {
  id: '32389',
  name: 'Challenge Championship League',
  ends: '2021-08-08',
  units: 'ISD-II Challenge',
  notes: 'A 3v3 fleet battles league for pilots of the Challenge',
  highlight: true,
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-01-01',
  units: 'ISD-II Challenge',
  notes: 'Fill in the acronyms from random letter combinations; Google Forms link posted to the Challenge Discord channel',
}, {
  id: '3274',
  name: 'The Challenge with Words',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'COL Marenta will generate a word search and post the link.',
}, {
  id: '3266',
  name: 'Trivia Grand Tour: Season Six',
  ends: '2021-07-26',
  units: 'Entire TC',
}, {
  id: '3262',
  name: 'Trivia for the Challenged 2021 - Season 3',
  ends: '2021-07-31',
  units: 'ISD-II Challenge',
},{
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most LoCs or LoSs in Squadrons.',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most LoSs earned.',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most singleplayer missions played.',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}];

// TODO confirm
const ACTIVITY = {
  // Honsou
  55973: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE; Squadrons PvP; TCiB battles completed',
    otherActivity: 'Tempest Squadron Admin',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'Another handful of LoCs for LT Akreseus. Start thinking about taking TCCORE for your LCM promotion!',
  },

  // Neko
  55783: {
    communication: 'COM check-ins',
    flightActivity: 'XWA missions for TCiB; Star Conflict PvE for ISIII',
    otherActivity: '',
    notes: '',
  },

  // Iam
  55785: {
    communication: 'COM check-ins',
    flightActivity: 'XWA missions for TCiB; Star Conflict PvE for ISIII',
    otherActivity: 'Created a LEGO Z95!',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP/PvE',
    otherActivity: '',
    notes: '',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP and Star Conflict PvE',
    otherActivty: '',
    notes: '',
  },

  // Dempsey
  12945: {
    communication: 'Discord',
    flightActivity: 'SP Battles & Missions',
    otherActivity: 'Earning a Gold Star of the Empire! Congratulations!',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvP/PvE; ImpStorm battle of Kammia (approx 110 Legions)',
    otherActivity: 'Updated the Delta Squadron patch; Created 2 potential Eagle Squadron patches; Created Tempest Squadron banner; Participated in Sigma Sigil; Wrote fiction submission for "Real Heroes of the Challenge" competition',
    notes: 'What a week of activity, great to see!',
  },

  // Phalk
  6874: {
    communication: 'Discord, Email',
    flightActivity: 'TIE Free 137 for IS2.  XvT Free 10. XVTTC87. XVTTC90. Flew 1 assignment for TAC.',
    otherActivity: 'Submitted reviews for flown battles. Participated in TC Trivia. Participated in Guess the Pilot by their Uniforms Competition.',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; Star Conflict PvE for ISIII',
    otherActivity: '',
    notes: '',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; TCiB battles; Single Player Battles',
    otherActivity: 'Updated uniform',
    notes: '',
  },

  // Gisornator
  56116: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Player Farming',
    notes: 'Recently joined in our ranks, quickly advancing to full Lieutenant promotion.',
  },
};

function appendActivityData(activityData, additionalActivityData) {
  return activityData.map((ad) => {
    if (additionalActivityData[ad.PIN]) {
      return { ...ad, ...additionalActivityData[ad.PIN] };
    }

    return ad;
  });
}

export default function Report({ activityData }) {
  if (activityData === null) {
    return 'Loading...';
  }

  const activity = appendActivityData(activityData, ACTIVITY);

  return (
    <>
      <Heading reportNumber={reportNumber} />

      <ReportDates
        startDate={startDate}
        endDate={endDate}
        submissionDate={submissionDate}
      />

      <Intro showUniform>
        <p>
          <em>
          Tempestuous Times: A Honsou Story.
          Sometimes in life we take a step back and think, how did I get here? Why am I here? What choices did I make?
          Or were these choices simply an illusion of free will and the path was ordained for me by some higher power?
          Staring out into the infinite black speckled with the distant twinkling lights of a billion suns, 
          newly appointed CMDR Honsou pondered these very questions. His new office, a generous living and working space
          separated by a half durasteel, half transparasteel dividing wall and remote shutters should he care for additional privacy.
          It was a stark contrast to the quarters he had shared with Flight III. Still at least he didn't have to listen to Coldsnacks snoring anymore.
          This had been the quarters of his CMDR Silwar, not two rotations ago. Silwar was now the COM of the ISD-II Challenge.
          Honsou had been pegged for a move to the Hammer to rebuild Delta Squadron but there had been unforeseen delays.
          He absently rubbed his left eye with his left index finger, the pain of the recent ocular injury still left ghosts of it’s discomfort.
          Then there were rumours about Honsou becoming a CMDR aboard the Challenge, Honsou had not dreamed it would be Tempest. Yet here he was.
          Honsou picked up his datapad and looked over the recent transmissions. VA Silwar and the others were doing a grand job of securing assets for the Challenge in Imperial Storm.
          Honsou tossed the datapad back onto the desk and balled his fists. “Rho” he growled… All that mattered was that he got his shot at Rho Squadron.
          Before his temper was able to flare completely, there was a chime at the intercom and his XO’s pleasant and soothing voice came through
          “Sir, the new pilot from IWATS has arrived.” Her voice as chipper and excitable as always. “Excellent,” Honsou allowed himself a wry smile, “send him in.”
          SL Gisornator stood to attention, until the doors closed, the XO heading back down the hallway beyond.
          “My Friend” Honsou smiled, sincerely this time. “It is good to see you, are you ready?”
          “Always!” Gisornator said, his attention stance switching to at ease, and he returned a knowing smile.
          Honsou rounded his desk and sat down reaching for the bottle Silwar had left him and two glasses. “Take a seat, we have much to discuss.
          These are tempestuous times and if you’re half as good as you used to be, they won’t know what hit them!”

          </em>
        </p>

        <p>
          ReMob awards are still making their way through the fleet. I'm happy
          to say that out of twelve squadron members, we earned 24 medals -
          each member of Tempest earning the fleet's first Meritorious Unit
          Awards as well as an IS-GW each. The tailors are already working on
          updating our uniforms. Enjoy your well-earned bonus pay.
        </p>

        <p>
          Tempest King of the Mountain has been concluded! 
          With CM Wreckage emerging as the victor. VA Silwar taking 2nd place and CM Honsou taking 3rd.
          Whilst VA Silwar moved on to become COM of the ISDII Challenge and CM Honsou stepped up to CMDR of Tempest, in the wake of the final rounds.
          CM Wreckage decided to take the spoils and depart for Sin Squadron aboard the ISDII Warrior Where I am sure he will make a fine CMDR.
        </p>

      </Intro>

      <Orders missions={orders}>
        <p>
          These are some of the missions we're
          {' close to earning citations on. Check our status on the '}
          <Link href="https://tc.emperorshammer.org/battleboard.php?sqn=45">Squadron Battleboard</Link>.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
        Well, I have been in command for 12 days at the point of writing this.
        Tempest is still the best Squadron in the entire TC Fleet and
        I haven't set the Challenge ablaze. I'd say we are off on the right foot!
        Great work everybody. We are the storm!
      </Closing>

      <Footer />
    </>
  );
}

/* eslint react/forbid-prop-types: 0 */
Report.propTypes = {
  activityData: T.any,
};

Report.defaultProps = {
  activityData: null,
};

export async function getStaticProps() {
  const activityData = await loadActivityData(config.squadronId, startDate, endDate);

  return {
    props: { activityData }, // will be passed to the page component as props
  };
}
