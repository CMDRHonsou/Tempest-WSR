/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 23;
const startDate = '2020-12-06';
const endDate = '2020-12-19';
const submissionDate = '2020-12-20';

const orders = [{
  name: 'TIE-Free 92',
  id: 271,
  title: 'The Belhassa Marches',
}, {
  name: 'XvT-Free 101',
  id: 807,
  title: 'Stop the Gungan Clones',
}, {
  name: 'XWA-Free 75',
  id: 821,
  title: 'Tarentum on Patrol',
}];

const competitions = [{
  id: '3178',
  name: 'Tempest Squadron Orders',
  ends: '2021-10-01',
  units: 'Tempest Squadron',
  highlight: true,
  notes: 'Complete biweekly missions for iron stars every 2 weeks and at the end of the year!',
}, {
  id: '3216',
  name: 'Stay In the Lines',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Choose any of the art in Tempests\' WSRs, color it, and email it to Silwar. Awards monthly.',
  highlight: true,
}, {
  id: '3214',
  name: 'Where Oh Where Has The Commodore Gone?',
  ends: '2020-12-20',
  units: 'ISD-II Challenge',
  notes: 'Write a fiction of at least one page involving units of the ISD Challenge locating and retrieving our erstwhile Commodore.',
  highlight: true,
}, {
  id: '3209',
  name: 'Trivia for the Challenged',
  ends: '2021-12-31',
  units: 'ISD-II Challenge',
  notes: 'Star Wars trivia, run by COL Stryker.',
}, {
  id: '3205',
  name: 'TIE Corps Power Hour',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Join the 5mans Power Hour and destroy all who get in our way in Squadrons.',
}, {
  id: '3204',
  name: 'Galactic Linguist',
  ends: '2021-11-31',
  units: 'Entire TC',
  notes: 'Decrypt messages in languages from across the Galaxy.',
}, {
  id: '3208',
  name: 'TIE Corps "Help Me Help You" 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Whoever gets the most SWS assists wins an IS-GW/SW/BW.',
}, {
  id: '3185',
  name: 'TIE Corps Space Superiority 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring PvP pilots in Squadrons dogfights. Send your screenshots to AD Prower.',
}, {
  id: '3183',
  name: 'TIE Corps Capital Strike 2020 (PvP Fleet Battles)',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring cap damage in Squadrons fleet battles. Send your screenshots to AD Prower.',
}, {
  id: '3184',
  name: 'TIE Corps Capital Strike vs AI 2020 (PvE)',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring cap damage in Squadrons PvE fleet battles. Send your screenshots to AD Prower.',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3135',
  name: 'Challenge Pilot of the month (SP/MP)',
  ends: '2020-12-31',
  units: 'ISD-II Challenge',
}, {
  id: '3134',
  name: 'Dempsey\'s Weekly Screenshots',
  ends: '2020-12-31',
  units: 'ISD-II Challenge',
}, {
  id: '3112',
  name: 'Cryp-TAC',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3102',
  name: 'Everyone\'s a Critic',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3100',
  name: 'TIE Corps in Battle 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3093',
  name: 'Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3089',
  name: 'TIE Corps on the CoOp-Front - 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3088',
  name: 'TIE Corps on the MP-Front - 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3087',
  name: 'COO/SOO Riddle 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3084',
  name: 'COO\'s Star Wars Challenge, Episode VI',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3083',
  name: 'MP COOP Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3082',
  name: 'MP Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}];

// TODO update
const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, Discord',
    flightActivity: 'Star Wars Squadrons PvP; hosted PvP shootout; XWA and TIE battles',
    otherActivity: '',
    notes: '',
  },
  // LT Synapse
  55921: {
    communication: 'None',
    notes: 'LT Synapse, please check in!',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    notes: 'LCM Neko and I flew some training matches and live engagements this week, and plan to do more next.',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    notes: 'LT Iam Thinking and I flew some training matches and live engagements this week, and plan to do more next.',
  },
  // Marek
  55825: {
    communication: 'None',
    flightActivity: '',
    notes: 'On leave the past couple of weeks.',
  },
  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PVP',
    notes: 'Great flying this week, live and in skirmishes against other TC pilots.',
  },
  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP together',
    notes: 'Great flying this week, live and in skirmishes against other TC pilots.',
  },
  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: '',
    notes: '',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'XWA, and TIE missions',
    notes: 'Fantastic flying and reports, as usual.',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, fleet battles',
    notes: '',
  },
  // Nindo
  55916: {
    communication: 'None',
    notes: 'On the list for reserves transfer.',
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

      <Intro showUniform={false}>
        <p>
          Tempest is the first squadron on the Challenge to receive MSE medals, no doubt because
          we have so many to receive. Everything from a Silver Star through Imperial Security Medal
          has been given out to nearly every pilot, yet again - an expected but worthy achievement
          for the top squadron in the Emperor's Hammer TIE Corps.
        </p>

        <img
          src="https://tempest-blown-with-the-wind.vercel.app/art/neko-space-battle.png"
          width="100%"
          alt="Battlegroup III Protects the First Death Star"
        />

        <p>
          <em>{'"Battlegroup III Protects the First Death Star", art by LCM Neko. '}</em>
          {'Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>

        <p>
          This week, we see a few transfers: LT Sat Nav heads to the reserves while he completes
          his Imperial University training; MAJ Hermann defects to an older, uglier ship; and one
          of the TIE Corps' newest recruits, LT EchoVII, joins as Tempest 2-2. LT EchoVII and I
          have been spending time in the simulator and she's shaping up to be a promising pilot.
          Just today, LT EchoVII, LCM Richlet, and I flew skirmishes against the new Eagle Squadron
          and had a jolly old time.
        </p>

        <p>
          Eagle Squadron has opened up on the Challenge to provide a home for pilots who wish to
          join in infiltration and fly inferior craft. Best of luck to those brave souls.
        </p>

        <p>
          December TCiB assignments are due December 31. We're within range of winning - anything
          you can do, whether for high score or participation, will help! Ask in the Discord
          channel for tips.
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=258&type=info">
              TIE-TC battle 119: The Razinki Operation
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1136&type=info">
              XvT-TC battle 103 - ASF: 341
            </Link>
            {' (note: requires the EH Ship Patch for XvT) '}
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=629&type=info">
              XWA-TC battle 22: The Career of Adrenaline
            </Link>
          </li>
        </ul>
      </Intro>

      <Orders missions={orders}>
        <p>
          This is the
          <strong>{' first '}</strong>
          week these orders are active. You will have until January 3 to finish these
          missions and challenges for the high score competition.
        </p>

        <p>
          <strong>{'PvP challenge: '}</strong>
          fly three dogfights together with at least two other EH pilots.
          Send screenshots to me. Scoring will be based on points and use your highest score.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        We're sad to see MAJ Hermann go, but wish him best in his endeavors. THe Warrior will
        certainly need all the help they can get for next RtF, now that the Challenge is a fully
        armed and operational battlegroup.
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
