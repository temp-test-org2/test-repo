/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/changelog",
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
