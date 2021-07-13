/* eslint react/jsx-props-no-spreading: 0, react/forbid-prop-types: 0 */

import T from 'prop-types';
import styles from '../components/styles';

function MyApp({ Component, pageProps }) {
  return (
    <table style={styles.body}>
      <tbody>
        <tr style={styles.body}>
          <td style={styles.body}>
            <div style={styles.body}>
              <Component {...pageProps} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

MyApp.propTypes = {
  Component: T.any.isRequired,
  pageProps: T.object.isRequired,
};

export default MyApp;
