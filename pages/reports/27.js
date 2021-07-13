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

const reportNumber = 27;
const startDate = '2021-01-21';
const endDate = '2021-01-31';
const submissionDate = '2021-01-31';

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
  highlight: true,
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
  id: '3204',
  name: 'Galactic Linguist',
  ends: '2021-11-31',
  units: 'Entire TC',
  notes: 'Decrypt messages in languages from across the Galaxy.',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}];

// TODO update
const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, Discord',
    flightActivity: 'Star Wars Squadrons PvP, XvT PvP',
    otherActivity: 'Working on a Tempest Squadron XWA free mission',
    notes: 'I\'ve been spending quite a bit of time learning how XWA mission creation works, and hope to have something in beta testing soon!',
  },
  // Marek
  55825: {
    communication: 'None',
    flightActivity: '',
    notes: 'On leave.',
  },

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: '',
    notes: 'Busy week this week, although we expect to get some games in this afternoon.',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    notes: 'A couple of LoCs for the LCM.',
  },

  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Chalquilla Cup',
    notes: 'Took some personal time, although managed to still earn another 11 LoCs.',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Chalquilla Cup',
    notes: 'Passed BFM, a great course for all new pilots, on top of submitting art for the Chalquilla Cup and earning many LoCs.',
  },

  // CzR
  55962: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'A busy first couple of weeks for Lt CzR, earning his combat rating, a promotion to LT, and earning many LoCs.',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'Work towards the TIE Corps logo',
    notes: 'Spent significant time in the effort to create a TC logo, and recruited LT Honsou.',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'Dozens of TIE-Free, TIE-TC, and XWA-TC missions',
    notes: 'LC Phalk completed even more LoCs on top of dozens of TIE and XWA battles, a strong end to the month.',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'LT Morgoth has already earned a combat rating of Marksman 1st with over 50 more LoCs this week. Will he win the #1 Challenge spot?',
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
    notes: 'LT Honsou has joined us and already earned his promotion with an updated INPR and his first LoC. Welcome to Tempest!',
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
          I have begun working on a Challenge-focused XWA mission in which the pilot flies a
          TIE/Defender from Tempest flight 1. It's nearly ready for beta testing. Additionally,
          we have officially replaced the "Tempet Squadron Orders" competition with a citation
          hunt; each month I will suggest three battles that we are close to earning squadron
          citations on. Unlike the previous competition, the award here is squadron pride.
        </p>

        <p>
          This evening I'll be finalizing scores for the MSE - for the new pilots, this is our
          Monthly Squadron Evaluation, where pilots gain medals based on activity levels. These
          medals are given not only for flying, but also for participation in competitions,
          creating art, and any other officially recognized TC activity. I expect that we'll
          receive a large batch of medals, as is typical for the finest squadron in the fleet.
        </p>

        <p>
          Fleet-wide, there are two new medals: the TUA and MUA. We're also updating the way that
          the wings are chosen which appear on your uniform; instead of FCHG ranking, a combination
          of FCHG + PvP + PvE points will be used, which will mean upgrades for some of you. Read
          {'the '}
          <Link href="https://tc.emperorshammer.org/showreport.php?nr=3499">TCCOM's report</Link>
          {' or check on the '}
          <Link href="https://tc.emperorshammer.org/downloads/TCPM.pdf">pilot manual</Link>
          {' for more info.'}
        </p>

        <p>
          We are also making the position of Squadron XO more official. The role will be to act as
          second-in-command to the CMDR and to act as CMDR in the case that I am incapacitated.
          This position is open to everyone, FMs and FLs. If you are interested, please contact me.
        </p>

        <p>
          {'We are entering the second week of the '}
          <Link href="https://docs.google.com/spreadsheets/d/1CvDIucCFzcv2HZbkhta1eDLDN7Nf_Lg2_Rvhmpz97ok/edit?usp=sharing">Chalquilla Cup</Link>
          , a fleet-wide competition pitting squadrons against each other in 3v3 teams. Last round
          we went 1-1 against Eagle Squadron. Our next fight is against "The Flockers" of Lambda
          Squadron.
        </p>

        <img
          src="/art/imperial-flag.png"
          width="100%"
          alt="An Imperial Pilot holds a Tempest Chalquilla Cup flag"
        />

        <p>
          <em>{'"An Imperial Pilot holds a Tempest Chalquilla Cup flag", art by LT EchoVII. '}</em>
          {'Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>
      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        A new year and a full squadron meant a bit of housekeeping, cleaning up competitions and
        a shift in focus. We seem to be a primarily PvP-focused squadron now, although I'd still
        encourage all pilots to play the singleplayer sims; there's a lot of TIE Corps history to
        play through. We've been very active, and I'm sure we'll see a number of merit medals and
        promotions with this month's Monthly Squadron Evaluation. Keep it up, and let's have another
        strong showing in the Chalqulla Cup this round!
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
