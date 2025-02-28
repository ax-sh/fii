function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export async function run() {
  await wait(1000)
  console.log('doing')
}

// NPM_CONFIG_REGISTRY="https://npm.pkg.github.com/" npm publish --//npm.pkg.github.com/:_authToken="$(gh auth token)"
// NPM_CONFIG_REGISTRY="https://npm.pkg.github.com/" npm whoami --//npm.pkg.github.com/:_authToken="$(gh auth token)"
// NPM_CONFIG_REGISTRY="https://npm.pkg.github.com/" npm login --//npm.pkg.github.com/:_authToken="$(gh auth token)"
// NPM_CONFIG_REGISTRY="https://npm.pkg.github.com/" npm adduser --//npm.pkg.github.com/:_authToken="$(gh auth token)"
