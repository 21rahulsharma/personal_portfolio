import { spawnSync } from "node:child_process";

const build = spawnSync(
  process.execPath,
  ["scripts/with-app-env.mjs", "node", "node_modules/vite/bin/vite.js", "build"],
  {
    stdio: "inherit",
    env: { ...process.env, GITHUB_PAGES: "true" },
  },
);

if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

await import("./prepare-github-pages.mjs");
