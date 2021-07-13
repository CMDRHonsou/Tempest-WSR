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

const reportNumber = 31;
const startDate = '2021-2-25';
const endDate = '2021-03-02';
const submissionDate = '2021-03-03';

const competitions = [{
  id: '3242',
  name: 'The Chalquilla Cup I',
  ends: '2021-04-01',
  units: 'Entire TC',
  notes: '3-person teams with up to 3 subs will sign up by January 14 and take part in 3v3 battles in Star Wars Squadrons.',
  highlight: true,
}, {
  id: '',
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
  highlight: true,
}, {
  id: '3262',
  name: 'Trivia for the Challenged 2021 - Season 1',
  ends: '2020-07-31',
  units: 'ISD-II Challenge',
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
    flightActivity: 'Squadrons PvP; XWA battles; started a 19-mission XWA battle; 5-mans Squadrons inter-org dogfights',
    otherActivity: 'The longest report yet.',
    notes: '',
  },

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: '',
    otherActivity: 'Art for WSR #31',
    notes: '',
  },

  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    notes: 'Great flying with you last weekend!',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP; XWA and TIE for TCiB',
    otherActivity: 'Better Know your Spacefighters entry',
    notes: 'Congrats on the well-deserved CM promotion, and the IS-BR for trivia answers.',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherAcitivty: 'Sithposting in the Squadrons Discord',
    notes: 'Congrats on the promotion to LCM! Time to update your uniform.',
  },

  // Wrecker
  55962: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; 5-mans Squadrons inter-org dogfights',
    notes: 'Name changed from CzR. I think your new one is pretty accurate - wrecking the Rebels.',
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
    flightActivity: 'XWA',
    otherActivity: '',
    notes: 'Got XvT (or at least BoP) working. Looking forward to many more BSFs.',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'No sign of slowing down the LoCs. Congrats on the Trivia medal.',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'Starting to pick up combat ratings - great job with the Squadrons wins.',
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
      src={`/competitions/stay-in-the-lines/2021-02/${image}`}
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

      <Intro showUniform={false}>
        <p>
          Last month, Tempest Squadron had a competition called "Better Know your Spacefighters."
          In it, each pilot was asked to set their personal ship and its name in their profile, and
          send me either a fiction entry, picture, or a description of their ship. Additionally,
          {'it was suggested that they review the '}
          <Link href="https://www.emperorshammer.org/course.php?id=95">ESET</Link>
          {' and '}
          <Link href="https://www.emperorshammer.org/course.php?id=96">ISET</Link>
          {' IU courses for ideas. (LT Honsou, LT Wrecker, LC Phalk Sturm, CPT Kalve Ryder, and '}
          I all received 100% on one or both exams- congrats! We had 100% participation with
          an entry from every pilot in the squadron. The chosen ships and names were:
        </p>

        <ul>
          <li>COL Silwar Naiilo: TIE Defender "Nightgleam"</li>
          <li>LCM Neko: Y-Wing "The Onyx Miggie"</li>
          <li>LCM Iam Thinking: Missile Boat ""</li>
          <li>CM Richlet: TIE Defender "Mr. Grumpypants"</li>
          <li>LCM EchoVII: B-Wing "Cardi B-Wing"</li>
          <li>LT Wrecker: TIE Interceptor "Czr's Palace"</li>
          <li>CPT Kalve Ryder: Assault Gunboat "Firestorm"</li>
          <li>LC Phalk Sturm: a custom Hanley-Davinsarr Hover Star Cycle FXHSC</li>
          <li>LT Morgoth: Firespray Attack Ship "Reigning Death"</li>
          <li>LT Honsou: TIE Reaper "Tempestas Ferri"</li>
        </ul>

        <p>
          The winners of the compeition are: <strong>{' LC Phalk Sturm'}</strong>, who put together
          the technical specification for a brand-new ship of his own design as well as a work of
          fiction in which he flies it, and <strong>{' LT Honsou '}</strong> with a riveting tale
          of the experience he had as a cadet in a TIE Reaper. Runners-up are
          <strong>{' LCM Neko '}</strong> with a drawing of her Y-Wing and
          <strong>{' LCM EchoVII '}</strong> with a poem about her B-Wing. Everyone's entries were
          great, but unfortunately I can only pick a couple winners!
        </p>

        <p>
          Stay in the Lines February is over! Congratulations to the winners:
        </p>

        <SITLEntry place="First Place" name="Turtle Jerrar" image="1-turtle.png" />

        <SITLEntry place="Second Place" name="Zekk Terrik" image="2-zekk.jpg" />

        <SITLEntry place="Third Place" name="Firebreaker" image="3-firebreaker.jpg" />

        <p>
          The new picture comes from LCM Neko's "Better Know your Spacefighters" entry:
        </p>

        <img
          src="/art/neko-miggie.jpg"
          width="100%"
          alt="Neko's personal spacecraft, a Y-Wing named The Onyx Miggie."
        />

        <p>
          <em>{'"Neko\'s personal spacecraft, a Y-Wing named The Onyx Miggie.", art by LCM Neko. '}</em>
          {' Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>

        <p>
          March TCiB assignments have not been announced yet. Watch for Plif's email! In the
          Chalquilla Cup, we will be flying against Firebird's "The Leghorns" at 4pm EST this
          Sunday, March 7th.  We are also likely be facing Inferno's "Flaming Chalquilla"
          team this weekend.
        </p>
      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        <p>
          I shall leave you with EchoVII's poem:
        </p>

        <p>
          <em>
            <strong>"Me and my Cardi B-Wing"</strong><br />
            B-Wing, B-Wing, you're my kind of bling.<br />
            You look like a hornet getting ready to sting.<br />
            When we fly our enemies curse like Cardi B.<br />
            Your Gyro/Aux module is the Right Auxiliary...<br />
            The left, Proton Bombs are sure not to miss,<br />
            As you soar like a bird through the Zavian Abyss.<br />
          </em>
        </p>
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
