import axios from "axios";

const fetchData = async (url: String, params: any) => {
	const axiosConfig = axios.create({
		headers: {
			Authorization: `bearer ${process.env.STRAPI_KEY}`,
		},
	});
	try {
		const response = await axiosConfig.get(url as string, params as any);
		if (response.data) {
			if (response.data.data.length > 0) {
				return { data: response.data.data[0].attributes, error: null };
			}
			return { data: response.data.data.attributes, error: null };
		} else {
			return { data: undefined, error: "No data found" };
		}
	} catch (error) {
		console.log("error loading data:", error);
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

	return await fetchData(url as String, params as any);
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

	return await fetchData(url as String, params as any);
};

export const getBlogPage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/blogs-page`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url as String, params as any);
};

export const getAllProjects = async () => {
	const url = `${process.env.STRAPI_HOST}/api/projects`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url as String, params as any);
};

export const getAllBlogs = async () => {
	const url = `${process.env.STRAPI_HOST}/api/blogs`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url as String, params as any);
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

export default {
	getHomePage,
	getAboutPage,
	getProjectPage,
	getBlogPage,
	getProject,
	getBlog,
};
