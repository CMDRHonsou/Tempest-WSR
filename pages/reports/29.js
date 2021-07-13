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

const reportNumber = 29;
const startDate = '2021-2-06';
const endDate = '2021-02-14';
const submissionDate = '2021-02-15';

const orders = [{
  name: 'TIE-TC 138',
  id: 324,
  title: 'Battle of the TIE Interceptor',
}, {
  name: 'XvT-TC 80',
  id: 1056,
  title: 'ISD Challenge - a chapter in the History',
}, {
  name: 'XWA-TC 7',
  id: 407,
  title: 'Assault on Chimera',
}];

const competitions = [{
  id: '3251',
  name: 'Better Know your Spacefighters',
  ends: '2021-02-28',
  units: 'Tempest Squadron',
  notes: 'Pick your spaceship, set it in your profile, and email / DM me an explanation, art of your ship, or a bit of fiction to explain why you picked your spaceship and its name.',
  highlight: true,
}, {
  id: '3242',
  name: 'The Chalquilla Cup I',
  ends: '2021-04-01',
  units: 'Entire TC',
  notes: '3-person teams with up to 3 subs will sign up by January 14 and take part in 3v3 battles in Star Wars Squadrons.',
  highlight: true,
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
  id: '3257',
  name: 'February COO Objective Scramble: The Wingman',
  ends: '2021-02-28',
  units: 'Entire TC',
  notes: 'Submit highest assist game in Dogfight, Fleet Battles, or FB vs AI flown in Squadrons',
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
    flightActivity: 'Star Wars Squadrons PvP, Chalquilla Cup games',
    otherActivity: '',
    notes: 'IS-SW for second place in the COO Objective Scramble; IS-GR for first place in the Challenge patch competition',
  },

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'None',
    otherActivity: 'Art for WSR #29',
    notes: 'Another busy week in the Imperial University, but continuing to provide art for the reports.',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'None',
    notes: 'Not much flight time for Iam in a couple weeks, but we\'ll get some training in soon.',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP, Chalquilla Cup games',
    otherActivity: '',
    notes: 'Thanks for helping sub for The Temper Tantrums!',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Chalquilla Cup games',
    notes: 'Helped sub for The Temper Tantrums, and artwork featured on TC news.',
  },

  // CzR
  55962: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Chalquilla Cup games',
    notes: 'Was a prime target in the CC games, but deftly evaded the enemy.',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Work on the TIE Corps logo; ESET and ISET',
    notes: 'Congrats on a perfect ESET and ISET score!',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'TIE missions and work on the TCiB battles.',
    otherActivity: 'Wrote reviews for missions completed. Took ESET and ISET. Working on Better Know your Starfighters entry.',
    notes: 'Great job with 100% on your ESET, and congrats on the Silver Star for your FCHG rank.',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Chalquilla Cup games',
    otherActivity: '',
    notes: 'Dozens more LoCs for LT Morgoth, on top of work on the TIE Corps logo.',
  },

  // Jax
  55944: {
    communication: 'Discord',
    flightActivity: '',
    notes: 'Is our SL here? Please respond or be subject to an AWOL.',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'On a temporary leave of absence.',
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
          <em>
            Neko's targetting computer showed "Unknown" as she moved to intercept the strange ship.
            It had two large engines, four huge deflector shield projectors, and a pair of heavy
            lasers in the front which it used to blast asteroids out of the way. Silwar and Neko
            had to weave around rocks, while this ship simply blasted them out of the way and
            allowed its shields to absorb any smaller pieces. "Some kind of militarized mining
            ship?" wondered Silwar aloud over the radio. "Stick to ion cannons if you can get a
            bead on this thing, and we can take it to the Science Office." A yell came over the
            radio as a stray rock clipped one of Neko's wings - "I'm damaged, stabilizers offline!"
            Silwar only had a moment to turn and help Neko, or pursue the ship. "Can you head to
            the planet below? I'll radio back for pickup." "Yes," replied Neko, looking warily
            at the tiny planet below. It had a thin atmosphere and some life readings, but hadn't
            been subject to any Imperial surveys, or at least any surveys that were loaded onto
            her nav computer. There was no telling what, or who, she'd run into below.
          </em>
        </p>

        <p>
          Tempest flew a few more Chalquilla Cup games this past weekend. We learned that we do
          best on Gallitan with interceptors, and could probably benefit from a support ship.
          Also, Kamjin got desparate and drank all of his wife's beverages; he's currently on a
          medical frigate to have his blood sugar levels tested. Best of luck, Sector Admiral.
        </p>

        <p>
          MSEs have been evaluated by the COM; once the rest of the command staff have approved
          recommendations, medals will be going out.
        </p>

        <img
          src="/art/neko-withstands-assault.jpg"
          width="100%"
          alt="Neko shields herself with wreckage"
        />

        <p>
          <em>{'"Neko shields herself with wreckage", art by LCM Neko. '}</em>
          {' Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>

        <p>
          February TCiB assignments are due February 31. Anything you can do, whether for high
          score or participation, will help! Ask in the Discord channel for tips.
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1179&type=info">
              TIE-TC #223 - The Search for Mosh
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=844&type=info">
              XvT-TC #48 - Bravo Company: Training
            </Link>
            {' (note: requires the EH Ship Patch for XvT) '}
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1155&type=info">
              XWA-TC #42 - ECR V Training Maneuvers
            </Link>
          </li>
        </ul>
      </Intro>

      <Orders missions={orders}>
        <p>
          These missions were selected as ones we are close to winning squadron citations for.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        Don't forget to also email me your entry for Better Know your Spacefighters. The
        month is halfway through, so there's to weeks left to get your entry in. TCiB also closes
        in two weeks, so let's work together on a solid squadon score. Thanks for everyone who
        participated in the  Chalquilla Cup - we had the whole team (and more) flying or
        spectating!
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
