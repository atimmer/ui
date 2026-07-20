# @24letters/ui

The complete [shadcn/ui](https://ui.shadcn.com/) component catalog, packaged with the compact `base-mira` design used by 24letters projects. It uses Base UI primitives, Phosphor icons, an olive color palette, Inter for interface text, and Newsreader for editorial accents.

The repository contains two workspaces:

- `packages/ui` is the publishable `@24letters/ui` package.
- `apps/showcase` is a private Vite + React application with realistic screens and an exhaustive component gallery.

## Development

Requirements: Node.js 22.18 or newer, pnpm (managed by Vite+), and the global `vp` command.

```sh
vp install
vp run dev
```

The development server is managed outside this repository. Register or start it with the local `devservers` CLI instead of running `vp run dev` directly when working through Codex.

Run the complete verification suite with:

```sh
vp run ready
```

The ready task builds workspace dependencies first, then formats, lints, type-checks, and tests the repository so it behaves the same on a clean CI checkout.

## Using the package

Install the package and its React peer dependencies:

```sh
pnpm add @24letters/ui react react-dom
```

Import the design tokens once in the application stylesheet:

```css
@import "@24letters/ui/styles.css";
```

Then import components from the package:

```tsx
import { Button, Card, CardContent } from "@24letters/ui";
```

The stylesheet contains Tailwind CSS v4 sources and requires the consuming application to process CSS with Tailwind.

## Components

`@24letters/ui` includes all 61 UI items in the shadcn catalog available to the project: accordion, alert, alert dialog, aspect ratio, attachment, avatar, badge, breadcrumb, bubble, button, button group, calendar, card, carousel, chart, checkbox, collapsible, combobox, command, context menu, dialog, direction, drawer, dropdown menu, empty, field, form, hover card, input, input group, input OTP, item, keyboard key, label, marker, menubar, message, message scroller, native select, navigation menu, pagination, popover, progress, radio group, resizable panels, scroll area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toggle, toggle group, and tooltip.

## Releases

1. Update the package version in `packages/ui/package.json`.
2. Move the relevant `CHANGELOG.md` entries from `Unreleased` into a new `## x.y.z - YYYY-MM-DD` section.
3. Commit and push those changes.
4. Create and push a matching `vX.Y.Z` tag.

The tag starts GitHub Actions that verify the repository, publish `@24letters/ui` to npm with trusted publishing and provenance, and create a GitHub release from the matching changelog section.

Before the first automated release, an npm owner must create the package and configure its trusted publisher. See [PUBLISHING.md](./PUBLISHING.md) for the one-time manual steps.

## License

MIT. This project is a derivative distribution of shadcn/ui and retains the original shadcn copyright and license notice. See [LICENSE](./LICENSE).
