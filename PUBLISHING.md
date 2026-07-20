# Publishing `@24letters/ui`

Publishing follows the same tag-driven GitHub Actions model as `@24letters/devservers`. The public GitHub repository and npm's trusted publishing provide provenance without storing a long-lived npm token in GitHub.

## One-time setup

`@24letters/ui` does not exist on npm yet. npm requires the package to exist before a trusted publisher can be configured, so version `0.1.0` must be bootstrapped once from an npm-owner account.

1. Confirm that your npm account belongs to the `24letters` organization with permission to publish public packages and that two-factor authentication is enabled.
2. Authenticate locally if needed:

   ```sh
   npm login
   npm whoami
   ```

3. From the repository root, verify and inspect the package contents:

   ```sh
   vp run ready
   (cd packages/ui && npm pack --dry-run)
   ```

4. Publish the bootstrap version:

   ```sh
   pnpm publish --filter @24letters/ui --access public --no-git-checks
   ```

5. Open `https://www.npmjs.com/package/@24letters/ui/access`, find **Trusted Publisher**, choose **GitHub Actions**, and enter:

   - Organization or user: `atimmer`
   - Repository: `ui`
   - Workflow filename: `npm-publish.yml`
   - Environment: leave empty
   - Allowed action: `npm publish`

6. Optionally enable **Require two-factor authentication and disallow tokens** after trusted publishing is configured. Do not add an `NPM_TOKEN` GitHub secret; the workflow uses OIDC.
7. Create and push `v0.1.0`. The npm workflow detects that the bootstrap version already exists and succeeds without republishing it; the release workflow creates the GitHub release from `CHANGELOG.md`.

## Normal releases

1. Update `packages/ui/package.json` to the new version.
2. Move entries from `## Unreleased` into `## X.Y.Z - YYYY-MM-DD` in `CHANGELOG.md`.
3. Run `vp run ready` and `(cd packages/ui && npm pack --dry-run)`.
4. Commit and push the release changes.
5. Create and push the matching version tag, for example `v0.2.0`.

The tag verifies the version, runs the complete checks, publishes with npm provenance, and creates a GitHub release using the matching changelog section.

## Troubleshooting

- A `404` for `@24letters/ui` before the first publish is expected.
- If trusted publishing rejects the workflow, verify the GitHub owner, repository, and workflow filename exactly; the filename is not the full `.github/workflows/` path.
- The package's `repository.url` must continue to match `https://github.com/atimmer/ui` for provenance.
- Do not reuse a published version. Increase the package version and create a matching tag.
