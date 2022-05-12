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

const reportNumber = 6;
const startDate = '2021-08-31';
const endDate = '2021-09-06';
const submissionDate = '2021-09-08';

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
    flightActivity: 'Squadrons PvP/PVE; CCL training.',
    otherActivity: 'Tempest Squadron Admin.',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; CCL training.',
    otherActivity: 'none',
    notes: '',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; CCL training.',
    otherActivity: 'none reported',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'Currently working on various Projects (inc. Minos Relevancy), though some others are undisclosed',
    notes: 'Awarded Order of the Vanguard for 22nd Anniversary as a member of the TIE Corps and became Flight Leader',
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
    flightActivity: 'none',
    otherActivity: 'Trivia Grand Tour and Spot the Difference competitions',
    notes: 'Second place for the August SP Killboard, Congratulations',
  },

  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP - SCFL participation',
    otherActivity: 'Working towards some competition entries at present',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; Flying for Challenge Championship League; Flying with Storm Knights in SCFL; Flying in 3PO league',
    otherActivity: 'Scheduling for Challenge Championship League; Wordsearch',
    notes: '',
  },
  
  // Phalk
  6874: {
    communication: 'Discord; Email',
    flightActivity: '5 SP Battles.',
    otherActivity: 'Participated in uniform competiton, Trivia, crossword & spot the difference as well as “unofficially” testing 2 new battles',
    notes: '',
  },

  // Gisornator
  56116: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; Flying for Challenge Championship League',
    otherActivity: '',
    notes: '',
  },

  // Hawksniper
  56160: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Congratulations on your promotion to fully fledged Lieutenant.',
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
          Old blood for new: A Honsou Story.
          Honsou stood behind his desk, hands clasped behind his back. "Congratulations Lieutenant." He addressed Tempest's newest addition LT Hawksniper.
          "You have been with Tempest less than a week and already earned your wings. This is exactly what I expect from the pilots that serve in this squadron."
          Honsou hid a smile, he knew the LT from some time ago, they had served together and Honsou knew exactly the kind of ambitious, hard working individual he was.
          Honsou dismissed the LT. "Echo, please ask Richlet and Kalve to join me here in 10 minutes." Always the model XO, she made the calls without question.
          She was efficient, Honsou wondered if her latent force abilities were almost precognative and she was already going to make the call before he spoke.

          Captains Kalve Ryder and Richlet sat opposite Honsou, all three men drinking that familiar clear alcohol with the oil-like sheen on the top, Chalquilla.
          "I understand your reasoning Richlet and I will honour your request. Kalve make ready to take lead of Flight II with immediate effect."
          Richlet, his duties as head chef aboard the Challenge becoming more demanding, was stepping down from the Flight Leadership position. Honsou had decided that Kalve,
          for better or worse, would take his place before even asking. However it was polite to ask and Kalve had agreed. So that saved Honsou making any 'demands' of the CPT.
          "Well gentlemen, RtF is coming in around three weeks. Let's begin preparations. Dismissed."
        



          </em>
        </p>

        <p>
        CPT Kalve Ryder has been awarded the Order of the Vanguard for his 22nd Anniversary as a member of the TIE Corps and become Flight Leader of Flight II. Congratulations and many thanks CPT! 
        </p>

        <p>
          The Challenge Championship League: The playoffs have begun, Snax Attax have the first spot in the final for defeating Black Lightning of Thunder Squadron. Can The Temptations join them?
          Find out tomorrow as they take on Fire Foul of Firebird Squadron in the second semi-final! 
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
        Another big welcome to LT Hawksniper. In and promoted within the week, great to see.
        As always great work everybody. We are the storm!
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
