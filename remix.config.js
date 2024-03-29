/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	// When running locally in development mode, we use the built-in remix
	// server. This does not understand the vercel lambda module format,
	// so we default back to the standard build output.
	server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
	serverBuildPath: "api/index.js",
	appDirectory: "app",
	assetsBuildDirectory: "public/build",
	publicPath: "/build/",
	future: {
		v2_errorBoundary: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
	webpack(config) {
		config.module.rules.push({
		  test: /\.mp3$/,
		  use: 'file-loader',
		});
	
		return config;
	  },
	serverDependenciesToBundle: [
		/^rehype.*/,
		/^remark.*/,
		/^ccount.*/,
		/^markdown-table.*/,
		/^react-syntax-highlighter.*/,
		/^unified.*/,
		/^unist.*/,
		/^hast.*/,
		/^bail.*/,
		/^trough.*/,
		/^mdast.*/,
		/^micromark.*/,
		/^decode.*/,
		/^character.*/,
		/^property.*/,
		/^space.*/,
		/^comma.*/,
		/^react-markdown$/,
		/^vfile.*/,
		/^trim-lines.*/,
	],
};
