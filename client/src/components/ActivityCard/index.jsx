import styles from "./style.module.css";

// Add the props inside ()
const ActivityCard = ({ trip, activitySpot, rating, review }) => {
	// Remember to use the props using {} inside the <p> tags
	// Hint: for the trip prop, you'll need to access the destination with .destination
	return (
		<div className={styles.card}>
			<p className={styles.cardContent}>
				<strong>Trip: </strong> {trip}
			</p>
			<p className={styles.cardContent}>
				<strong>Activity Spot:</strong> {activitySpot}
			</p>
			{/* Bonus: express rating as stars using a cool trick with star emojis using fill and join string operations
          Array(Number(rating)).fill('⭐').join('') */}
			<p className={styles.cardContent}>
				<strong>Rating:</strong> {Array(Number(rating)).fill("⭐").join("")}
			</p>
			<p className={styles.cardContent}>
				<strong>Review:</strong> {review}
			</p>
		</div>
	);
};

export default ActivityCard;
