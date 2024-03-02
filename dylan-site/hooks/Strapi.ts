"use server";

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

export const getHomePage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/home-page`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url as string, params as any);
};

export const getAboutPage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/about-page`;
	const params = {
		params: {
			"populate[resume]": "*",
			"populate[portrait]": "*",
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url, params);
};

export const getProjectPage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/projects-page`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url as string, params as any);
};

export const getBlogPage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/blogs-page`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url as string, params as any);
};

export const getAllProjects = async () => {
	const url = `${process.env.STRAPI_HOST}/api/projects`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url as string, params as any);
};

export const getAllBlogs = async () => {
	const url = `${process.env.STRAPI_HOST}/api/blogs`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
			"filters[restrictToProject][$eq]": 0,
		},
	};

	return await fetchData(url as string, params as any);
};

export const getProject = async (UID: String) => {
	const url = `${process.env.STRAPI_HOST}/api/projects`;
	const params = {
		params: {
			"filters[UID][$eq]": UID,
			"populate[tags]": "*",
			"populate[content][populate]": "*",
		},
	};

	return await fetchData(url, params);
};

export const getBlog = async (UID: string) => {
	const url = `${process.env.STRAPI_HOST}/api/blogs`;
	const params = {
		params: {
			"filters[UID][$eq]": UID,
			"populate[tags]": "*",
			"populate[content][populate]": "*",
		},
	};

	return await fetchData(url, params);
};
