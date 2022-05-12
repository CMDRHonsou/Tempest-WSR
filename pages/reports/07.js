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

const reportNumber = 7;
const startDate = '2021-09-07';
const endDate = '2021-09-20';
const submissionDate = '2021-09-21';

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
  id: '3289',
  name: 'Challenge Championship League',
  ends: '2021-08-08',
  units: 'ISD-II Challenge',
  notes: 'A 3v3 fleet battles league for pilots of the Challenge',
  highlight: true,
},{
  id: '3320',
  name: 'Tempest King of the Mountain 2 - Electric Boogaloo',
  ends: '2021-09-30',
  units: 'Tempest Squadron',
  notes: 'What do you do when you are the undisputed best Squadron in the TC...? Find out whos the undisputed best of the best! (to conclude after RtF)',
  highlight: true,
},{
  id: '3322',
  name: 'Documentation Challenges',
  ends: '2021-09-30',
  units: 'ISD-II Challenge',
  notes: 'Our COM requires help getting the filing in order, likely due to a chalqilla related incident. Create your own entry for the EH Wiki and be immortalised in the annals of the TC',
},{
  id: '3319',
  name: 'Starship Designers',
  ends: '2021-10-18',
  units: 'Entire TC',
  notes: 'LT Scarlette invites the entire TC to design their very own starship, from blueprints to 3D modelling, get those creative juices flowing',
},{
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
    flightActivity: 'Squadrons PvP/PVE; CCL training',
    otherActivity: 'Tempest Squadron Admin',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'none',
    notes: '',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; CCL training',
    otherActivity: 'Trivia Grand Tour; Crossword; Poetry Competition; Cadet Cup League debriefing/video reviewing for Storm Knights',
    notes: '',
  },

  // Hermann
  6490: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'RtF preparation',
    notes: 'Wecome back Major',
  },  

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'Wiki work, Updated Eagle and Thunder Squadron patch suggestions, Won this weeks Spot the Difference, Various Projects',
    notes: 'Promoted to Major. Congratulations!',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivty: 'none',
    notes: '',
  },

  // Dempsey
  12945: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'Exploring the Star Wars universe in VR',
    notes: '',
  },

  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Working towards some competition entries at present',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; Flying in 3PO league',
    otherActivity: '',
    notes: '',
  },
  
  // Phalk
  6874: {
    communication: 'Discord; Email',
    flightActivity: '10 SP Battles.',
    otherActivity: 'Participated in uniform competition, Trivia, crossword & spot the difference as well as “unofficially” testing 2 new battles and 2 reviews',
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
    communication: 'none',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: '',
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
          Life in the Fleet: Cross training: Part one.
          
          TC Officer: CMDR/CPT Honsou/Tempest/Wing X/ISD-II Challenge
          Assignment: Assault Frigate Mk.I Illustrious.
          Role: Squadron Maintenance.
        As resources get stretched thin, we need our pilots to perform more than their flight duties. Challenge Order 0539 has been enacted. Pilots will be reassigned to serve on auxiliary ships within the fleet to train new skills that will be needed in case reinforcements do not come in time.
        Honsou received notification following the ISD-II Challenge’s victory in Imperial Storm III. He was to be assigned to the Assault Frigate Mk.1 Illustrious. He didn’t mind this in the slightest. During Imperial Storm, Honsou had made a gambit and taken this very vessel with his Tempest Squadron to hit the ISD-II Hammer’s home world of Mokvij. Better yet he had found it unguarded and taken it in the closing stages of the exercise aiding in the victory for the ISD-II Challenge. 
        Honsou would be assigned to the maintenance crew of the Illustrious’ hangar deck. Clearly command had paid attention to his time working in the shipyards on Corellia before he joined the TIE Corps. This would be a change of pace from his Squadron Commander duties with Tempest and he’d get to learn and tinker with the ships he’d always wanted to work on. The TIE craft of the Illustrious’ defence squadron along with the TIE/Defender’s and Spectre Missile Boats of Tempest squadron. 
        Of course, the first few days of this assignment were beyond boring for Honsou. Being sat in a briefing room and going through hours upon hours of Induction holos for crew on board the Illustrious. Everything from the ship’s layout to emergency procedure. This was followed for, again, what seemed like an eternity of further basic theory on the Twin Ion Engine, the TIE/Ln Space Superiority Starfighter series and the history of Sienar Fleet Systems.




          </em>
        </p>

        <p>
        MAJ Hermann has come out of retirement to fight for Tempest Squadron and the ISD-II Challenge in "Raise the Flag" this is great news. Welcome back to Tempest Squadron. 
        </p>

        <p>
          The Challenge Championship League: The first round of the playoffs have been completed, Snax Attax have the first spot in the final for defeating Black Lightning of Thunder Squadron. The Temptations have won the second semi-final!
          The final will be an all Tempest affair, with Snax Attax vs The Temptations. Black Lightning will be facing Fire Foul for 3rd place!!
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
        RtF in 10 days! This is the BIG ONE! Prepare yourselves!
        As always, great work everybody. We are the storm!
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
