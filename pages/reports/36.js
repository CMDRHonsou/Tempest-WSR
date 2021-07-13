/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
// import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 36;
const startDate = '2021-04-19';
const endDate = '2021-04-27';
const submissionDate = '2021-04-27';

const competitions = [{
  id: '3269',
  name: 'Tempest Raid Nights',
  ends: '2021-06-15',
  units: 'Tempest Squadron',
  notes: 'Every week on Monday and Tuesday, Tempest will assemble for both PvE/Co-Op and PvP matches on Star Wars Squadrons.',
  highlight: true,
}, {
  id: '3278',
  name: 'Tempest King of the Mountain',
  ends: '2021-06-12',
  units: 'Tempet Squadron',
  notes: 'LCM Wreckage is hosting a 1v1 tournament for Tempest pilots',
  highlight: true,
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-01-01',
  units: 'ISD-II Challenge',
  notes: 'Fill in the acronyms from random letter combinations; Google Forms link posted to the Challenge Discord channel',
  highlight: true,
}, {
  id: '3266',
  name: 'Trivia Grand Tour: Season Six',
  ends: '2021-07-26',
  units: 'Entire TC',
}, {
  id: '3262',
  name: 'Trivia for the Challenged 2021 - Season 3',
  ends: '2021-07-31',
  units: 'ISD-II Challenge',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most LoSs earned.',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most singleplayer missions played.',
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
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}];

const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, Discord',
    flightActivity: 'SPL games in Squadrons',
    otherActivity: '',
    notes: 'I have a few LoCs stuck in the queue, I swear.',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'King of the Mountain tournament games in Squadrons',
    otherActivity: '',
    notes: 'The only actual tie I\'ve ever seen in Squadrons, 7-7, when Akreseus and Wreckage crashed in sudden death. Congratulations?',
  },

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: '',
    otherActivity: '',
    notes: 'Spending time in the Imperial University.',
  },

  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: '',
    notes: 'Spending time in the Imperial University.',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'An IS-CW for the Temper Tantrums achieving over 80 kills in the Chalquilla Cup.',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; KotM 1v1 tournament games',
    otherActivty: '',
    notes: 'An IS-CW for the Temper Tantrums achieving over 80 kills in the Chalquilla Cup.',
  },

  // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; KotM 1v1 tournament games',
    otherActivity: '',
    notes: 'An IS-CW for the Temper Tantrums achieving over 80 kills in the Chalquilla Cup.',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Helped design the updated Tempest Squadron logo',
    notes: '',
  },

  // Phalk
  6874: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP; XvT and BoP battles; KotM 1v1 tournament games',
    otherActivity: 'An IS-CR for reaching 50 correct answers in the Trivia Grand Tour; lots of reviews',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; TIE battles; XWA battles; KotM 1v1 tournament flying',
    otherActivity: 'Helped design the updated Tempest Squadron logo',
    notes: 'An IS-CW for the Temper Tantrums achieving over 80 kills in the Chalquilla Cup.',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; KotM 1v1 tournament flying',
    notes: '',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'On the night shift, watching for rebels until the wee hours of the morning. Alas, the skies were clear.',
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
          Congraulations are in order for CM Neko, LCM Honsou, and LCM Wreckage, who each earned
          promotions this week. For this briefest of moments, they shall share the tab at the
          cantina. All three are highly deserved, and their efforts to further the squadron, the
          TIE Corps, and the Empire have not gone unnoticed.
        </p>

        <p>
          A few new awards have started to show up in pilots' profiles: the IS-CR and IS-CW, or
          the "Copper" variant of Iron Stars, are awarded for achieving a non-placement milestone
          in a competition. We've seen some IS-CWs go out this week for Chalquilla Cup contestants
          whose teams earned at least 80 kills, for example. Another new award is the IAR. "Used to
          recognize short-term bursts of activity, the Imperial Achievement Ribbon is awarded to
          members that exert effort beyond the normal scope of their duties worthy of being
          mentioned in a dispatch." LC Phalk Sturm and LCM Wreckage have been the first recipients
          of the IAR, and I expect to see many more in Tempest soon.
        </p>

        <p>
          The Chalquilla Cup has finally been declared finished, with Firebird at the top of the
          pile. MAJ Genie and I are planning an awards ceremony for this Sunday at 4pm EDT / 9pm
          BST. It's hopefully late enough not to interfere with any Cadet Cup games, but we will
          postpone if necessary. LCM Wreckage (neé Wrecker) has organized a Tempest squadron team,
          the Storm Knights. The TIE Corps as a whole is also fielding several other teams - we
          wish them luck as well!
        </p>

        <p>
          In additional competitive news, our Squadrons Premier League team went 30-29 against
          the Murder Hornets, beating them twice in extremely close matches. You can watch the
          {' recording on '}
          <Link href="https://www.twitch.tv/videos/999911027?t=0h5m54s">my stream</Link>.
        </p>

        <p>
          The Tempest Squadron logo has had a minor update, thanks to the work of CPT Kalve Ryder
          and LCM Morgoth. It now features the new TC logo and an updated shade of blue. It is at
          {'the top of this report, or you can view it in high-resolution '}
          <Link href="https://tc.emperorshammer.org/patch.php?id=45">here</Link>.
        </p>

        <p>
          Firebird Squadron training, a Squadrons PvP event for all Challenge pilots, will resume
          May 2nd at 4pm EST / 9pm BST. See COL Stryker for more details.
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
