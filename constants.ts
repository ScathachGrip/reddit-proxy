import * as pkg from "./package.json";

export default {
  "reddit": "https://www.reddit.com",

  useragent: `Cabul/v${pkg.version} (github.com/sinkaroid/cabul.git);`,
  port: process.env.PORT || 2003,
  log: "cabul.log",
  error: "cabul.error.log"

};
