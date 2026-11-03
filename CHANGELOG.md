# Changelog

## Unreleased

## 0.1.2 - 2026-11-03

### Fixed

- Darkened the light-mode muted text color so secondary text reaches WCAG AA contrast (at least 4.5:1) on every surface it appears on.
- On touch devices, buttons, toggles, checkboxes, radio buttons, switches, slider thumbs, select triggers, tabs, accordion triggers, and navigation menu triggers now have a tappable area of at least 44×44px without changing how they look, unless a neighboring control overlaps that area; keyboard shortcut hints are hidden.

## 0.1.1 - 2026-07-20

### Fixed

- Fixed trusted publishing automation to detect versions through the repository's pnpm-enforced package manager.

## 0.1.0 - 2026-07-20

### Added

- Published the complete 61-component shadcn catalog as `@24letters/ui` using the compact Base Mira design, Base UI primitives, Phosphor icons, and olive theme used by 24letters projects.
- Added a private Vite + React showcase with realistic product screens and an exhaustive component gallery.
- Added CI, npm trusted publishing with provenance, and GitHub releases generated from this changelog.
