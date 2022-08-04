import React, { useEffect } from 'react';
import RocketListing from './rocketListing';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets'

const Rockets = () => {
  const rockets = useSelector((state) => state.entities.rockets);
  console.log(rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <section>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.rocketId}>
            <RocketListing rocket={rocket} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Rockets;
