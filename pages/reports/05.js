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

const reportNumber = 5;
const startDate = '2021-08-10';
const endDate = '2021-08-23';
const submissionDate = '2021-08-26';

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
  id: '3308',
  name: 'Tempest: The Coming Storm',
  ends: '2021-08-31',
  units: 'ISD-II Challenge',
  notes: 'CPT Kalve Ryder, Soon to be Airlocked and/or demoted (read the comp Addendum), invites you to create a work of fiction for the marvels and mishaps of testing our new Spectres.',
  highlight: true,
},{
  id: '3294',
  name: 'Imperial Storm III',
  ends: '2021-07-30',
  units: 'Entire TC',
  notes: 'Imperial Storm is a... Oh nevermind, we won! Congratulations Tempest and the rest of the Challenge!',
  highlight: true,
}, {
  id: '32389',
  name: 'Challenge Championship League',
  ends: '2021-08-08',
  units: 'ISD-II Challenge',
  notes: 'A 3v3 fleet battles league for pilots of the Challenge',
  highlight: true,
}, {
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
  id: '3302',
  name: 'Life in the Fleet: Cross training',
  ends: '2021-09-15',
  units: 'ISD-II Challenge',
  notes: 'CM Dynamus invites you to create a work of fiction based around your Pilots reassignment to an auxiliary ship in the fleet.',
}, {
  id: '3297',
  name: 'Guess the pilot',
  ends: '2021-08-30',
  units: 'Entire TC',
  notes: 'Every week you will be presented with five uniforms. You have to guess to which pilot that uniform belongs to.',
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
    flightActivity: 'Squadrons PvP/PVE; CCL games and training.',
    otherActivity: 'Tempest Squadron Admin.',
    notes: 'Still been in sickbay for a large portion of these past two weeks.',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; CCL games and training.',
    otherActivity: 'none',
    notes: 'LCM promotion, congratulations!',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; CCL games and training.',
    otherActivity: 'none reported',
    notes: '',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP/PvE; CCL games and training.',
    otherActivity: 'none',
    notes: '',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivty: 'Scheduling for Challenge Championship League.',
    notes: '',
  },

  // Dempsey
  12945: {
    communication: 'Discord',
    flightActivity: '10 SP Battles',
    otherActivity: 'Trivia Grand Tour and Spot the Difference competitions',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict and Squadrons PvE/PvP',
    otherActivity: 'Wiki page creations and updates (inc. EH Plotline); Various wiki graphics; Wiki main page redesign (pending); Project Minos Relevancy.',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; Flying for Challenge Championship League; Flying with Storm Knights in SFL; Flying in 3PO league',
    otherActivity: 'Scheduling for Challenge Championship League',
    notes: '',
  },
  
  // Phalk
  6874: {
    communication: 'Discord; Email',
    flightActivity: 'SP Battles.',
    otherActivity: 'Temporary COM whilst Silwar on leave.',
    notes: '',
  },

  // Gisornator
  56116: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; Flying for Challenge Championship League',
    otherActivity: 'Receiving important advice on how to PK in SWS.',
    notes: '',
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
          Vindicated: A Honsou Story.
          A roll of the dice, drawing the next card, going all in... All of these phrases and many more were linked to gambling in all it's guises.
          However Honsou hadn't gambled credits or even a starship. He had gambled with the lives of Tempest Squadron and the rest of 'his' Battlegroup 1A.
          Which was a squadron of academy graduates and the crew of the A/FRG Illustrious... However Honsou's bold move to take Mokivj had paid off, Tempest and the Illustrious
          had avoided mutually assured destruction at Bunduki, taken the ISD-II Hammer's homeworld and seen out the rest of Imperial Storm III with the loss of but a single Spectre.
          Although that was entirely down to the COM for insisting that Honsou send a Tempest craft instead of one of the 'chumps' to scout Kammia in the closing rounds.
          In either case Honsou had an opening in Tempest Squadron and he knew just who to fill it with...

          First, Honsou needed a word with the COM. Which, of course, would have to wait. The "old man" did like to celebrate and this... THIS GREAT VICTORY was worth celebrating.
          Sparing a thought for poor LCM Xylo Pethel and all the empty Chalquilla bottles he was going to get charged with stacking after the festivities, Honsou entered the Challenge's main cantina.



          </em>
        </p>

        <p>
          Imperial Storm III is over. Congratulations to Tempest Squadron and the rest of the ISD-II Challenge crew for taking the ISD-II Hammer and ISD-II Warrior to task! 
        </p>

        <p>
          The Challenge Championship League: The playoffs have begun will Snax Attax taking the first spot in the final. 
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
        Another fairly quiet couple of weeks after the huge fights in IS3. Congratulations once again to all aboard the ISD-II Challenge. Your winners medals are coming out as I type this!
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
