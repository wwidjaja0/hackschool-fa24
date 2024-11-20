import styles from "../styles/TripForm.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TravelAPI from "../../api";

const AddActivity = () => {
	/*  Activity 1: Add the useState hooks for 
    trips, 
    selectedTrip, 
    activity, 
    rating,
    review,
  */
	const [trips, setTrips] = useState([]);
	const [selectedTrip, setSelectedTrip] = useState("");
	const [activity, setActivity] = useState("");
	const [rating, setRating] = useState("");
	const [review, setReview] = useState("");
	const router = useRouter();

	const fetchTrips = async () => {
		const response = await TravelAPI.getTrip();
		setTrips(response.data);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await TravelAPI.postTrip({
			trip: selectedTrip,
			activity: activity,
			rating: rating,
			review: review,
		});

		router.push("/");
	};

	useEffect(() => {
		fetchTrips();
	}, []);

	return (
		<div className={styles.container}>
			<h2>Add an Activity</h2>
			<p>
				What fun things did you do on your trip? Sky-diving? Hiking? Kayaking?
			</p>
			<form className={styles.tripForm} onSubmit={handleSubmit}>
				<label htmlFor="trip">Choose your trip:</label>
				<select
					name="tripPicker"
					className="tripPicker"
					onChange={(event) => {
						setSelectedTrip(event.target.value);
					}}
				>
					{trips.map((trip) => {
						<option key={trip._id} value={trip._id}>
							{trip.destination} (formatDate({trip.startDate}) - formatDate (
							{trip.endDate}))
						</option>;
					})}
				</select>
				<label htmlFor="activity">Activity:</label>
				<input
					type="text"
					className="activity"
					name="activity"
					onChange={(event) => {
						setActivity(event.target.value);
					}}
					required
				/>
				<label htmlFor="rating">Rating (1-5):</label>
				<select
					name="rating"
					className="rating"
					onChange={(event) => {
						setRating(event.target.value);
					}}
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<label htmlFor="review">Review:</label>
				<textarea
					className="review"
					name="review"
					onChange={(event) => {
						setReview(event.target.value);
					}}
					required
				></textarea>

				<button type="submit">Add Activity</button>
			</form>
		</div>
	);
};

export default AddActivity;
