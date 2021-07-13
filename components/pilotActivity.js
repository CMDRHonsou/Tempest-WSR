import { omit } from 'lodash/object';
import T from 'prop-types';
import { rankImages, ranks } from './ranks';
import Link from './link';
import MedalCase from './medalCase';
import activityItem from './activityItem';
import styles from './styles';

export default function PilotActivity({
  PIN,
  name,
  rank,
  activity,
  communication,
  flightActivity,
  otherActivity,
  notes,
}) {
  const RankImage = rankImages[rank];
  const { MEDALS_AWARDED: awardedMedals } = activity;

  return (
    <div>
      <RankImage />

      <Link
        href={`https://tc.emperorshammer.org/record.php?pin=${PIN}&type=profile`}
        target="_blank"
        rel="noreferrer"
        style={{ position: 'relative', bottom: '7px' }}
      >
        <strong style={styles.h4}>
          {`${ranks[rank].toUpperCase()} ${name}`}
        </strong>
      </Link>

      <dl style={{ marginTop: '0', marginBottom: '1em' }}>
        <dt style={styles.dt}>Communication:</dt>
        <dd style={styles.dd}>{communication || 'None'}</dd>

        {flightActivity ? (
          <>
            <dt style={styles.dt}>Flight Activity:</dt>
            <dd style={styles.dd}>{flightActivity}</dd>
          </>
        ) : null}

        { Object.keys(omit(activity, 'MEDALS_AWARDED')).map((activityName) => (
          activityItem[activityName]
            ? activityItem[activityName](activity[activityName])
            : null
        ))}

        {otherActivity ? (
          <>
            <dt style={styles.dt}>Other:</dt>
            <dd style={styles.dd}>{otherActivity}</dd>
          </>
        ) : null}

        {notes ? (
          <>
            <dt style={styles.dt}>Notes:</dt>
            <dd style={styles.dd}>{notes}</dd>
          </>
        ) : null}

        {awardedMedals ? (
          <MedalCase medals={awardedMedals} />
        ) : null }
      </dl>
    </div>
  );
}

PilotActivity.propTypes = {
  PIN: T.number.isRequired,
  name: T.string.isRequired,
  rank: T.oneOf(Object.keys(ranks)).isRequired,
  activity: T.any.isRequired,
  flightActivity: T.string,
  communication: T.string,
  notes: T.string,
  otherActivity: T.string,
};

PilotActivity.defaultProps = {
  flightActivity: null,
  notes: null,
  otherActivity: null,
  communication: null,
};
