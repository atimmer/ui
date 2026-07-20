# Publishing `@24letters/ui`

Publishing follows the same tag-driven GitHub Actions model as `@24letters/devservers`. The public GitHub repository and npm's trusted publishing provide provenance without storing a long-lived npm token in GitHub. The workflows use Node.js 24, pnpm 11, Node 24-compatible action versions, GitHub's authenticated CLI for releases, and the stable TypeScript declaration generator used by local publishing. CI exercises the complete package-local publishing lifecycle with a dry run.

## Trusted publisher

The npm trusted publisher is configured for the `atimmer/ui` repository and `.github/workflows/npm-publish.yml`. The workflow uses OIDC; do not add an `NPM_TOKEN` GitHub secret.

## Normal releases

1. Update `packages/ui/package.json` to the new version.
2. Move entries from `## Unreleased` into `## X.Y.Z - YYYY-MM-DD` in `CHANGELOG.md`.
3. Run `vp run ready` and `(cd packages/ui && npm pack --dry-run)`.
4. Commit and push the release changes.
5. Create and push the matching version tag, for example `v0.2.0`.

The tag verifies the version, runs the complete checks, publishes with npm provenance, and creates a GitHub release using the matching changelog section.

## Troubleshooting

- If trusted publishing rejects the workflow, verify the GitHub owner, repository, and workflow filename exactly; the filename is not the full `.github/workflows/` path.
- The package's `repository.url` must continue to match `https://github.com/atimmer/ui` for provenance.
- Do not reuse a published version. Increase the package version and create a matching tag.
