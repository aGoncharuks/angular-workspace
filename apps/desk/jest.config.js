module.exports = {
  name: "desk",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/desk/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
