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

const reportNumber = 13;
const startDate = '2022-07-01';
const endDate = '2022-07-31';
const submissionDate = '2022-08-13';

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
  id: '3436',
  name: 'Design the Ship and Squadron Mascots',
  ends: '2022-11-30',
  units: 'Entire TC',
  notes: 'COL Genie invites the TC to create artworks of the new mascots for the Ships & Squadrons.',
},{
  id: '3430',
  name: 'Infiltrator Wing Day!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'GN Stryker invites the TC to celebrate the IW Anniversary by flying outdated, inferior craft.',
},{
  id: '3418',
  name: 'TIE Fighter Mineracing!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Help COL Aardvark with his ongoing minelayer issue.',
},{
  id: '3417',
  name: 'Deal me in!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Play Pazaak with VA Marenta.',
},{
  id: '3416',
  name: 'Emperors Hammer at War!',
  ends: '2022-09-30',
  units: 'Entire TC',
  notes: 'CPT Vapen Vanman invites the TC to get to grips with the latest supported gaming platform, Empire at War.',
},{
  id: '3398',
  name: 'Squadrons Feats of Strength I',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'COL Genie lays down the gauntlet to the pilots of the TC. There are EIGHT feats of strength with increasing difficulty (and decreasing sanity for the pilot involved).',
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
  id: '3359',
  name: 'MP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
},{
  id: '3358',
  name: 'COOP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
},{
  id: '3360',
  name: 'SP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}];

// TODO confirm
const ACTIVITY = {
  // Honsou
  55973: {
    communication: 'Email, Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Missions',
    otherActivity: 'Tempest Squadron Admin, Top-secret project, Multiple TC and external competitions',
    notes: '',
  },

  // Akre
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvP/PvE',
    otherActivity: 'EH based projects, Art/Graphics submissions',
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
    otherActivity: 'Multiple TC and external competitions, Flight leader activities, Battle and Mission reviews',
    notes: 'Appointed SQXO',
  },

  // Kertron
  56309: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivty: 'none',
    notes: '',
  },

  // Demps
  12945: {
    communication: 'Discord',
    flightActivity: 'SP Missions',
    otherActivity: 'Multiple TC competitions',
    notes: '',
  },

  // Morg
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Missions',
    otherActivity: 'Multiple TC and external competitions, SP Mission Reviews, Flight leader activities',
    notes: 'Stepped down from SQXO',
  },

  // Phalk
  6874: {
    communication: 'Discord',
    flightActivity: 'SP Battles/Missions.',
    otherActivity: 'Multiple TC and external competitions, SP Battle & Mission Reviews',
    notes: '',
  },

  // Capukki
  56310: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'none',
    notes: '',
  },

  // Newt
  56197: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP/PvE',
    otherActivity: 'Numerous artwork/graphics submissions, heavy involvement in the AirLock Podcast and TC D&D campaign',
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
          "Moving Day-Something Fowl: A (not quite) Honsou Story. Pt 2"
          <p>
          The MC-40 was designed to hold a single squadron of fighter sized craft alongside their support and shuttle craft. It was puzzling to Honsou as he looked over the schematics for the vessel, if there was space onboard to carry 650 marines as passengers, surely, they were not all for boarding defence and would need some method of deployment. However, that would mean forgoing the single squadron of fighters and having transports in the hangar… Rebels really didn’t think these things through, he thought to himself, absently shaking his head slightly.   
          Honsou had heard a couple of suggestions for how to accommodate the second squadron. The first was, unfortunately just a plainly bad idea. The plan was to mount external "umbilicals" for the fighter's. Whilst in theory this was a good method of having them able to scramble very quickly, only the Gozanti-class cruiser had hyperspace capable umbilical docking clamps and they were very specifically designed for TIE fighters. The hit and run tactics of the Rebel Alliance meant that their fighters were all hyperspace capable so this eventuality had not been considered by their command staff when piecing together their rag-tag fleets. The other plans that Honsou had heard mentioned were similar in scope to his own, however he doubted anyone had actually taken the time to research the technical feasibility and careful placement of the additional hangar space.  
          Honsou finished his two detailed plans for the hangar alterations and allowed himself another chuckle as he entered the name for the MC-40 into his Datapad. The TIE Corps had just finished "Sausage Week" a week for celebrating all the various delicious varieties of sausage available throughout the galaxy. A common favourite from the Core to the Outer Rim was the Nerf meat Bratwurst, affectionately known as the Nerfbrat. The recent memory of these tasty sausages made Honsou's mouth water but it was the combination of the new sound made by Travis' droid, the name of the sausage, the almost sausage shaped profile of the MC-40 and the Infiltrator Wing's love for avian species that had led to a wonderful name for her. 
          MC-40 Bawkwurst. 
</p>  
          to be continued...
          </em>
        </p>

        <p>
          We wish our friend CPT Richlet a fond farewell, who has transferred to Raven Squadron to assist with standing-up the new Infiltrator Wing Squadron.
          Also this month we say goodbye to LC Denys Elara as she heads off to her new assignment in the fleet and we salute her departure.
        </p>

        <p>
          I would finally like to welcome our new ficticious Wing Commander: GN Allen "Ace" Chanti.
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
        There are a number of Squadron Patch and Banner competitions ongoing for the next couple of weeks, too many to include them all above, take a look in the Competitions Centre for more info.
        Steady as she goes Tempest, another season of TCiB starts very soon and RtF in six weeks or so.
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
