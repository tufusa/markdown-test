/** @type {import('tailwindcss').Config} */

import { join } from "path"

module.exports = {
  content: [
    join(__dirname, "./index.html"),
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"), // {}はOK
    // join(__dirname, "./src/**/*.{js, ts, jsx, tsx}"), //スペースを入れてはいけない！
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // corePlugins: {
    // preflight: false
  // }
}

