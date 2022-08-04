import React from 'react';
import {useDispatch} from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';

const RocketListing = ({rocket}) => {
const { image, rocket_name, description,rocketId, reserved } = rocket;
const dispatch = useDispatch();
    
return(
    <div>
        <div>
            <img src={image} alt={image} />
        </div>
        <div>
            <h3>{rocket_name}</h3>
        <div>
            {reserved ? <span style={{color: 'red'}}>Reserved</span> : ''}
            {description}
        </div>
        {reserved
            ? <button type="submit" onClick={() => dispatch(cancelReservation({ rocketId }))}>Cancel Reservation</button>
            : <button type="submit" onClick={() => dispatch(reserveRocket({ rocketId }))}>Reserve Rocket</button>}
        </div>
  </div>
    );
}

export default RocketListing