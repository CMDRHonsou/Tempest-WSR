/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
// import Citations from '../../components/citations';
// import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
// import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 10;
const startDate = '2021-11-29';
const endDate = '2022-05-15';
const submissionDate = '2022-05-16';

/*
const citations = [
  'TIE-TC 12',
  'TIE-TC 108',
  'TIE-TC 202',
  'XvT-TC 14',
  'XWA-TC 25',
];

const citationsChange = '-16';

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
*/

const competitions = [{
  id: '3361',
  name: 'The Chalquilla Cup II',
  ends: 'Someday',
  units: 'Entire TC',
  notes: 'A 3v3 fleet battle tournament between squadrons, hosted by Genie and Silwar Naiilo.',
}, {
  id: '3368',
  name: 'Legion\'s Challenging Time Trials Season 3',
  ends: '2022-06-01',
  units: 'Entire TC',
  notes: 'Kill LegionX three times as quickly as possible in Star Wars Squadrons.',
}, {
  id: '3389',
  name: 'The Challenge with Words',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Finish the word search as fast as possible.',
}, {
  id: '3377',
  name: 'TIE Fighter Total Conversion - Reimagined',
  ends: '2022-06-30',
  units: 'Entire TC',
  notes: 'Fly as much of the TFTC campaign as possible - with additional medals for art and fiction.',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}];

// TODO confirm
const ACTIVITY = {
  // Honsou
  55973: {
    communication: 'Email, Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Battles/Missions, BFII PvP/PvE, Star Conflict PvE',
    otherActivity: 'Tempest Squadron Admin, Two top-secret projects, Multiple TC and external competitions',
    notes: '',
  },

  // Akre
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE',
    otherActivity: 'Two top-secret projects, Multiple TC and external competitions',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvE, BFII PvE, Star Conflict PvP/PvE',
    otherActivity: 'Multiple TC competitions, EH based projects, Art/Graphics submissions',
    notes: 'Congratulations on the Gold Star of the Empire, long overdue!',
  },

  // Twin
  56184: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Multiple TC and external competitions',
    notes: '',
  },

  // Snacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Missions/Battles, BFII PvP/PvE, Star Conflict PvE',
    otherActivity: 'Multiple TC and external competitions, Flight leader activities',
    notes: '',
  },

  // Kertron
  56309: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivty: 'none',
    notes: 'Welcome to Tempest Squadron',
  },

  // Demps
  12945: {
    communication: 'Discord',
    flightActivity: 'SP Battles/Missions, Star Conflict PvP/PvE',
    otherActivity: 'Multiple TC and external competitions',
    notes: '',
  },

  // Rich
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE',
    otherActivity: 'Multiple TC and external competitions',
    notes: '',
  },

  // Morg
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Battles/Missions',
    otherActivity: 'Multiple TC and external competitions, Flight leader and SQXO activities',
    notes: '',
  },

  // Phalk
  6874: {
    communication: 'Discord',
    flightActivity: 'SP Battles/Missions.',
    otherActivity: 'Multiple TC and external competitions',
    notes: '',
  },

  // Capukki
  56310: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: 'Welcome to Tempest Squadron',
  },

  // Newt
  56197: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP/PvE, Star Conflict PvE',
    otherActivity: 'Multiple TC and external competitions, Numerous artwork/graphics submissions, heavy involvement in the AirLock Podcast and TC D&D campaign',
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
          The “action stations” klaxon sounded in all rooms of the ISDII Challenge. Honsou immediately stopped his Teräs Käsi training regimen, the sparing droid did not… “oof… Dank farrick!” Honsou exclaimed as the droid struck low to his midriff. “Training END.” he stated, slightly winded, and the droid returned to it’s neutral posture. Honsou recovered his towel and water from the bench at the side of the dojo and began to wipe the sweat from his brow as he departed and made for the commander’s briefing room. He was somewhat grateful that no-one had witnessed that faux pas. He would never live it down if certain crew members had seen…
Almost halfway to the briefing room it became apparent that the Challenge and the fleet was not in any danger. The familiar sounds of battle or even the cries of battle readiness were not echoing through the halls of the Star Destroyer. “Another kriffing drill.” Honsou muttered. He paused a moment taking in his surroundings and reaching out with his feelings. Yes, the general feeling on board was calm. None of the rank and file were experiencing the expected anxiety or undercurrent of fear that accompanied the trepidation before an engagement.
Honsou was not the last commander to arrive in the briefing room. Apparently, the alarm had quite literally caught Major Graf Djinn with his pants down… He arrived a few moments later, a clearly flustered stare of this had better be worth it fixed upon the Commodore. Vice Admiral Silwar Naiilo, as always, began to speak with his back to the assembled commanders of Wing X.
…Several standard hours later… Honsou and the rest of Tempest Squadron had completed their assigned duties, completing their part in the flight drills that the Vice Admiral had ordered. They headed for the Tempest Squadron quarters to remove their flight gear. Honsou noted Captain Morgoth exchanging words with newly promoted Captain Colo Delste. Probably complaining about the Spectre Advanced Missile Boats and their shortcomings, again. Honsou realised that he really should continue his proposal for the craft change for flight’s two and three. Afterall, they had the means, following Tusorix. Firebird Squadron had also just returned and General Stryker could be heard, quite clearly, expressing his disdain for the “Creative yet wholly against all Imperial protocol, comm chatter” that had been exchanged between Jaxx and Travis.
As Honsou returned to his personal quarters to complete his monthly report, his mind again followed the Tusorix thread and back, as always to that package for Grand Admiral Rapier. Why had the Imperial Sovereign Protector deemed it important enough to send Tempest Squadron on an errand? Thunder Squadron the newly nicknamed “Admiralzon Delivery Service” (someone found out about CPT LegionX’s pre-enlistment occupation) would have been more fitting. However, joking aside SA Kamjin had chosen Tempest and Honsou for a reason and it was really starting to gnaw at Honsou like a womp rat on a cadaver. “I may need to visit the ‘Drunken Admiral’ soon.” Honsou said to himself, almost absently.
          </em>
        </p>

        <p>
          A huge welcome to SL CapukkiOne and SL Kertron Seven, taking up the Tempest 2-2 and 3-3 positions respectively.
        </p>

        As we welcome CapukkiOne and Kertron Seven, we salute EchoVII and Gisornator as they depart for the Reserves aboard FRG-Phoenix. Thank you for everything you have done for Tempest!

        <p>
          Tempest Squadron are once again TCiB Champions! That's the last three in a row! Well done everyone! 
        </p>

      </Intro>

      {/*
      <Orders missions={orders}>
        <p>
          These are three of the missions we're
          {' close to earning citations on. Check our status on the '}
          <Link href="https://tc.emperorshammer.org/battleboard.php?sqn=45">Squadron Battleboard</Link>.
        </p>
      </Orders>
      */}

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      {/*
      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />
      */}

      <Closing>
        As we return to a standard monthly reporting format I would like to take the time to thank everyone involved in the Challenge Newsletter during the early months of the year. 
        Congratulations on everything you have achieved so far this year Tempest Squadron! 1st place TCiB with the ISDII Challenge also coming first and a hard fought close 2nd place in IS4.
        Lastly but by no means least, I extend massive congratulations to newly appointed WarCOM, VA Marenta and the ISDII Warrior for a well deserved first victory in the simulators!

        This is LC Honsou, CMDR of Tempest Squadron, singing off. "We Are The Storm!"
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
