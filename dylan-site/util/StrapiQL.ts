"use server";

import { HomePage } from "@/Schemas/HomePage";

const queryData = async (query: any) => {
	const url = `${process.env.STRAPI_HOST}/graphql`;
	try {
		const headers = {
			next: {
				revalidate: 60, // 1 minute
			},
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.STRAPI_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: query,
			}),
		};

		const res = await fetch(url, headers);

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
		return { data: undefined, error: error };
	}
};

export const getHomePage = async () => {
	return queryData(HomePage);
};
