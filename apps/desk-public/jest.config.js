module.exports = {
  name: 'desk-public',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/desk-public/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
