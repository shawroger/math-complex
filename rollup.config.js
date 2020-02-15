import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
	input: "lib/index.js",
	output: {
		name: "mathComplex",
		file: "dist/math-complex.js",
		format: "umd"
	},
	plugins: [
		resolve(),
		babel({
			exclude: "node_modules/**"
		})
	]
};
