import React from 'react';


// import './trips.scss';

import { NavLink } from 'react-router-dom';

import Trip from './Trip.js';



const Trips = ({ trips }) => {
	return (
		<div className='trips_container'>
			{trips.map((trip) => {
				return <NavLink key={trip.id} to='/sortie'>
					<Trip trip={trip} />
				</NavLink>
			})}
		</div>
	);
}


export default Trips;