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

const reportNumber = 38;
const startDate = '2021-05-16';
const endDate = '2021-05-30';
const submissionDate = '2021-05-30';

const citations = [
  'TIE-TC 12',
  'TIE-TC 76',
  'TIE-TC 168',
  'XWA-TC 8',
  'XWA-TC 22',
];

const citationsChange = '+1';

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
  id: '32389',
  name: 'Challenge Championship League',
  ends: '2021-08-08',
  units: 'ISD-II Challenge',
  notes: 'A 3v3 fleet battles league for pilots of the Challenge',
  highlight: true,
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

// TODO confirm
const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE; Squadrons PvP and PvE; Cadet Cup training; Tempest Raid Nights; Tempest King of the Mountain',
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
    flightActivity: 'TIE missions; Squadrons PvE and PvP; Tempest King of the Mountain',
    otherActivity: '',
    notes: '',
  },

  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'TIE missions',
    notes: '',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP; Tempest Raid Nights; Tempest King of the Mountain',
    otherActivity: '',
    notes: '',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP and PvE; Tempest King of the Mountain; Tempest Raid Nights',
    otherActivty: '',
    notes: '',
  },

  // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: 'Cadet Cup; Squadrons PvP and PvE; Tempest Raid Nights; XvT and TIE battles; Tempest King of the Mountain',
    otherActivity: '',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvP',
    otherActivity: '',
    notes: '',
  },

  // Phalk
  6874: {
    communication: 'Discord, Email',
    flightActivity: 'TCiB battles; XvT and TIE missions; XWA PvP and PvE; Tempest King of the Mountain',
    otherActivity: '',
    notes: '',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; TCiB battles; Tempest Raid Nights; TIE missions; Tempest King of the Mountain',
    otherActivity: '',
    notes: '',
  },

  // Coldsnacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvE and PvP; TCiB battles; TIE and XWA; Tempet Raid Nights; Tempest King of the Mountain',
    notes: 'Congratulations on your promotion!',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP and PvE; Tempest Raid Nights; Tempest King of the Mountain',
    otherActivity: 'Leading Fleet Battles training for Tempest',
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

      <Intro showUniform>
        <p>
          <em>
            The young lieutenant wheeled a hand-truck down the hallway of the
            ISD-II Challenge, causing heads to turn as one wobbly wheel
            squeaked and a wooden crate jingled like Darth Santa's sleigh.
            He stopped and pressed a few buttons outside of CMDR Silwar
            Naiilo's office. "Delivery for you, sir", he spoke into the
            intercom. "Compliments of the TIE Corps Commander." A few moments
            went by before the door opened, the slightly red-faced colonel
            placing a glass bottle underneath his desk and out of sight. "Thank
            you, you may leave it on my desk." He hid a scowl; he'd signed up
            to fly TIE Interceptors, not make deliveries to drunk commanders-
            but reluctantly lifted the heavy crate and set it on the desk with
            a heavy thud. Silwar signed the manifest, then popped the lid off
            with a stray carbon chisel. The glint of gold and silver within
            were the fruits of months of hard work, but before he had the
            chance to tell the lieutenant about it, he was already out the
            door.
          </em>
        </p>

        <p>
          ReMob awards have begun making their way through the fleet. I'm happy
          to say that out of twelve squadron members, we earned 24 medals -
          each member of Tempest earning the fleet's first Meritorious Unit
          Awards as well as an IS-GW each. The tailors are already working on
          updating our uniforms. Enjoy your well-earned bonus pay.
        </p>

        <p>
          CMDR Silwar Naiilo will be on leave from June 2 - June 9. The
          Squadron's XO, LCM EchoVII, will be in charge while I'm gone. She has
          the keys to the airlock, so behave. I will have the squadron MSE
          submitted before I leave.
        </p>

        <p>
          The very first Squadrons Week of War has begun - an event almost as
          old as the Emperor's Hammer, over 13 organizations and more than 110
          pilots have signed up to fly dogfights. The rules are simple; kills
          are set to max and the time limit to 10. The Emperor's Hammer is
          currently in third place out of thirteen - not bad for the first day!
          {'You can keep up with statistics on the '}
          <Link href="https://www.battlestats.com/events/view.php?5397">
            Battlestats website
          </Link>
          .
        </p>

        <p>
          In Tempest King of the Mountain, LCM Wreckage and LCM Honsou are
          fighting to take the top position of the winner's bracket. LCM
          Morgoth and LCM Neko will battle to face COL Silwar. The winner
          of that fight will fly against either CM Richlet or LCM Coldsnacks
          to determine the winner of the loser's bracket, who will then go
          on to the final round.
        </p>

        <ul>
          <li>LCM Wreckage vs LCM Honsou</li>
          <li>CM Neko vs LCM Morgoth</li>
          <li>CM Richlet vs LCM Coldsnacks</li>
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
        TODO we're awesome
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
