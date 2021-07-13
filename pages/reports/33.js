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

const reportNumber = 33;
const startDate = '2021-03-09';
const endDate = '2021-03-20';
const submissionDate = '2021-03-21';

const competitions = [{
  name: 'A Challenge in need is a Challenge indeed',
  ends: '2021-03-31',
  units: 'ISD-II Challenge',
  notes: 'Finish the narrative begun by HA Dempsey\'s reports',
  highlight: true,
}, {
  id: '3269',
  name: 'Tempest Raid Nights',
  ends: '2021-06-15',
  units: 'Tempest Squadron',
  notes: 'Every week on Monday and Tuesday, Tempest will assemble for both PvE/Co-Op and PvP matches on Star Wars Squadrons.',
  highlight: true,
}, {
  id: '3264',
  name: 'March COO Objective Scramble: The Invincibles',
  ends: '2021-03-31',
  units: 'Entire TC',
  notes: 'Get the highest K/D in a Squadrons dogfight and send it to the COO.',
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
  id: '3242',
  name: 'The Chalquilla Cup I',
  ends: '2021-04-01',
  units: 'Entire TC',
  notes: '3-person teams with up to 3 subs will sign up by January 14 and take part in 3v3 battles in Star Wars Squadrons.',
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
    flightActivity: 'Squadrons PvP; 2v2 King of the System competition',
    otherActivity: 'Trivia for the Challenged; Trivia Grand Tour',
    notes: 'Hit 13th Echelon this week.',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; Tempest Raid Nights',
    otherActivity: '',
    notes: 'Welcome to Tempest Squadron! Off to a strong start with 9 LoCs.',
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
    flightActivity: 'Squadrons PvP; Tempest Raid Nights',
    otherActivity: '',
    notes: '',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; 2v2 King of the System competition; Tempest Raid Nights',
    otherActivty: '',
    notes: 'Congrats on your 100% score on ESET!',
  },

  // Wrecker
  55962: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; 2v2 King of the System competition; Tempest Raid Nights',
    otherActivity: 'Running Tempest Raid Nights',
    notes: 'Thanks for stepping up to help run Tempest Raid Nights.',
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
    flightActivity: 'Lots of BoP battles',
    otherActivity: '',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; 2v2 King of the System competition; Tempest Raid Nights',
    otherActivity: '',
    notes: 'Great flying this week.',
  },

  // Nindo
  55916: {
    communication: 'Discord',
    notes: 'Welcome back to Tempest!',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; Tempest Raid Nights',
    otherActivity: '',
    notes: 'Thanks for the in-depth fleet battles tips.',
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
          We have a new pilot with LT Akreseus joining us as our twelveth, rounding out a full
          squadron yet again. He spent no time updating his INPR for his SL to LT promotion,
          and then went on to earn nine LoCs in his first week. Glad to have you aboard- we shall
          watch your career with great interest.
        </p>

        <p>
          LCM EchoVII has been chosen as our SQXO. The SQXO's primary responsibilities will be to
          take over when I'm on leave; help check in with inactive pilots; join the officer
          discussions to provide additional feedback; and, should I be captured or killed in the
          line of duty, to take over as CMDR until a permanent replacement is found. Best of luck
          to you in your new position. As noted last report, I did receive a number of applicants,
          all of whom who would have made a fantastic choice for this position. You're all
          high-level contributors to the squadron already; it just means that EchoVII is the poor
          sucker stuck with the paperwork when I'm not available.
        </p>

        <p>
          The Emperor's Hammer has been challenged to fight the New Republic Navy at 4pm EST, April
          {' 3rd. Please sign up using '}
          <Link href="https://forms.gle/FcdSCg1Q75NyAe6H6">
            this form
          </Link>
          {' to defend your empire. We need as many teams as possible; so far from Tempest, it is '}
          just EchoVII and I. While the two of us can undoubtedly stop entire fleets on our own,
          it's more fun with more of us.
        </p>

        <p>
          March TCiB assignments are due March 31:
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=74&type=info">
              TIE-TC 76: Mirror Universe
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=718&type=info">
              XvT-TC 23: The ASF Fishing Trip
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=411&type=info">
              XWA-TC 8: Hammer to Anvil
            </Link>
          </li>
        </ul>
      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        In reflection, this is the best squadron one could ever hope to be a part of. We have a
        fantastic group with a wide range of talents who flies together; no commander could wish
        for anything more. Thank you all for making these past six months fantastic, and here's
        to the future. Now, where's my Keg-Gonk?
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
