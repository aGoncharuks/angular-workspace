module.exports = {
  name: 'desk-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/desk-admin/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
