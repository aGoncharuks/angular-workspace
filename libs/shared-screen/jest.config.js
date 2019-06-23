module.exports = {
  name: 'shared-screen',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/shared-screen',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
