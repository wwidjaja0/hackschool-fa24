import styles from "../styles/TripForm.module.css";

const AddActivity = () => {
    return (
        <div className={styles.container}>
            <h2>Add an Activity</h2>
            <p>
                What fun things did you do on your trip? Sky-diving? Hiking?
                Kayaking?
            </p>
            <form className={styles.tripForm}>
                <label htmlFor="triptype">Choose your trip:</label>
                <select id="triptype" name="triptype" required>
                    <option>Paris (August 31, 2024 - September 9, 2024)</option>
                    <option>
                        London, UK (July 14, 2024 - November 14, 2024)
                    </option>
                    <option>
                        Geisel Library (September 29, 2024 - September 29, 2024)
                    </option>
                    <option>hawaii (October 6, 2024 - October 14, 2024)</option>
                    <option>
                        Paris (September 29, 2024 - October 29, 2024)
                    </option>
                    <option>Paris (October 15, 2024 - October 30, 2024)</option>
                </select>
                <label htmlFor="activity">Activity:</label>
                <input type="text" id="activity" name="activity" required />
                <label htmlFor="rating">Rating (1-5):</label>
                <select id="rating" name="rating" required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <label htmlFor="review">Review:</label>
                <textarea id="review" name="review" required></textarea>
                <button type="submit">Add Activity</button>
            </form>
        </div>
    );
};

export default AddActivity;
