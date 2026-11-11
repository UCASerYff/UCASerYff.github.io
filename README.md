# Personal Academic Homepage

This is a pure static GitHub Pages site. It is designed for a `username.github.io` repository and can be deployed from the repository root without a build step.

## Before publishing

1. Review the public profile fields in `index.html`: name, affiliation, location, email, GitHub, Google Scholar, and research summary.
2. Review every publication, patent, award, and project entry for public accuracy.
3. Keep the local material folders out of Git. The `.gitignore` intentionally excludes private PDFs, certificates, project books, and source archives.
4. Push only the public site files to the GitHub Pages repository.

## Files

- `index.html`: home page with the profile, research interests, a short publication teaser, and contact. Old in-page hashes for publications, patents, projects, and honors redirect to the matching pages.
- `publications.html`: selected papers.
- `patents.html`: invention patents, utility models, and software copyrights.
- `projects.html`: project experience.
- `honors.html`: awards and service.
- `404.html`: not-found page in the same style.
- `styles.css`: shared responsive visual design, including dark mode.
- `assets/profile.jpg`: public profile photo used on the homepage.
- `.nojekyll`: keeps GitHub Pages from running Jekyll.
