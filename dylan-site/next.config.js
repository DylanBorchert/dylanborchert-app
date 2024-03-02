/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "strapi.phantommedia.online",
				port: "",
				pathname: "/uploads/*",
			},
		],
	},
};

module.exports = nextConfig;
