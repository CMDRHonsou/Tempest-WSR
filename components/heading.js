import T from 'prop-types';
import Card from './card';
import styles from './styles';
import config from '../config';

// TODO: locally host banner image

export default function Heading({ reportNumber }) {
  return (
    <Card>
      <center>
        <h3 style={styles.h3}>{config.ship}</h3>
        <h1 style={styles.h1}>{`${config.squadron} Squadron`}</h1>

        <h2
          style={{
            ...styles.h2,
            marginTop: '1em',
            marginBottom: '1em',
            fontStyle: 'italic',
          }}
        >
          {config.reportTitleFormat(reportNumber)}
        </h2>

        <img
          alt="Tempest Banner"
          style={{ width: '100%' }}
          src={config.squadronBanner.url}
        />
      </center>
    </Card>
  );
}

Heading.propTypes = {
  reportNumber: T.number.isRequired,
};
