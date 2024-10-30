import styles from "../styles/TripForm.module.css";

const AddTrip = () => {
    return (
        <div className={styles.container}>
            <h2>Add a Trip</h2>
            <form className={styles.tripForm}>
                <label htmlFor="destination">Destination:</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    required
                />
                <label htmlFor="startdate">Start Date:</label>
                <input type="date" id="startdate" name="startdate" required />
                <label htmlFor="enddate">End Date:</label>
                <input type="date" id="enddate" name="enddate" required />
                <label htmlFor="journalentry">Journal Entry:</label>
                <textarea
                    id="journalentry"
                    name="journalentry"
                    required
                ></textarea>
                <button type="submit">Add Trip</button>
            </form>
        </div>
    );
};

export default AddTrip;
