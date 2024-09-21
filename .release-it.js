/**
 https://github.com/release-it/release-it/blob/main/config/release-it.json
 https://github.com/release-it/release-it/blob/main/docs/github-releases.md
 https://github.com/settings/tokens/new?scopes=repo&description=release-it
**/

/** @type {import('release-it').Config} */
module.exports = {
  git: {
    changelog: 'git cliff --unreleased',
  },
  hooks: {
    'before:init': [
      'git fetch --all --tags --prune',
      'which git-cliff',
      'nr prettier:fix',
      'git commit  --allow-empty -am "ci: format code with Prettier"',
      'nr eslint',
      'nr test',
    ],
    'before:beforeBump': [
      'git flow release start v${version}',
      'echo \uD83D\uDC4A before:bump latestVersion=v${version} previousVersion=v${latestVersion}',
    ],
    'after:bump': [
      'git cliff -o CHANGELOG.md && git add CHANGELOG.md',
      'git commit  --allow-empty -am "ci: add CHANGELOG"',
      'git flow release publish',
      'git flow release finish v${version} -m "Release v${version}" -n -p -F --keepremote',
      'echo \uD83D\uDC4A after:bump version=v${version} latestVersion=v${latestVersion}',
    ],
    'after:release': [
      'echo \uD83D\uDE4C Successfully released ${name} v${version} to ${repo.repository}.',
      'git push origin HEAD',
      'git push origin refs/heads/master:master',
      'git push origin refs/heads/develop:develop',
    ],
  },
  github: {
    release: true,
  },
}
