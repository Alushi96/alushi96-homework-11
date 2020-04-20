# Changelog

All notable changes to this project will be documented in this file.

## [0.0.7] - 2019-12-25

### Added

- Auto add subdirectories recursively using nodejs inbuilt system. No API Changes.

## [12.0.5] - 2020-01-05

### Added

- getLinesCount()
- readByLineNumbers()
- writeLines() Extremely fast way to write data at the end of a file.
- versioning system changed. 12.x means that we support LTS release of nodejs v.12.

## [12.1.1] - 2020-01-14

### Added

- readFile()
- fileExistsSync()
- directoryExistsSync()
- fileExists()
- directoryExists()
- openDirectory()
- openFile()

Tree shaking capability. Just import the function you require.

### Deprecated

- readStorage() Reason: readStorage is basically readFile with complexities.

## [12.2.0] - 2020-01-19

### Added

- getDirectoryEntries()

</b>

## [Unreleased]

- Added Middleware support - https://github.com/apickjs/apickFS/blob/middleware-manager-setup

</b>
</b>
</b>

Format of Changelog
version - date
API Changes
Changed
Added
Fixed
Removed
