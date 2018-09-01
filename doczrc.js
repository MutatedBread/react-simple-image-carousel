export default {
	typescript: true,
	hashRouter: true,
	// base: "https://mutatedbread.github.io/react-simple-image-carousel/",
	modifyBundlerConfig: config => {
		config.resolve.extensions.push(".css");
		config.module.rules.push({
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		});

		return config;
	}
};
