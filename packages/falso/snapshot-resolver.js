module.exports = {
  testPathForConsistencyCheck: 'some/tests/example.spec.ts',
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace('tests/', 'tests/__snapshots__/') + snapshotExtension
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
      .replace('tests/__snapshots__/', 'tests/')
      .slice(0, -snapshotExtension.length)
  },
}
