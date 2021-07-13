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
const startDate = '2021-04-05';
const endDate = '2021-04-19';
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

      <Intro showUniform={true}>
        <p>
          MSE medals have all been awarded - three Imperial Security Medals, three Bronze Stars
          of the Empire, and five Silver Stars of the Empire. Not a bad haul for the month at all,
          and much of it due to our ReMob performance. I've also received a Gold Star for shaving
          hours off of each Commander's weekly tasks; there's nothing I like more than Imperial
          efficiency, because it means more time I can spend flying. Or in the cantina.
        </p>

        <img
          src="/art/neko-hutt.jpg"
          width="100%"
          alt="A Hutt is surrounded by sycophants."
        />

        <p>
          <em>{'"A Hutt in his Home", art by LCM Neko. '}</em>
          {' Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>

        <p>
          April TCiB assignments are due April 30:
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
        We've had a number of TCiB battles submitted - fantastic work to all those fighting not
        only the rebel scum, but also engaging in a little friendly competition with the other
        squadrons. Can we manage to win by 100 points? My Gonk droid's calculations seem to imply
        that it's possible.
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
