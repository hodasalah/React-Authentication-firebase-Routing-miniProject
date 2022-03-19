import axios from "axios";

//baseUrl
export const baseURL = "https://bayut.p.rapidapi.com";
// fetching data func
export const fetchApi = async (url) => {
	const { data } = await axios
		.get(url, {
			headers: {
				"x-rapidapi-host": "bayut.p.rapidapi.com",
				"x-rapidapi-key":
					"d5c75b0f1dmsh0a443d631462b9ap1031bdjsn8f9a2123284b",
			},
		})
		.catch((err) => {
			console.error(err);
		});

	return data;
};
