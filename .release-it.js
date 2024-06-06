module.exports = {
  hooks: {
    'before:init': [
      'git fetch --all --tags --prune',
      'bun run pretty-quick',
      'git commit  --allow-empty -am "chore: format code with Prettier"',
      'bun run test',
    ],
    'before:beforeBump': [
      'git flow release start v${version}',
      'echo \uD83D\uDC4A before:bump latestVersion=v${version} previousVersion=v${latestVersion}',
    ],
    'after:bump': [
      'git cliff -o CHANGELOG.md && git add CHANGELOG.md',
      'git commit  --allow-empty -am "chore: add CHANGELOG"',
      'git flow release publish',
      'git flow release finish v${version} -m "Release v${version}" -n -p -F --keepremote',
      'echo \uD83D\uDC4A after:bump version=v${version} latestVersion=v${latestVersion}',
    ],
    'after:release': [
      'echo \uD83D\uDE4C Successfully released ${name} v${version} to ${repo.repository}.',
      'git push origin HEAD',
      'git push origin refs/heads/master:master',
    ],
  },
}
