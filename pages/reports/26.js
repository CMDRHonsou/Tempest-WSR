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

const reportNumber = 26;
const startDate = '2021-01-03';
const endDate = '2021-01-21';
const submissionDate = '2021-01-22';

// TODO update
const competitions = [{
  id: '3242',
  name: 'The Chalquilla Cup I',
  ends: '20201-04-01',
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
  id: '3236',
  name: 'January COO Objective Scramble: Squadrons Dogfight',
  ends: '2021-01-31',
  units: 'Entire TC',
  notes: 'Submit your highest kill game in Dogfight mode.',
}, {
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most missions in a Star Wars branded approved multiplayer platform. You may submit PvP battles (Legion of Combat) or PvE battles (Legion of Skirmish).',
}, {
  id: '3219',
  name: 'Pimp my TIE',
  ends: '2021-01-31',
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
    otherActivity: 'Launched 3v3 Squadrons League',
    notes: 'On medical leave the last week.',
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
    flightActivity: 'Squadrons PvP',
    notes: 'Plenty of activity leading to a PC, and a well-deserved IS-GW for participating in TCiB!',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    notes: 'Several more Squadrons wins led to an ISM, and an IS-GW for participating in TCiB.',
  },

  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Thorough flight reports, plenty of Squadrons, and upgraded hardware to go with his new FL position.',
  },

  // CzR
  55962: {
    communication: 'Email, Discord',
    otherActivity: 'Updated INPR',
    notes: 'Welcome to the finest squadron in the fleet, SL CzR! You\'ll make LT in no time.',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PVP',
    notes: 'Lots of Squadrons, a BFM course, and a Bronze Star to boot. Looking forward to the Chalquilla Cup!',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Significant work on designing and leading the discussion for the new TIE Corps logo.',
    notes: '',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'TIE missions, XWA missions, XWA PvP, Squadrons PvP',
    notes: 'The report is running out of room for all of your medals. The Ewoks ae working overtime in the iron mines. Looking forward to many more PvP encounters!',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Possibly the most LoCs I\'ve ever seen in a report. Tremendous work, LT, and a well-earned Commendation of Bravery.',
  },

  // Jax
  55944: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Has some LoCs in the queue - let\'s try to get some flights in together sometime!',
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
          This begins the first week of {'the '}
          <Link href="https://docs.google.com/spreadsheets/d/1CvDIucCFzcv2HZbkhta1eDLDN7Nf_Lg2_Rvhmpz97ok/edit?usp=sharing">Chalquilla Cup</Link>
          , a fleet-wide competition pitting
          squadrons against each other in 3v3 teams. This round, we're facing another
          Wing X squadron team, <em>{' Eagle Squadron '}</em> led by Graf D'Jinn. It looks like
          our match is planned for this Friday evening, 1700 PST.
        </p>

        <p>
          In personal news, I've had a minor incident and have been in the medbay for a few days.
          LC Phalk Sturm has smoothly taken the helm as acting XO. If anyone is interested in the
          position of XO, contact me; it does not require being a Flight Leader, but rather is a
          sort of second-in-command in case I'm not reachable for a given time. For you
          overachievers, you can find out more in {'the '}
          <Link href="https://www.emperorshammer.org/course.php?id=199">SM/5 Squadron Management course.</Link>
        </p>

        <img
          src="/art/neko-challenge-confronts-an-mc-75.png"
          width="100%"
          alt="The ISDII Challenge confronts an MC-75"
        />

        <p>
          <em>{'"The ISDII Challenge confronts an MC-75", art by LCM Neko. '}</em>
          {'Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>
      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        This January saw a tremendous number of engagements flown, with LT EchovII, LT Morgoth, LCM
        Richlet, LC Phalk Sturm, and SL Jax proving that we have a formidable squadron. We have
        another fleet-wide competion coming in the coming months to prepare for, but in the
        meantime, we have assembled a fine team for the Chalquilla Cup. I've got a couple days
        left in the medbay, but we're in the capable hands of LC Phalk in the meantime. A CMDR
        couldn't ask for a better group of pilots.
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
