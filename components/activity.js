import { Fragment } from 'react';
import T from 'prop-types';
import Card from './card';
import PilotActivity from './pilotActivity';
import FlightInfo from './flightInfo';

/* eslint react/jsx-props-no-spreading: 0 */

export default function Activity({ activity }) {
  let previousFlight = 0;

  return (
    <Card>
      {/* flight info here as part of the map, above the first person from each flight */}

      {activity.map((a) => {
        const currentFlightIndex = previousFlight;
        previousFlight = (((a.sqnSlot - 1)/4) >> 0) + 1;

        return (
          <Fragment key={a.PIN}>
            { previousFlight !== currentFlightIndex && currentFlightIndex > 0 && <Card />}
            {
              previousFlight !== currentFlightIndex && (
                <FlightInfo flight={currentFlightIndex + 1} />
              )
            }

            <PilotActivity {...a} key={a.PIN} />
          </Fragment>
        );
      })}
    </Card>
  );
}

Activity.propTypes = {
  activity: T.arrayOf(T.shape(PilotActivity.propTypes)).isRequired,
};
