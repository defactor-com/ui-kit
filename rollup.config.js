import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      commonjs({
        include: /node_modules/,
        namedExports: {
          "node_modules/recharts/index.js": [
            "Area",
            "YAxis",
            "Tooltip",
            "AreaChart",
            "TooltipProps",
            "CartesianGrid",
            "ResponsiveContainer",
          ],
        },
      }),
      scss({
        output: true,
        failOnError: true,
        outputStyle: "compressed",
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      typescript(),
      image(),
      terser(),
    ],
  },
];
