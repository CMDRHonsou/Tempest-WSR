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

const reportNumber = 3;
const startDate = '2021-07-20';
const endDate = '2021-07-26';
const submissionDate = '2021-07-27';

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
  title: 'Verpine Encouter, Part One',
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
  id: '3262',
  name: 'Trivia for the Challenged 2021 - Season 3',
  ends: '2021-07-31',
  units: 'ISD-II Challenge',
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
    flightActivity: 'Squadrons PvP/PVE; 1-2-1 FB training; Group FB training; IS3 contributions; CCL games and training.',
    otherActivity: 'Tempest Squadron Admin, ISIII tactical decision making.',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; Group FB training; IS3 contributions, CCL games and training.',
    otherActivity: '',
    notes: 'Another handful of Legions for LT Akreseus. TCCORE (finally) completed, pending grading!',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: '29 MP games Squadrons PvP/PvE and Star Conflict PvE. Flew TIE Free 179 for IS3.',
    otherActivity: 'Updated uniform (again).',
    notes: 'Name change: LCM Colo "Coldsnacks" Deleste.',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP/PvE; CCL games and training.',
    otherActivity: 'Rallying of the troops for Imperial Storm III',
    notes: 'Promoted to the rank of CPT, congratulations!',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; CCL training',
    otherActivty: '',
    notes: 'Promoted to the rank of CM, congratulations!',
  },

  // Dempsey
  12945: {
    communication: 'Discord',
    flightActivity: 'Plenty of Single Player flying again (I make it 37 Battles this week), flying for IS3',
    otherActivity: 'Trivia Grand Tour, crossword competition, a "last minute" submission for "Heroes of the Challenge"',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict and Squadrons PvE, racking up another 70 Legions for IS3',
    otherActivity: 'Created a potential patch update for Thunder Squadron; Helped Inferno with the beginnings of a potentially new Helmet design; Awaiting IU results for MCBS; Submitted a Tempest Squadron competition (Confirmed); Updated uniform and aided others; Updating Wiki pages',
    notes: 'Another awesome week of activity and a much deserved CoE for your efforts.',
  },

  // Phalk
  6874: {
    communication: 'Discord, Email',
    flightActivity: 'Several SP Battles and XWA PvE.',
    otherActivity: 'Submitted reviews for flown battles; Participated in TC Trivia; Participated in Guess the Pilot by their Uniforms Competition; Participated in Inferno Signal Scramble; Wiriting for the fiction competition Real Heroes of the Challenge.',
    notes: 'Promoted to the rank of COL, congratulations! Only 17 years late!',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; Solid contributions to IS3',
    otherActivity: 'CM Morgoth has completed a new squadron patch for Sin and been working on a new ship patch for the Warrior',
    notes: 'Promoted (finally) to the rank of CM, congratulations!',
  },

  // Gisornator
  56116: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, 1-2-1 PK training.',
    otherActivity: 'Player Farming',
    notes: 'CCL games and training; On leave until 8th August.',
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
          Storm Front: A Honsou Story.
          There are some things in life that give us such a sense of excitement that it feels more like trepidation. The adrenaline rush so strong that we feel nauseous.
          It was this feeling that Honsou felt as he addressed Tempest Squadron in the pristine light of the briefing room.
          "I expect better than your best" Honsou's tone was sharp as a Nexu's tooth. "We have been sent *REDACTED* to reinforce *REDACTED*. It is our role to ensure *REDACTED*"
          This set of turns made by the COMs of the TC Fleet were clearly meant to be big final pushes for glory in the third Imperial Storm tactical simulation and combat exercise.
          Honsou saluted his Squadron, "Let's make such an impact in the simulators that *REDACTED* feel it in their bunks for weeks to come!"
          Turning on his heels, Honsou led his squadron to the simulator deck. His hands still shaking with barely contained adrenaline, yearning for the fight to come.
          He only wished that it was *REDACTED* that they were going to be competing against.


          </em>
        </p>

        <p>
          This week will see Tempest entering the fray in Imperial Storm III. Details are *REDACTED* due to prying eyes! 
        </p>

        <p>
          The Challenge Championship League continues and saw Snax Attax defeat the Temptations and 'TIE' with Fire Foul. 
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
        Tempest continues to show why we are the jewel in the Challenge crown, We have gone from five to a whopping seventeen squadron citations in the last few weeks!
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
