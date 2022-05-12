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

const reportNumber = 2;
const startDate = '2021-07-13';
const endDate = '2021-07-19';
const submissionDate = '2021-07-21';

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
    flightActivity: 'Squadrons PvP/PVE; 1-2-1 FB training; Group FB training; IS3 contributions',
    otherActivity: 'Tempest Squadron Admin',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; Group FB training; IS3 contributions',
    otherActivity: '',
    notes: 'Another handful of LoCs for LT Akreseus. Start thinking about taking TCCORE for your LCM promotion!',
  },

  // Neko
  55783: {
    communication: 'COM check-ins',
    flightActivity: 'n/a',
    otherActivity: 'Transferred to Thunder Squadron to promote activity.',
  },

  // Iam
  55785: {
    communication: 'COM check-ins',
    flightActivity: 'n/a',
    otherActivity: 'Transferred to Thunder Squadron to promote activity.',
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
    flightActivity: 'Plenty of Single Player, flying for IS3',
    otherActivity: 'Trivia Grand Tour this week and last, crossword competition',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvP/PvE and Squadrons; IS3',
    otherActivity: 'Round 8 of Inferno Squadron Scramble, created image for new TC website (Figma/Blender/Photoshop), created UV Template for editing Pilot Helmet face mask, updating Wiki pages',
    notes: 'Another great week of activity!',
  },

  // Phalk
  6874: {
    communication: 'Discord, Email',
    flightActivity: 'TIE Free 224 for IS3. XWA Free 66 *a zillion times* for IS3.XVTTC91.',
    otherActivity: 'Submitted reviews for flown battles. Participated in TC Trivia. Participated in Guess the Pilot by their Uniforms Competition. Participated in Inferno Signal Scramble. Completed Solohan’s Crossword Puzzle. Wiriting for the fiction competition Real Heroes of the Challenge. Recevied my Platinum COMPOST Card from LC Tempest.',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; Star Conflict PvE for ISIII 16 MP games.',
    otherActivity: 'Passed SM/5 test',
    notes: 'LCM Morgoth is helping to build up our numbers in IS3. Also he passed SM/5 test a few days ago, but received confirmation this week.',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: '26 MP games. Flew TIE Free 224 for IS3. Flew XWA Free 66 (at least twice).',
    otherActivity: 'Updated uniform (again). Participated in the “Challenge with Words” competition, and Solohan’s crosswords.',
    notes: 'LCM Coldsnacks is one of our best contributors in the flight to the effort of IS3.',
  },

  // Gisornator
  56116: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, 1-2-1 PK training.',
    otherActivity: 'Player Farming',
    notes: 'Picking up momentum and taking part in the Challenge 3v3 League.',
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
          Storm’s Ire: A Honsou Story.
          There is something raw and powerful within the emotions of anger and hatred! Honsou had always known this, what he couldn’t explain was the strange things that happened around him whenever he let these emotions take over… couldn’t explain, until recently.
          “Where are they!” Honsou bellowed, it was rhetorical and the three officers arrayed in front of him stood at ease knew better than to answer. Honsou was not one to take interruption lightly.
          “Hiding… Hiding from a superior force! Biding their time, they’d say!” Honsou continued, not lowering his voice. The final syllable was followed by a scoff of sorts and poignant roll of the eyes.
          “Find them, I want to know where they have been hidden in their blasted fleet!” This time the last words were accompanied by a sound like thunder as Honsou’s fists slammed into his plasteel desk! The room was suddenly dark then reilluminated a moment later. In the same instant two chairs buckled as if under enormous pressure several light panels sparked and shorted out. A distressed screech of binary came from the droid in the corner as it’s motivator failed and a small explosion was followed by smoke from one of it’s many compartments.
          The three officers stood, motionless. Only Phalk gave a wry smile, barely a twitch of the lip but it was enough for Honsou to know that the Flight Leader knew exactly what had just happened.
          Honsou sat down heavily and steepled his fingers, his tone now hushed and menacing. A palpable wave of malice washing across the room as he spoke.
          “I want to know where Rho are hiding and seeing as our COM has seen fit to keep us back with the Challenge, we have the opportunity to use whatever means possible to find out where they are based. Find them… Dismissed.”
          As Echo, Richlet and Phalk turned to leave, Honsou drew a deep breath… It was high time he visited the training dojo, he had some pent up aggression to expel…


          </em>
        </p>

        <p>
          ReMob awards are have now been awarded. Don't you all look handsome with your new shiny TUAs, MUAs and IS-GWs.
          Well done Tempest Squadron. You are the first squadron to hold both of these coveted new medals!
        </p>

        <p>
          The Challenge Championship League began this past week and saw Tempest Squadron's own Temptations defeat Inferno Squadron's Hade's Hellfire
          2-0 in two thrilling matches. In which, I am proud to say, LT Gisornator racked up an impressive 30+ confirmed kills.
          This week will see both of the Tempest teams go head to head... 
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
        Tempest continues to show why we are the jewel in the Challenge crown!
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
