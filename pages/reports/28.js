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

const reportNumber = 28;
const startDate = '2021-1-31';
const endDate = '2021-02-06';
const submissionDate = '2021-02-06';

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
    flightActivity: 'Star Wars Squadrons PvP',
    otherActivity: 'Working on a Tempest Squadron XWA free mission. Testing has begun and fixes are being made.',
    notes: 'IS-SW for second place in the COO Objective Scramble',
  },

  // Marek - transferred AWOL
  /*
  55825: {
    communication: 'None',
    flightActivity: '',
    notes: 'On leave.',
  },
  */

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'None',
    otherActivity: 'Judged Stay in the Lines; art for WSR # 28',
    notes: 'Not an easy task, but ranked the ten SitL entries. Thanks for the art!',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'None',
    notes: 'Busy with schoolwork this week.',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Sub for the Chalquilla Cup; flight report, Dempsey\'s Weekly Screenshots #25',
    notes: 'IS-BR for winning Dempsey\'s Weekly Screenshots #25',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Chalquilla Cup',
    notes: 'A number of LoCs, and the first Medal of Communication',
  },

  // CzR
  55962: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Nearly a dozen LoCs for the lieutenant.',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'XvT and SC, PvP and PvE.',
    otherActivity: 'Work towards the TIE Corps logo, ESET, ISET, and a Stay in the Lines entry',
    notes: 'Art, flying, and scholarship from CPT Kalve this week. Nice work!',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'XWA free missions, XWA PvP, TCiB battles',
    notes: 'More missions, a LoC, and a pair of MoCs.',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '100% score on TCCORE, Stay in the Lines entries',
    notes: 'Another 32 LoCs for the lieutenant. Great work with TCCORE!',
  },

  // Jax
  55944: {
    communication: 'Discord',
    flightActivity: '',
    notes: 'SL Jax has been fairly quiet, although responsive on Discord. I\'m led to believe he has screenshots to submit for LoCs.',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'ESET and ISET, working on fiction for Better Know your Starfighters',
    notes: 'Very active week between IU courses and flight.',
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

const SITLEntry = ({ name, image, place = 'Runner Up' }) => (
  <>
    <p>
      <b>{`${place}: ${name}`}</b>
    </p>

    <img
      src={`/competitions/stay-in-the-lines/2021-01/${image}`}
      width="100%"
      alt={`Stay in the Lines entry by ${name}`}
    />
  </>
);

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

      {/* Marek AWOL, MoCs awarded */}

      <Intro showUniform={false}>
        <p>
          <em>
            A lone pair of TIE fighters wove through a rubble-filled asteroid field, dodging
            rocks and ancient wrecks alike. They were on patrol duty, scouting for pirates- or
            worse, Rebels- before Battlegroup III was to arrive to scavenge anything useful from
            the debris. "I've got a signature. Unidentifiable craft type," Silwar called out over
            the radio. "Probably an ugly." Silwar scanned the field for a sign of a cobbled-together
            craft, built out of TIE and Alphabet fighter parts. "I've got it targeted, engaging!"
            came the response from LCM Neko. The pair rounded an asteroid and caught a glimpse of
            a highly unusual ship, darting between the rocks.
          </em>
        </p>

        <p>
          LCM Marek Ny'Irfa has regrettably been removed from Tempest squadron after months of
          no contact. He was a highly active pilot beforehand; we hope all is well with him.
        </p>

        <p>
          Neko announces the winners of December 2020 "Stay in the Lines":
        </p>

        <SITLEntry place="First Place" name="Kalve Ryder" image="1-kalve.png" />

        <SITLEntry place="Second Place" name="Graf D'Jinn" image="2-graf.png" />

        <SITLEntry place="Third Place" name="Morgoth" image="3-morgoth-2.jpg" />

        <p>
          Out of ten entries, LCM Neko had the difficult decision of picking the top three. That
          means an IS-GR will be awarded to Kalve, SR to Graf, and BR to Morgoth. Congrats to the
          winners!
        </p>

        <p>
          It's a new month, which means a new round for Stay in the Lines. Here's LCM Neko's latest
          picture:
        </p>

        <img
          src="/art/neko-starfighter.jpg"
          width="100%"
          alt="Tempest squadron investigates a new class of fighter"
        />

        <p>
          <em>{'"Tempest squadron investigates a new class of fighter", art by LCM Neko. '}</em>
          We'll uncover more about this mysterious ship class in the coming weeks.
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
        A busy week for all of our pilots. I look forward to our match with Epsilon's "Club Pew
        Pew" this weekend! A reminder with this week's AWOL - if you feel the need to step back,
        just let me know. We are, after all, a gaming club, and your health comes first.
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
