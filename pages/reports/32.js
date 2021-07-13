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

const reportNumber = 32;
const startDate = '2021-03-03';
const endDate = '2021-03-09';
const submissionDate = '2021-03-09';

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
    flightActivity: 'Squadrons PvP; 5-mans Squadrons inter-org dogfights; Chalquilla Cup',
    otherActivity: 'Trivia for the Challenged; Trivia Grand Tour',
    notes: '',
  },

  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: '',
    otherActivity: 'Art for WSR #32',
    notes: '',
  },

  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    notes: 'More personal training in Squadrons with Iam. I can see the improvement!',
  },

  // Richlet
  4607: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP; Chalquilla Cup',
    otherActivity: 'Helping organize Tempest Raid Nights; rendering uniforms for the entire squadron',
    notes: 'Congratulations on the well-earned Bronze Star!',
  },

  // EchoVII
  55922: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; Chalquilla Cup',
    otherAcitivty: 'Streaming Chalquilla Cup matches',
    notes: 'Excellent flying in the CC, and thanks for streaming.',
  },

  // Wrecker
  55962: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; 5-mans Squadrons inter-org dogfights; Chalquilla Cup',
    otherActivity: 'Helping organize Tempest Raid Nights',
    notes: 'Thanks for helping getting Raid Nights going! Looking forward to regular FBs.',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'A PC for flying and fleet project contributions.',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'XWA and TIE for TCIB, plus some BoP',
    otherActivity: '',
    notes: 'Glad you are having a good time with BoP, and always a pleasure working together on TCiB.',
  },

  // Morgoth
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; Chalquilla Cup',
    otherActivity: '',
    notes: 'Completely absent this week... no, not Morgoth, the Rebels, who are fleeing the sector.',
  },

  // nindo
  55916: {
    communication: 'Discord',
    notes: 'Welcome back to Tempest!',
  },

  // Honsou
  55973: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'Another batch of LoCs, and an ISM for his February efforts.',
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
            Neko's craft crashed haphazardly into the lake, sending a muddy splash dozens of meters
            in the air. Her right wing finally relieved itself of her ship and went flying into a
            nearby tree, but more importantly, her peruser's less-agile craft had broken off. They
            would certainly land nearby and attempt to salvage what they could, but for now, she
            had to get to cover. The atomospheric readings didn't seem too harsh - or at least, not
            harsh enough that her suit started beeping once the hull was breached - and so she
            popped open the hatch and jumped into the lake.
          </em>
        </p>

        <p>
          <em>
            The water wasn't deep, and in no time she made it to shore. When she had a chance to
            take a look around, she found herself surrounded by piles of wreckage- ships,
            speeders, industrial equipment, what looked like a Gonk droid- as well as a dozen or
            so curious little furry creatures blinking at her. "Not scared of a TIE pilot," she
            wondered. "What are these things?"
          </em>
        </p>

        <p>
          <em>
            She activated her scanner, and saw what appeared to be thermal readings less than a
            half kilometer away. "Time to see who lives here, I suppose," she said to the parade
            of creatures now following her. "And whether it's friendly."
          </em>
        </p>

        <p>
          LT Morgoth is now LCM Morgoth, after two tremendously active months and hundreds of
          shredded Rebel craft. Congratulations, Lieutenant Commander. We are also rejoined by
          LT Nindo Ardinn, who returns after spending time in the Imperial University. He has
          been assigned to Flight 3 with LC Phalk Sturm as his Flight Leader; welcome back!
        </p>

        <p>
          MSE medals have been
          processed, and I guess the COO didn't want to let the SOO have all the
          fun because I've been awarded not one, but two Silver Stars this month. I'd say drinks
          are on me, but they're on Morgoth. Sorry, that's the rules.
        </p>

        <p>
          LT Wrecker and LCM Richlet have proposed standing, weekly times for Tempest to fly
          together. Our poll shows that we'll be playing PvE fleet battles in Squadrons, Monday
          and Tuesday nights at 9pm EST. We will also attend COL Stryker's "Squadrons for the
          Challenged" on Sunday afternoons, 4pm EST. I think it had a different name, but I forget.
          That's probably what he would have named it.
        </p>

        <p>
          Speaking of COL Stryker, Tempest's Temper Tantrums flew against both Firebird teams,
          scoring two wins against ChickenHawk and two second-place victories against Leghorn.
          We have one match left, against the Jolly Rho-gers, and then the first season is done!
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

        <img
          src="/art/neko-nature-reclaims-tie.jpg"
          width="100%"
          alt="A TIE fighter is surrounded by plants and rocks; vines grow on the TIE."
        />

        <p>
          <em>{'"Nature reclaims a forgotten TIE", art by LCM Neko. '}</em>
          {' Don\'t forget to take part in the coloring competition, '}
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">
            "Stay In the Lines"!
          </Link>
        </p>

        <p>
          The first month of TCiB is over, and Tempest is in second place by a single point. It's
          kind of you to let Lambda take a short lead, but we can't let their egos get too
          inflated. March TCiB assignments are due March 31:
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

        <p>
          I have received several applications for the SQXO position and will begin the process of
          selecting for the position soon. While there's only one position to provide, it's an
          indication that there are several pilots interested in leadership; I'll be in touch
          regarding opportunities and guidance, such as I can provide.
        </p>
      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        Congratulations to MSE award winners- that's a full 100% of the squadron, not that any of
        us expected any less. Time to "beet" Lambda - or is it "bleat"- in TCiB. Also, next week is
        my six-month anniversary as Tempest CMDR; if you're considering gifts, I prefer brown
        liquor.
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
