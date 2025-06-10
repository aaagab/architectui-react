# Changelog

## [4.1.0] - 2025-06-09

- Enabled StrictMode and fixed most of the browser console warnings.
- Some nodes modules have been embedded into the sources and refactored to fix StrictMode warning:
  - react-metismenu
  - react-metismenu-router-link (now working with react-router-dom v7)
  - react-input-mask
  - react-sticky-el
  - react-visibility-sensor
  - reactstrap (partially embedded)
- Refactored multiple components.
- replaced following packages with vite-plugin-node-polyfills:
  - assert
  - crypto-browserify
  - stream-http
  - https-browserify
  - buffer
  - stream-browserify
- Removed unused packages:
  - slick-carousel
  - jquery
  - @fortawesome/fontawesome-free
  - @types/markerclustererplus
  - aphrodite
  - chartist
  - chroma-js
  - date-arithmetic
  - globalize
  - hamburgers
  - install
  - react-animations
  - react-anime
  - react-compound-slider
  - react-dnd
  - react-dnd-html5-backend
  - react-image-crop
  - react-map-gl
  - react-on-screen
  - react-paginate
  - react-popper
  - react-scroll
  - react-sizeme
  - react-table
  - react-validation
  - redux-logger
  - redux-thunk
  - validator

## [4.0.0] - 2025-06-05

### Changed

- Migrated to Vite.js with TypeScript.
- Upgraded react-router-dom to v7.
- Switched from HashRouter to BrowserRouter

### Fixed

- Fixed SCSS bugs.


## [3.0.0] - 2023-11-20

### Changed

- Migrated to React v18.
- Import SCSS files from `node_modules` by using the sass-loader instead of relative paths like `../../node_modules`.
- Upgraded all dependencies to latest versions.

### Fixed

- Fixed SCSS bugs.

## [2.1.0] - 2022-08-19

### Changed
- Updated Libraries

## [2.0.0] - 2022-03-03

### Changed
- Updated to React 17
- Added react-app-rewired
- Updated to Bootstrap 5
- Updated to Reactstrap 9
- Updated all Libraries

## [1.1.0] - 2021-05-17

### Changed
- Updated Libraries

## [1.1.0] - 2021-04-06

### Changed
- Updated Libraries

## [1.0.0] - 2019-03-05

### Added
- Initial Release

[3.0.0]: https://github.com/DashboardPack/architectui-react-theme-free/releases/tag/v3.0.0
