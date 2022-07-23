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

const reportNumber = 12;
const startDate = '2022-06-01';
const endDate = '2022-06-30';
const submissionDate = '2022-07-23';

/*
const citations = [
  'TIE-TC 12',
  'TIE-TC 19'
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
  id: '3412',
  name: 'Raven Squadron Patch',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'GN Stryker invites the TC to design a Patch for the 3rd Infiltrator Squadron, Raven Squadron.',
},{
  id: '3398',
  name: 'Squadrons Feats of Strength I',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'COL Genie lays down the gauntlet to the pilots of the TC. There are EIGHT feats of strength with increasing difficulty (and decreasing sanity for the pilot involved).',
},{
  id: '3361',
  name: 'The Chalquilla Cup II',
  ends: 'Someday',
  units: 'Entire TC',
  notes: 'A 3v3 fleet battle tournament between squadrons, hosted by Genie and Silwar Naiilo.',
},{
  id: '3405',
  name: 'Challenge Against Huttese',
  ends: '2022-07-30',
  units: 'ISDII Challenge',
  notes: 'CM Ryuzokin invites members of the Challenge to Cards Against Humanity. Matches will be on Saturdays at 7 PM Eastern for three weeks.',
},{
  id: '3408',
  name: 'The Great Bounty Hunting Race',
  ends: '2022-08-15',
  units: 'Entire TC',
  notes: 'CM KEBLAOMEGA invites you to take part in this very interesting bounty hunting competition, which has a lot in common with the Great Hunts of old Mandalore.',
},{
  id: '3389',
  name: 'The Challenge with Words',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Finish the word search as fast as possible.',
},{
  id: '3275',
  name: 'MP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
},{
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
},{
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
    flightActivity: 'Squadrons PvP/PvE',
    otherActivity: 'Tempest Squadron Admin, Two top-secret projects, Multiple TC and external competitions',
    notes: '',
  },

  // Akre
  56005: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvP/PvE, SP Battles',
    otherActivity: 'EH based projects, Art/Graphics submissions, Reviewed and submitted bug report for new TIE Battle',
    notes: '',
  },

  // Twin
  56184: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'ReMob fiction writing',
    notes: '',
  },

  // Snacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Missions/Battles, BFII PvP/PvE',
    otherActivity: 'Multiple TC and external competitions, Flight leader activities, Several Battle and Mission review',
    notes: 'Completed and passed SM/5',
  },

  // Kertron
  56309: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvE',
    otherActivty: 'none',
    notes: 'Congratulations on LT promotion',
  },

  // Demps
  12945: {
    communication: 'Discord',
    flightActivity: 'SP Missions',
    otherActivity: 'Multiple TC competitions',
    notes: '',
  },

  // Rich
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Nothing quells the enthusiasm of the Challenge Cheerleader!',
    notes: '',
  },

  // Morg
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Battles',
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
    flightActivity: 'Squadrons PvP',
    otherActivity: 'none',
    notes: 'Congratulations on LT promotion',
  },

  // Newt
  56197: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP/PvE',
    otherActivity: 'Operation Wholesome lead artist, Numerous artwork/graphics submissions, heavy involvement in the AirLock Podcast and TC D&D campaign',
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
          "Moving Day-Something Fowl: A (not quite) Honsou Story. Pt 1"
          <p>
          The atmosphere in the main hangar of the ISDII Challenge was electric with activity. The day had finally come for the Infiltration Wing to claim their place aboard the newly assigned MC-40 that had arrived to join with Battle Group III. Her sleek, smooth, almost bulbous hull stood out like a sore thumb against the strong angular lines of the Imperial vessels of the fleet. All of the fighters and support craft of Firebird and Eagle Squadrons had to be moved over to the MC-40 along with the pilots and all of their belongings and equipment.
The transports and shuttles had already shifted the heavy gear and the crew of the MC-40 along with the assigned droids were hard at work putting everything in place for the arrival of Firebird and Eagle Squadrons. Without warning a loud Bawk sound erupted through the hangar bay. The cacophony stopped immediately. A sound like a robotic rendition of an enormous Endorian Brahma, also known as a tip-yip in Ewokese, a species of fowl that originated in the forests of Endor. These domesticated animals were kept by the Ewoks primarily as a source of food, and their meat was considered delicious. However, Captain Travis of Firebird Squadron had developed a fondness for these creatures and now it seems had requested his personal, jet black, R2 unit use the Brahma’s cry as some kind of replacement for it's more traditional beeps and boops. "BAWK" the droid announced it's presence again to the hangar's occupants. Several confused engineers and deck officers started looking around, understandably disturbed by the sound that was seemingly getting closer and louder. “Now don’t y’all stop workin’ on account of me and F0-H07n (fo-horn) here. Get back to it.” It was Travis alright, there was no mistaking that accent. Honsou smiled to himself, Travis had a way with the crew members, a charismatic yet dangerous war-dog. Honsou respected that. A thought occurred to him and his smile uncharacteristically became wide and he chuckled to himself as he continued his project work for the MC-40s little hangar issue, which was also unironically the actual issue. 
</p>  
          to be continued...
          </em>
        </p>

        <p>
          Congratulations to LT CapukkiOne and LT Kertron Seven, on your LT promotions.
        </p>

        <p>
          Tempest Squadron have completed all ReMob tasks laid out for the second year running. Again with 100% participation from the squadron Well done everyone!
          Special callout to LT TwinJedi for not giving up when their PC motherboard died. Completing a fiction entry, on a work laptop, as their contribution!
          Also further congratulations to all Squadrons that completed ReMob tasks, it was a super tough one this year.
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
        A later than usual monthly report but I was focusing on ReMob and wanted to congratulate every single member of the squadron as soon as it was complete. Also to show off our beautiful new Tempest-Class TIE/ca's. (many thanks to Kalve for the artwork)
        <p>
        This is LC Honsou, CMDR of Tempest Squadron, singing off. "We Are The Storm!"
        </p>
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
