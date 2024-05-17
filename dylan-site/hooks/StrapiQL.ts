import HomePage from "../Schemas/HomePage";

const fetchData = async (url: string, params: any) => {
	try {
		const queryParams = new URLSearchParams(params.params).toString();
		const fullUrl = `${url}?${queryParams}`;
		const headers = {
			next: {
				revalidate: 60, // 1 minute
			},
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.STRAPI_KEY}`,
				"Content-Type": "application/json",
			},
		};

		const res = await fetch(fullUrl, headers);

		if (!res.ok) {
			return { data: undefined, error: "Error with Network" };
		}

		const response = await res.json();

		if (response && response.data) {
			if (response.data.length > 0) {
				return { data: response.data, error: null };
			} else if (response.data.attributes) {
				return { data: response.data.attributes, error: null };
			}
		}

		return { data: undefined, error: "No data found" };
	} catch (error) {
		console.error("error", error);
		return { data: undefined, error };
	}
};
