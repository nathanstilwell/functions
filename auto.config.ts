import { AutoRc } from "auto";

import { INpmConfig } from "@auto-it/npm";

const npmOptions: INpmConfig = {
  canaryScope: "@auto-canary",
  setRcToken: false,
};

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    plugins: [
      ["npm", npmOptions],
      "released",
    ],
    onlyPublishWithReleaseLabel: true,
  };
}
