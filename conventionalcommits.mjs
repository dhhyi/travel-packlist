import createPreset from "conventional-changelog-conventionalcommits";

const config = createPreset({
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
  ],
});

export default config;
