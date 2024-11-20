import TripCard from "@/components/TripCard";
import ActivityCard from "@/components/ActivityCard";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import TravelAPI from "../../api";

const Home = () => {
	/* Activity 1: Add the useState hooks for 
    trips, 
    activities
  */
	const [trips, setTrips] = useState([]);
	const [activities, setActivites] = useState([]);

	const fetchTrips = async () => {
		const response = await TravelAPI.getTrip();
		console.log("Fetched trips from:", response.config.url);
		setTrips(response.data);
	};

	const fetchActivities = async () => {
		const response = await TravelAPI.getActivity();
		setActivites(response.data);
	};

	useEffect(() => {
		fetchTrips();
		fetchActivities();
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.tripContainer}>
				<div className={styles.tripBox}>
					<h3>Trips</h3>
					{trips.length > 0 ? (
						trips.map((trip) => (
							<TripCard
								key={trip._id}
								destination={trip.destination}
								journalEntry={trip.journalEntry}
								startDate={trip.startDate}
								endDate={trip.endDate}
							/>
						))
					) : (
						<p> No trips available. </p>
					)}
				</div>
				<div className={styles.tripBox}>
					<h3>Activities</h3>
					{activities.length > 0 ? (
						activities.map((activity) => (
							<ActivityCard
								key={activity._id}
								trip={activity.trip}
								activitySpot={activity.activitySpot}
								rating={activity.rating}
								review={activity.review}
							/>
						))
					) : (
						<p> No activities available. </p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
