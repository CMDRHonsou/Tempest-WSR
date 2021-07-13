/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 37;
const startDate = '2021-04-27';
const endDate = '2021-05-15';
const submissionDate = '2021-05-16';

const citations = [
  'TIE-TC 12',
  'TIE-TC 76',
  'XWA-TC 8',
  'XWA-TC 22',
];

const citationsChange = '+2';

const orders = [{
  name: 'TIE-TC 1',
  id: 1,
  title: 'Capture of Zaarin',
}, {
  name: 'TIE-TC 10',
  id: 10,
  title: 'Battle for the Death Star',
}, {
  name: 'TIE-TC 16',
  id: 16,
  title: 'Dacian Downfall',
}, {
  name: 'TIE-TC 19',
  id: 19,
  title: 'The Tethys Honeymoon',
}, {
  name: 'TIE-TC 30',
  id: 30,
  title: 'Save the Emperors Archives',
}, {
  name: 'TIE-TC 153',
  id: 390,
  title: 'Koph Supremacy Project',
}];

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
  id: '3285',
  name: 'May COO Objective Scramble: May The Force Be With You',
  ends: '2021-05-31',
  units: 'Entire TC',
  notes: 'Pairs of pilots will team up; the pair with the most LoCs and LoSs together wins.',
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-01-01',
  units: 'ISD-II Challenge',
  notes: 'Fill in the acronyms from random letter combinations; Google Forms link posted to the Challenge Discord channel',
}, {
  id: '3274',
  name: 'The Challenge with Words',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'COL Marenta will generate a word search and post the link.',
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
  id: '3258',
  name: 'TIE Corps in Battle Season Three',
  ends: '2021-06-30',
  units: 'Entire TC',
  notes: 'Complete the monthly battles to win as pilot, squadron, and ship.',
}, {
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most LoCs or LoSs in Squadrons.',
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
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}];

const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, Discord',
    flightActivity: 'XWA PvE; Squadrons PvP and PvE; Cadet Cup; Tempest Raid Nights',
    otherActivity: '',
    notes: '',
  },

  // Akreseus
  56005: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'Another handful of LoCs for LT Akreseus. Start thinking about taking TCCORE for your LCM promotion!',
  },

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: '',
    otherActivity: '',
    notes: 'Busy in the Imperial University.',
  },

  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'XWA PvE',
    notes: 'Flew some XWA training missions with Silwar.',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Cadet Cup; Squadrons PvP; Tempest Raid Nights',
    otherActivity: '',
    notes: 'An IS-SW for joining us in the Cadet Cup',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivty: '',
    notes: 'Earned an IS-BR for comissioning Tempest\'s theme song, which she wrote herself.',
  },

  // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: 'Cadet Cup; Squadrons PvP and PvE; Tempest Raid Nights',
    otherActivity: '',
    notes: 'Several medals for the LCM; an IS-SW for joining us in the Cadet Cup and an IS-GW for taking 1st place in the April COO Objective Scramble; an IAR for helping with the podcast and another for fighting in Twin Suns; and an IS-BR for winning Dempsey\'s Weekly Screensots. Nice work!',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvE and PvP',
    otherActivity: '',
    notes: 'A Silver Star for being a principal member of the team that created the first logo that the TIE Corps can truly call its own. Congratulations!',
  },

  // Phalk
  6874: {
    communication: 'Discord, Email',
    flightActivity: 'TCiB battles; BoP and TIE missions.',
    otherActivity: '',
    notes: 'Brought us over the line for our 13th ReMob task, with several highly-scoring TIE-free missions.',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; TCiB battles',
    otherActivity: '',
    notes: 'An IS-SW for joining us in the Cadet Cup and for taking second place in the April COO Objective Scramble.',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvE and PvP; TCiB battles; TIE and XWA',
    notes: 'Helping the squadron with Fleet Battles and Citations - and getting close to the requirements for LCM!',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Leading Fleet Battles training for Tempest',
    notes: 'An IS-SW for helping coach us in the Cadet Cup',
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
          Tempest, unsurprisingly, has furthered its lead in TIE Corps in Battle. We now hold 140
          points; Lambda is in second with 96, followed by Sin with 71. Last month we had missions
          flown by LC Phalk Sturm (who took second place in TIE), myself (who took third...), LT
          Coldsnacks, LCM Morgoth, and LCM Wreckage. The more the better - let's try for a 100
          point lead! We only have until the end of next month, but it's possible.
        </p>

        <p>
          We flew as the "Storm Knights" in the Cadet Cup, our first fleet battles competition.
          While we didn't win, we learned a lot thanks to LCM Honsou's leadership and advice. We
          continue to hone our tactics through LCM Wreckage's Tempest Raid Nights as well, which
          are temporarily Mondays and Wednesdays at 930pm EST. LCM Wreckage also took place in the
          Twin Suns fleet battles tournament, with a $20,000 prize at stake, fighting against the
          {'best teams in the world. '}
          <Link href="https://www.youtube.com/watch?v=hcvQRXrGZ00">
            The finals are absolutely worth watching!
          </Link>
        </p>

        <p>
          LCM Wreckage is hosting "Tempest King of the Mountain", a 1v1 Squadrons tournament. It
          offically started this week, and the first rounds should be completed by May 22. The
          first round will be:
        </p>

        <ul>
          <li>LT Coldsnacks vs LC Phalk Sturm</li>
          <li>CM Neko vs LCM EchoVII</li>
          <li>COL Silwar vs LT Akreseus</li>
          <li>LCM Morgoth vs CM Richlet</li>
          <li>LCM Honsou and LCM Wreckage have a bye.</li>
        </ul>

        <p>
          May TCiB assignments are due May 31:
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=507&type=info">
              TIE-TC 168: Project Omega
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1057&type=info">
              XvT-TC 81: Saving Anna Darksaber
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1156&type=info">
              XWA-TC 39 - Wing IX: Encryption Error
            </Link>
          </li>
        </ul>
      </Intro>

      <Orders missions={orders}>
        <p>
          Top priority are the TCiB battles; besides those, these are some of the missions we're
          {' close to earning citations on. Check our status on the '}
          <Link href="https://tc.emperorshammer.org/battleboard.php?sqn=45">Squadron Battleboard</Link>.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
        Tempest Squadron is as active as ever, with the help of everyone- whether participating
        in TCiB or tournaments like the Cadet Cup and Twin suns; volunteering to teach us Fleet
        Battles techniques; commissioning songs; or simply flying enough to strike fear into the
        hearts of all who oppose the Empire.
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
