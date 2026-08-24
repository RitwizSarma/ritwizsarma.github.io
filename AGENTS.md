# Repository Guidelines

## Project Structure & Module Organization
This repository is a Hugo-based personal site using the vendored `PaperMod` theme in `themes/PaperMod/`. Site configuration lives in `config.yml`. Author-edited content is primarily under `content/`. Custom templates and theme overrides live in `layouts/` and `layouts/partials/`. Frontend assets belong in `assets/` (`assets/css/`, `assets/js/`). Files that should be published as-is, including PDFs, images, and bibliography files, go in `static/`.

## Build, Test, and Development Commands

- We use the alias `hss` for `hugo server --noHTTPCache` - this is run for continuous deployment while changes are made.
- This repo expects a recent Hugo version. `layouts/_default/baseof.html` enforces `hugo v0.147.2` or newer.

## Coding Style & Naming Conventions
Use YAML indentation consistent with `config.yml`: 2 spaces for nested keys. In Markdown content, prefer clear front matter plus concise body copy. Keep section content grouped by type: content in `content/`, theme overrides in `layouts/`, styling in `assets/css/`, and published binaries in `static/`.

Match existing naming patterns:

- section indexes: `_index.md`
- page bundles: `content/<section>/<slug>/index.md`
- static assets: lowercase, hyphenated names such as `bio-pic.png`

When changing theme behavior, prefer overriding files in `layouts/` or `assets/` instead of editing `themes/PaperMod/` directly.

## Important Files

- To edit certain frontpage and title bar content, use `config.yml` and `content/_index.md`.
- The main pages are `data.md`, `papers.md`, and `teaching.md`.
- We're going to build up the content in `courses/` slowly. For now, we're not committing it - it stays local.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit messages, often with an update prefix, for example `February update: minor fix.` or `Edit: updated Bio, moved around Papers.` Keep commits scoped to one content or layout change.

PRs should include a brief summary, affected paths, and screenshots for visible layout changes. Link any related issue or note the page URL/section changed when the work is content-focused.
