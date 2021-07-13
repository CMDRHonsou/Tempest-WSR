/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 34;
const startDate = '2021-03-21';
const endDate = '2021-04-04';
const submissionDate = '2021-03-21';

const competitions = [{
  id: '3269',
  name: 'Tempest Raid Nights',
  ends: '2021-06-15',
  units: 'Tempest Squadron',
  notes: 'Every week on Monday and Tuesday, Tempest will assemble for both PvE/Co-Op and PvP matches on Star Wars Squadrons.',
  highlight: true,
}, {
  id: '3266',
  name: 'Trivia Grand Tour: Season Six',
  ends: '2021-07-26',
  units: 'Entire TC',
}, {
  id: '3262',
  name: 'Trivia for the Challenged 2021 - Season 1',
  ends: '2020-07-31',
  units: 'ISD-II Challenge',
}, {
  id: '3216',
  name: 'Stay In the Lines',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Choose any of the art in Tempests\' WSRs, color it, and email it to Silwar. Awards monthly.',
}, {
  id: '3258',
  name: 'TIE Corps in Battle Season Three',
  ends: '2021-06-30',
  units: 'Entire TC',
  notes: 'Complete the monthly battles to win as pilot and squadron',
}, {
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most missions in a Star Wars branded approved multiplayer platform. You may submit PvP battles (Legion of Combat) or PvE battles (Legion of Skirmish).',
}, {
  id: '3209',
  name: 'Trivia for the Challenged',
  ends: '2021-12-31',
  units: 'ISD-II Challenge',
  notes: 'Star Wars trivia, run by COL Stryker.',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}];

const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: '',
    notes: '',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: '',
    otherActivty: '',
    notes: '',
  },

  // Wrecker
  55962: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Coldsnacks
  56017: {
    communication: '',
    notes: '',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
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

      <Intro showUniform={false}>
        <p>
          First, we'll welcome LT Coldsnacks to the squadron! Since the 25th, he's already completed
          multiple IU courses, dozens of missions, and earned over 30 LoCs and his Commendation of
          Bravery. It's an impressive first week for the lieutenant.
        </p>

        <p>
          The biggest news is our completion of ReMob, before I even had the chance to announce it
          since my last report! We've completed eleven out of fourteen tasks, and we're rather
          close to the rest. Lambda got there first, but seeing the whole squadron come together,
          splitting up singleplayer battles, IU courses, and multiplayer games was absolutely
          inspiring. It looks like we'll be picking up the very first TIE Corps Meritorious Unit
          Awards ever awarded, not to mention a round of IS-GWs. As you'll see later in the
          individual reports, we've all been very busy.
        </p>

        <p>
          The March MSE has been filled out, and is awaiting SOO comments. This is likely the most
          highly awarded month in my six months as commander, both in terms of number of medals and
          the medals themselves.
        </p>

        <p>
          LT Wrecker and LCM Morgoth have begun putting together a new competition: a 1v1
          dogfight tournament for the squadron. Further news will be announced in the Discord in the
          coming days. The plan is to play through many of the matchups during the Tuesday PvP raid
          night.
        </p>

        <img
          src="/art/neko-witcher-wrecking.jpg"
          width="100%"
          alt="A space battle in a field of wreckage; one TIE is crashing into an asteroid."
        />

        <p>
          <em>{'"Space pirates and wreckage!", art by LCM Neko. '}</em>
          {' Can you spot CPT Witcher in this picture? Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>

        <p>
          March TCiB results are in. Tempest is now in first place with 81 points, with Lambda
          now lagging further behind with 61 and Firebird in third place with 54. The Challenge is
          barely in first place with 142 points to the Warrior's 140! April assignments are due
          April 30:
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=324&type=info">
              TIE-TC 138: Battle of the TIE Interceptor
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=989&type=info">
              XvT-TC 70: Cyclone Squadron operations I (Battle of Hoth)
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=407&type=info">
              XWA-TC 7: Assault on Chimera
            </Link>
          </li>
        </ul>
      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        No other squadron flies together as much as we do - you've all helped build something truly
        special within the TIE Corps. Congratulations on the ReMob win, and I'm looking forward to
        the 1v1 tournament! (And let's take home the TCiB win while we're at it.)
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
