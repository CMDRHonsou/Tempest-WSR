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

const reportNumber = 9;
const startDate = '2021-11-29';
const endDate = '2022-05-11';
const submissionDate = '2022-05-12';

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
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Tempest Squadron Admin, Post RtF projects, CCL Final',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Post RtF projects, CCL Final',
    notes: 'Backdated medals received',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Trivia, Wordsearch, Crossword',
    notes: 'Backdated medals received',
  },

  // TwinJedi
  56184: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'CCL Final',
    notes: 'A warm welcome to Tempest, way to hit the ground running LT!',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'BFII and Star Conflict PvE',
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
    otherActivity: 'Trivia, CCL Final',
    notes: 'Backdated medals received',
  },

  // Phalk
  6874: {
    communication: 'Discord',
    flightActivity: 'SP flying.',
    otherActivity: 'SP bug report, Trivia',
    notes: 'Congratulations on not one, TWO Gold Stars of the Empire! (better late than never)',
  },

  // Gisornator
  56116: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: 'On Leave, Backdated medals received',
  },

  // Hawksniper
  56160: {
    communication: 'none',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: 'Backdated medal received',
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
            Life in the Fleet: Cross training: Part Three.
            
            TC Officer: CMDR/CPT Honsou/Tempest/Wing X/ISDII Challenge
            Assignment: Assault Frigate Mk.I Illustrious.
            Role: Squadron Maintenance.
            Several weeks had passed and Trisk had arranged for Honsou to take the TIE Corps examination for Hangar and Maintenance Crew. Stunty had taken his opportunity to get back at Honsou and set about an elaborate sabotage of the examination. His plan, to have one of the loader droids malfunction, causing significant damage to the craft. Whilst it may injure Honsou, it would be worth the exam failure and charges wrought for damages to the craft. What Stunty hadn’t banked on was that Honsou is a member of the Dark Brotherhood and a competent force user. So, when the loader droid did malfunction Honsou was able to react with inhuman speed and reflexes and roll to the side before he was crushed against the TIE craft’s hull by the malfunctioning tracked droid. Reaching out with his right hand Honsou was able to hold the droid in a vice like grip, preventing it from impacting the hull. With his left hand Honsou was able to reach out with the force and deactivate the droid before any further chaos ensued. With the loader droid disabled, Honsou worked to complete the allotted tasks set before once again calling on his powers to elevate the Solar panel held by the loader droid into its correct position.
            Stunty had witnessed the show along with the rest of the hangar crew and could not hide his guilt from Honsou’s incandescent rage upon completion of the exam. The Ugnaught pleaded his innocence to both Honsou and Trisk. Honsou looked to Trisk who frowned deeply then nodded once. Immediately there was a crack from Honsou’s sidearm followed by what could only be described as the squeal of an infant nerf, then, silence. Stunty lay dead and Honsou holstered his weapon and departed for his quarters.
            The following rotation Deck Officer Trisk greeted Honsou, again with a sharp salute, handed him a datacard confirming his qualification and thanked Honsou for his time aboard the Illustrious. Honsou returned the salute before he and the rest of Tempest Squadron headed to their craft for the return journey to the ISDII Challenge. Honsou needed a bottle of Chalquila after this month…
          </em>
        </p>

        <p>
          A huge welcome to LT TwinJedi, taking up the Tempest 1-4 position. Already promoted from SL, INPR complete, several LoC's and helped out the Temptations in their CCL Final.
        </p>

        As we welcome LT TwinJedi, we salute a veteran of the TC, MAJ Hermann as he departs for the Reserves aboard FRG-Phoenix. Thank you Sir!

        <p>
          The Challenge Championship League: It is finally complete. Huge congratulations to Snax Attax on claiming 1st place, with the Temptations settling for 2nd.
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
        I hope everyone has had a mostly relaxed November. As we move through the holiday season I would like to wish everyone Happy Holidays in whichever way you celebrate. 
        Congratulations on everything you have achieved this year Tempest Squadron! 1st place TCiB, 1st place IS:III, 1st place RtF and 2nd place ReMob!
        We Are The Storm!
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
