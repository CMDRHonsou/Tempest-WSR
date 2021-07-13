import T from 'prop-types';
import Card from './card';
import Link from './link';
import styles from './styles';
import config from '../config';

export default function Citations({ citations, citationsChange, children }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        {`Squadron Citations: ${citations.length} (${citationsChange})`}
      </h5>

      <ul>
        {citations.map((c) => <li key={c}>{c}</li>) }
      </ul>

      { children }

      <p style={styles.p}>
        <Link
          href={`https://tc.emperorshammer.org/battleboard.php?sqn=${config.squadronId}`}
          target="_blank"
          rel="noreferrer"
        >
          View Squadron Battleboard
        </Link>
      </p>
    </Card>
  );
}

Citations.propTypes = {
  citations: T.arrayOf(T.string).isRequired,
  citationsChange: T.string,
  children: T.node,
};

Citations.defaultProps = {
  citationsChange: '+0',
  children: null,
};
