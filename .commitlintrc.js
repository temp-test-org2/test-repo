// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rule: {
    // ...
  },
  prompt: {
    scopes: ["test1", "test2", "service1", "service2", "client1", "client2"],
    useEmoji: true,
    skipQuestions: ["footerPrefix", "footer"],
  },
};
