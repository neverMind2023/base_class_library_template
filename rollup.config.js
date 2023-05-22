import CommonjsPlugin from "@rollup/plugin-commonjs";
import NodeResolvePlugin from "@rollup/plugin-node-resolve";
import TypescriptPlugin from "@rollup/plugin-typescript";
import DtsPlugin from "rollup-plugin-dts";
import pkg from './package.json' assert { type: "json" };
const PLUGINS = [
	NodeResolvePlugin(),
	CommonjsPlugin(),
	TypescriptPlugin()
];

export default [
	{
		input: 'src/index.ts',
		output: {
			name: 'base_class_library',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: PLUGINS
	},

	{
		input: 'src/index.ts',
		// external: [''],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
        plugins: PLUGINS
	},
    {
        input: "src/index.ts",
        output: { file: "dist/index.d.ts", format: "esm" },
        plugins: [DtsPlugin()]
    }
];