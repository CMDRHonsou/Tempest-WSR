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

const reportNumber = 8;
const startDate = '2021-11-01';
const endDate = '2021-11-08';
const submissionDate = '2021-11-09';

const citations = [
  'TIE-TC 1',
  'TIE-TC 10',
  'TIE-TC 12',
  'TIE-TC 16',
  'TIE-TC 19',
  'TIE-TC 28',
  'TIE-TC 30',
  'TIE-TC 76',
  'TIE-TC 108',
  'TIE-TC 153',
  'TIE-TC 168',
  'TIE-TC 202',
  'XvT-TC 14',
  'XvT-TC 38',
  'XvT-TC 111',
  'XvT-TC 112',
  'XvT-TC 113',
  'XWA-TC 8',
  'XWA-TC 21',
  'XWA-TC 25',
  'XWA-TC 42',
];

const citationsChange = '+1';

const orders = [{
  name: 'TIE-TC 33',
  id: 33,
  title: 'Strike at Incom',
}, {
  name: 'TIE-TC 67',
  id: 65,
  title: 'The Siege of Maltar',
}, {
  name: 'TIE-TC 77',
  id: 75,
  title: 'Verpine Encounter, Part One',
}];

const competitions = [{
  id: '3312',
  name: 'Challenge’s Poetic Proficiency',
  ends: '2021-11-14',
  units: 'ISD-II Challenge',
  notes: 'Every two weeks LT Xylo Pethel will prompt you into a creative frenzy of poetic genius.',
},{
  id: '3301',
  name: 'Crossword Challenge',
  ends: '2021-09-30',
  units: 'Entire TC',
  notes: 'Alright pilots, strap into your fighters and drink your Bantha milk, it’s time to show off your knowledge with a crossword puzzle.',
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
  notes: 'Pilots earn monthly and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoSs earned.',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most singleplayer missions played.',
}];

// TODO confirm
const ACTIVITY = {
  // Honsou
  55973: {
    communication: 'Email, Discord',
    flightActivity: 'none',
    otherActivity: 'Tempest Squadron Admin, Post RtF projects',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: '',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'none',
    notes: '',
  },

  // Hermann
  6490: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: '',
  },  

  // Kalve
  1968: {
    communication: 'Discord, Email',
    flightActivity: 'none',
    otherActivity: 'Various Projects',
    notes: '',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivty: 'none',
    notes: '',
  },

  // Dempsey
  12945: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: '',
  },

  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'none',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'none',
    notes: '',
  },
  
  // Phalk
  6874: {
    communication: 'Discord',
    flightActivity: 'SP flying.',
    otherActivity: 'SP reviews',
    notes: 'Someone tell Phalk RtF is over!',
  },

  // Gisornator
  56116: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: 'On Leave',
  },

  // Hawksniper
  56160: {
    communication: 'none',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: 'On Leave',
  },
};

function appendActivityData(activityData, additionalActivityData) {
  console.log(activityData);
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
          Life in the Fleet: Cross training: Part Two.
          
          TC Officer: CMDR/CPT Honsou/Tempest/Wing X/ISD-II Challenge
          Assignment: Assault Frigate Mk.I Illustrious.
          Role: Squadron Maintenance.
          After nearly a week of mind-numbing theory in a briefing room, Honsou stood on the pristine hangar deck of the Illustrious, merely a fraction of the size of the main hangar deck of the ISD-2 Challenge. The 24 craft of the two squadrons arrayed in front of him, a spritely deck officer greeted him with a sharp salute and took Honsou to meet the rest of the maintenance crew. All humans save for one Ugnaught they referred to as stunty, the maintenance crew seemed like a well-oiled machine as they moved from one fighter to the next running internal, external and diagnostic checks on each in turn. Honsou shadowed Trisk the deck officer and observed his movements and processes with methodical precision. Honsou learned well from watching and had picked up most of the routine checks and how to report them by the end of the second shift rotation.


It was at the beginning of the third that brought the first surprise. An anomaly in the port side exhaust vent of defence squadron craft 2-3. The anomaly seemed to be a small fracture in the coolant coil. It was time to get down to the real business of learning how to disassemble a TIE craft and reassemble it. Honsou watching in awe as the crew went to work. The chassis of the craft was taken apart in barely a couple of minutes the loading droids and cradle system built into the hangar making the heavy lifting effortless. The deck officer stopped everyone at that point, much to Stunty’s disgust. He proceeded to explain what was happening and which parts had to be replaced and why. Honsou took this on board and made a mental note of everything.
As the following weeks passed Honsou learned more and more about each of the craft and all their individual systems and modular aspects. The only problem was that Stunty had taken a strong dislike to Honsou and the fact that his work had to be stopped every time something that Honsou had not seen before was discovered, so that it could be explained and demonstrated. Stunty had taken to calling Honsou something in his own language that Honsou knew was not flattering in the slightest.





          </em>
        </p>

        <p>
        Congratulations to the EHTC Flagship: ISD-II Challenge, TCCOM's Honour Guard: Tempest Squadron and TCCOM's Wingman: COL Phalk Sturm! Victory and clean sweep of "Raise the Flag 2021". Everyone is under orders to rest up this month!
        </p>

        <p>
          The Challenge Championship League: (We will finish this thing) The first round of the playoffs have been completed, Snax Attax have the first spot in the final for defeating Black Lightning of Thunder Squadron. The Temptations have won the second semi-final!
          The final will be an all Tempest affair, with Snax Attax vs The Temptations. Congratulations to Black Lightning for taking 3rd place!
        </p>

      </Intro>

      <Orders missions={orders}>
        <p>
          These are three of the missions we're
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
        RtF has been won! 
        Great work everybody! Now no-one can argue, WE ARE THE STORM!
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
