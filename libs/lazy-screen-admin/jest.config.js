module.exports = {
  name: 'lazy-screen-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lazy-screen-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
