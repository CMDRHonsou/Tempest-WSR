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

const reportNumber = 30;
const startDate = '2021-2-15';
const endDate = '2021-02-25';
const submissionDate = '2021-02-25';

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
    flightActivity: 'Star Wars Squadrons PvP, TCiB battles, XvT missions, Syndulla Series Squadrons tournament',
    otherActivity: 'Updated Tempest wiki entry with commander history.',
    notes: '',
  },

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: '',
    otherActivity: 'Art for WSR #30',
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
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'Great flying last night, with a few Fleet Battle wins!',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Always great flying with you and the rest of the squadron.',
  },

  // CzR
  55962: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Great flying together- start thinking about taking TCCORE soon.',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Graphic work, personal and for the TC logo',
    notes: 'Some fantastic work for the TC logo project!',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'XWA and TIE free missions and battles, for fun and TCiB.',
    otherActivity: 'Submitted detailed notes on completing TCiB battles. Submitted Better Know your Spacefighters entry.',
    notes: 'ESET finally graded - great scores. Thanks for sharing your notes on TCiB!',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'TC logo discussion. Submitted Better Know your Spacefighters entry.',
    notes: 'Flew with Tempest squadron and solo for many more Squadrons wins. Almost 70 AI kills in one game last night in fleet battles!',
  },

  // Jax
  55944: {
    communication: '',
    flightActivity: '',
    notes: 'AWOL transfer requested.',
  },

  // Honsou
  55973: {
    communication: '',
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
            Neko's TIE shuddered as it entered the atmosphere of the planetoid below. It fought her
            aggressively as it tried to roll to the right, one of the wings nearly sheared, but she
            held tight to the control stick. Her only hope was to find a soft enough landing spot.
            She scanned the area below, a barren landscape of rocks and craters, when a green light
            flashed on her dashboard - she had been targetted, by a pair of cloakshape fighters hot
            on her tail. She had no doubt they would try shoot her down to scavenge the valuable TIE
            Defender's components. Ordinarily her ship would be much faster, but without stable
            flight controls, she didn't dare to push her speed to max. Four lasers were fired in
            quick succession and absorbed by her deflector shields, and she allowed the ship to
            roll to the right to dodge the next volley. "If it's them or a crash, I'll take my
            chances on the ground", she spoke through gritted teeth, and took a dive towards what
            appeared to be a junk pile situated around some kind of lake. "Please don't be
            hydrocarbons..."
          </em>
        </p>

        <p>
          I've received entries for Better Know your Spacefighters from nearly every active pilot!
          With three days left, I'm looking forward to reviewing and judging the entries. MSE
          medals, with one exception, have been awarded to the squadron, just in time for the next
          MSE. Rush any last-minute activity through the weekend! Feel free to ping me for
          Squadrons any night (EST).
        </p>

        <p>
          In the Chalquilla Cup,
          we will be flying against Firebird's "The Leghorns" at 4pm EST next Sunday, March 7th.
          We are also likely be facing Inferno's "Flaming Chalquilla" team next weekend.
        </p>

        <p>
          {'I\'ve updated the '}
          <Link href="https://wiki.emperorshammer.org/Tempest_Squadron">
            Tempest Squadron wiki page
          </Link>
          {' with past commanders and an updated roster. Our next competition may involve the '}
          wiki, so familiarize yourself with it when you get the chance!
        </p>

        <img
          src="/art/neko-cafe.jpg"
          width="100%"
          alt="A building labeled 'cafe' on a moon, ships, asteroids, and planet in the background."
        />

        <p>
          <em>{'"Moon cafe", art by LCM Neko. '}</em>
          {' Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>

        <p>
          February TCiB assignments are due February 28 - one week away! Anything you can do,
          whether for high score or participation, will help! Ask in the Discord channel for tips.
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

        <img
          src="/art/iam-battle.jpg"
          width="100%"
          alt="A vicious starfighter battle."
        />

        <p>
          <em>{'"Space Battle III", art by LCM Iam Thinking. '}</em>
        </p>
      </Intro>

      <Orders missions={orders}>
        <p>
          These missions were selected as ones we are close to winning squadron citations for.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        Fact of the week: it's Tempest Squadron's 30th report, "Blown With the Wind XXX", which
        sounds like a smut film parody set in the American Civil War.
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
