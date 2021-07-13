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

const reportNumber = 24;
const startDate = '2020-12-20';
const endDate = '2020-12-26';
const submissionDate = '2020-12-29';

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
  id: '3221',
  name: 'Dempsey\'s Lascivious Lockdown Lunacy',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: '50 images to explain; ISs for everyone who scores high enough',
  highlight: true,
}, {
  id: '3222',
  name: 'Trivia Grand Tour: Holiday Special',
  ends: '2021-01-03',
  units: 'Entire tC',
  notes: 'Trivia Grand Tour bonus round',
  highlight: true,
}, {
  id: '3220',
  name: 'Eagle Patch Competition',
  ends: '2020-01-04',
  units: 'Entire TC',
  notes: 'Create a new patch for Eagle Squadron',
}, {
  id: '3219',
  name: 'Pimp my TIE',
  units: 'entire TC',
  notes: 'Create a graphic externall and internally of any TIE fighter',
}, {
  id: '3228',
  name: 'Warrior Banner',
  ends: '2021-01-31',
  units: 'Entire TC',
  notes: 'Design a new banner for the Warrior.',
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
    flightActivity: 'Star Wars Squadrons PvP; hosted PvP shootout (19 wins!)',
    otherActivity: 'Working on a 3v3 EHTC Squadrons League',
    notes: '',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    notes: 'Lots of Squadrons wins this past shootout. Nice flying!',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    notes: 'Additional Squadrons wins this past weekend, as Iam gets more comfortable with the TIE Reaper.',
  },
  // Marek
  55825: {
    communication: 'None',
    flightActivity: '',
    notes: 'On leave.',
  },
  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PVP',
    notes: 'More great flying, and potentially a new recruit!',
  },
  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Getting more comfortable with Squadrons and earning several wins!',
  },
  // Kalve
  1968: {
    communication: '',
    flightActivity: '',
    notes: 'A quiet week for CPT Kalve.',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'XWA missions',
    notes: 'I see you\'re working your way through more XWA. Nice work.',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    flightActivity: '',
    notes: 'Looking forward to flying with you again.',
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
          This week saw an extremely active TIE Corps PvP Shootout, with 21 games played on
          Saturday (and more unofficial games later on.) CPT Genie and I are also working on a
          3v3 Squadrons League, to be announced soon. In wider TIE Corps news, GN Hav Antiel is
          stepping down from his role as Rho Squadron CMDR, to be replaced by CM acetiepilot.
          Zekk Terrik has been named as the new Warrior COM and will take up his role on January 1,
          to be replaced by Robert Hogan. Lastly, the Challenge's own COL Stryker has been named
          WARD along with CPT Genie.
        </p>

        <img
          src="/art/neko-deck-the-halls.jpg"
          width="100%"
          alt="Tempest Squadron decks the halls"
        />

        <p>
          <em>{'"Tempest Squadron decks the halls", art by LCM Neko. '}</em>
          {'Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>

        <p>
          Two more pilots left for the reserves this week: LT Synapse and LT Nindo Ardinn. I wish
          them well in their endeavors and hope to see them again in the future.
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
          <strong>{' second '}</strong>
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
        While our squadron has lost a few pilots over the last few weeks, we've also increased our
        activity through numerous Squadrons matches as well as many singleplayer battles completed.
        Reserves transfers are a necessary part of the lifecycle of a squadron and allows pilots to
        rejoin when they're ready - and we'll have a spot when they do. That said, I believe LT
        EchoVII may have a new recruit soon...
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
