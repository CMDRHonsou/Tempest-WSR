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

const reportNumber = 4;
const startDate = '2021-07-27';
const endDate = '2021-08-09';
const submissionDate = '2021-08-10';

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
  notes: 'Imperial Storm is a turn based war-game that pits all three Battlegroups against the others over a map of the planetary systems that we are currently near.',
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
    flightActivity: 'Squadrons PvP/PVE; IS3 contributions; CCL games and training.',
    otherActivity: 'Tempest Squadron Admin.',
    notes: 'Been in sickbay myself for a large portion of these past two weeks.',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; IS3 contributions, CCL games and training.',
    otherActivity: 'none',
    notes: 'Another handful of Legions for LT Akreseus. IU Course added to Academic Record by the SOO : [TCCORE] - 89%',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; IS3 contributions, CCL games and training.',
    otherActivity: 'Completed Solohans Crossword Comp month 2; Did "The Challenge With Words" for this month; Continued to take part in the Trivia Grand Tour.',
    notes: 'Great couple of weeks of activity',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP/PvE; CCL games and training.',
    otherActivity: 'Rallying of the troops for Imperial Storm III',
    notes: 'Cheerleading for Imperial Storm!',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivty: 'Organized matches for the Temptations in CCL.',
    notes: '',
  },

  // Dempsey
  12945: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: 'On leave for a well deserved vacation.',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict and Squadrons PvE/PvP, racking up another 181 Legions for IS3',
    otherActivity: 'Sigma Squadron Banner + revisions; Random Wing X graphic; Voted and participated in Inferno Signal Scramble; Participated in Spot the Difference: Week 1&2; Drafted Wiki templates for manuals; Updating Wiki pages and templates; Submitted improvements for wiki content-diff display; Created Gonk image and animation; Project Minos Relevancy.',
    notes: 'Another truly inspiring week of activity.',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE; Solid contributions to IS3',
    otherActivity: 'Scheduling & flying for Challenge Championship League; Flying with Storm Knights in SFL',
    notes: '',
  },
  
  // Phalk
  6874: {
    communication: 'Discord',
    flightActivity: 'Handful of SP Battles.',
    otherActivity: 'Completed fiction for the Real Heroes of the Challenge. Updated Uniform. Wrote review for BoP-FCHG 2.',
    notes: 'Another Tempest member in sickbay these past two weeks, we worked hard in the simulators for IS3.',
  },

  // Gisornator
  56116: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Vacation',
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
          Unexpected Respite: A Honsou Story.
          Honsou groaned as he rolled over in his bed in the medical centre of the ISD-II Challenge.
          It had been almost two weeks since he had led Tempest and the rest of 'his' battlegroup away from Bunduki in Imperial Storm III.
          Although he was glad, from his glancing around the medical centre, that he and the rest of Tempest had not been required to report to the simulator deck.
          The Hammer had left their Homeworld completely undefended and Tempest had just taken it without a shred of resistance.
          Several members of Tempest were here and Honsou felt a surge of guilt, no anger within himself. Had he pushed them too hard? Or were they in need of a harsher
          training regimen? He would decide later, his thoughts still cloudy, he slipped back toward sleep's embrace.
          He jolted awake as his communicator chimed, EchoVII's voice sounded like she was yelling from two feet away but he allowed her to report.
          "Sir," she began "Uh, the COM wants to see you, urgently."
          It was expected... Honsou sat up and began to stretch, "Fine, advise Sil, I mean the COM that I will be with him shortly."
          A full ten minutes later, fussy med droids placated, Honsou stepped out of the medical centre and began towards the turbolifts.
          "What crazy move did the "old man" have in mind now, that only Tempest would suffice?" Honsou muttered to himself...


          </em>
        </p>

        <p>
          This past week saw Tempest entering the fray in Imperial Storm III. Taking the ISD-II Hammer's Homeworld of Mokivj with zero resistance! 
        </p>

        <p>
          The Challenge Championship League: Round Robin, concludes this week with a handful of games left to be played Snax Attax lead the pack at the time of writing this. 
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
        A quieter couple of weeks after the huge fights in IS3. Several members of the squadron in sickbay, I wish you all a speedy recovery and this week sees the return of LT Gisornator from vacation. Grab your gear LT we'll need you in the weeks to come.
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
