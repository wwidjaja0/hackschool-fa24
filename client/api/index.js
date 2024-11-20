import axios from "axios";

const serverURL = "https://hackschool-fa24-bkdt.onrender.com/";

const TravelAPI = {
	getTrip: () => axios.get(`${serverURL}/api/trip`),
	getActivity: () => axios.get(`${serverURL}/api/activities`),
	postTrip: (payload) => axios.post(`${serverURL}/api/trip`, payload),
	postActivity: (payload) => axios.post(`${serverURL}/api/activities`, payload),
};

export default TravelAPI;
