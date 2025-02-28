# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### 🚜 Refactor

- Update spinner success message for clarity

### ⚙️ Miscellaneous Tasks

- Format code with biome

## [0.109.0] - 2025-02-24

### 🚀 Features

- *(github)* Add function to list npm packages from GitHub

### 💼 Other

- Add tree-sitter dependencies and test file

### 🚜 Refactor

- Clean up code and remove unused function
- Optimize imports in TypeScript files

### 🎨 Styling

- *(package.json)* Format files array for readability

### 🧪 Testing

- *(parse-ts)* Add tests for parseTsSourceCode function
- *(parse-ts)* Add test for variable renaming functionality
- Add unit tests for import management functions
- Add tests for Vite plugins management functions
- Add base property to Vite config if missing
- Update tests for import management functionality
- Add tests for git push command and happydom setup
- Add gitPushInfoJson function and related tests
- *(happy)* Add tests for happy-dom functionality
- Add todos for logging unpushed commits
- Add spy for jetpack.dirAsync in index test

### ⚙️ Miscellaneous Tasks

- Update dependencies and clean up tests
- Format code with biome
- Format code with biome
- Add CHANGELOG

## [0.108.0] - 2025-02-02

### 🚀 Features

- *(cli)* Add default package manager to script function
- Wip
- Add service generation to extend add command
- Add async wait function to run service task

### 🐛 Bug Fixes

- *(ts-mod)* Handle potential null value in getType() call

### 🎨 Styling

- Format function parameters for better readability

### 🧪 Testing

- Add tests for git string cleaner functionality
- *(git-string-cleaner)* Add tests for GitStringCleaner class

### ⚙️ Miscellaneous Tasks

- Format code with biome
- Add CHANGELOG

## [0.107.0] - 2025-01-31

### 🚀 Features

- *(pytest)* Add pytest command with detailed documentation
- Add search-unpushed command for unpushed commits
- Add function to search string in all commits

### 🎨 Styling

- Format code and organize imports properly

### 🧪 Testing

- *(git)* Update describe name and refactor baseDir usage
- *(git)* Add test for searching unpushed commits

### ⚙️ Miscellaneous Tasks

- Format code with biome
- Add CHANGELOG

## [0.106.0] - 2025-01-30

### 🚀 Features

- *(config)* Add system command to display cycle count
- *(config)* Add getJsonFromCmd to config command
- *(py/update)* Add installation of ollama package

### 🚜 Refactor

- Reorganize file structure and imports
- Update import path for getJsonFromCmd function

### 🎨 Styling

- *(tests)* Format commented-out test cases in index.test.ts

### ⚙️ Miscellaneous Tasks

- Format code with biome
- Add CHANGELOG

## [0.105.0] - 2025-01-26

### 🚀 Features

- *(commands)* Add 'is-ci' flag to release command
- *(repo)* Add npm login command implementation
- Wip
- Add rimraf
- Add pkgroll command and clean script to package.json
- *(gh-pages)* Add remote check before adding gh-pages
- *(unocss)* Add unocss command for project setup
- *(unocss)* Add unocss command for project setup
- Add function to update GitHub repo description
- Update homepage URL retrieval in git utils function
- *(gh-pages)* Add GitHub Pages URL retrieval functionality
- Add function to parse JSON from command output
- Add cmd-utils for executing commands and parsing JSON
- *(types)* Add types for JSON structures and values
- *(cmd-utils)* Add type constraint on getJsonFromCmd function

### 🚜 Refactor

- Update logging and trim output in commands
- Add trim option to repo edit command
- *(gh-pages)* Remove unused import statement
- Rename function for clarity in git-utils
- Remove unused BrowserCookiesSingleton imports
- *(github)* Move GitHub related functions to services
- Update imports and enhance error logging

### 🎨 Styling

- *(package.json)* Format file array for clarity
- Update import statement to use 'type' keyword
- Format import statements and align code style

### 🧪 Testing

- *(git)* Update mock resolved value comment in test case
- Add tests for cmd utils functions
- *(cmd-utils)* Update test to use mocked function
- *(github)* Update test to include visibility field
- Update tests to use expect assertions
- Add missing tests and improve existing ones

### ⚙️ Miscellaneous Tasks

- Update package versions and add command description
- Format code with biome
- Update package dependencies in package.json
- Format code with biome
- Add CHANGELOG

## [0.104.0] - 2024-12-31

### 🚀 Features

- *(py/update)* Add open-webui installation to update command
- *(py/update)* Add pip upgrade command to update script

### 🚜 Refactor

- *(py/update)* Improve output filtering logic
- *(py/update)* Improve output filtering logic

### ⚙️ Miscellaneous Tasks

- Format code with biome
- Add CHANGELOG

## [0.103.0] - 2024-12-31

### 🚀 Features

- *(repo)* Add 'gh' command for GitHub API access

### 🚜 Refactor

- *(repo)* Parse token permissions to JSON format

### ⚙️ Miscellaneous Tasks

- Format code with biome
- Format code with biome
- Format code with biome
- Add CHANGELOG

## [0.102.0] - 2024-12-19

### 🚀 Features

- Add react hook form subcommand

### 🚜 Refactor

- Streamline error handling and output formatting

### 📚 Documentation

- *(eslint)* Update migration note for eslint v8

### ⚙️ Miscellaneous Tasks

- Update dependencies and improve scripts in package.json
- Update bun.lockb file
- Format code with biome
- Add CHANGELOG

## [0.101.0] - 2024-10-31

### 🚀 Features

- *(repo)* Add update or create functionality for PRs
- *(eslint)* Add test and tailwind configurations

### 🐛 Bug Fixes

- Update eslint config to include new rules and files

### 💼 Other

- Add is-ci dependency and update release-it config

### 🚜 Refactor

- *(release-it config)* Switch to CommonJS module export
- Rename release-it config file extension
- *(eslint)* Rename eslint config variables for clarity

### 📚 Documentation

- *(release)* Add note for offline release-it usage

### ⚙️ Miscellaneous Tasks

- Update dependencies in package.json to latest versions
- Streamline package.json and update changelog command
- Remove unused dependencies from package.json
- Update package dependencies in package.json
- Update eslint config for migration guidance
- Format code with biome
- Add CHANGELOG

## [0.100.0] - 2024-10-20

### ⚙️ Miscellaneous Tasks

- *(py)* Update dependencies to include matplotlib
- Format code with biome
- Add CHANGELOG

## [0.99.0] - 2024-10-20

### ⚙️ Miscellaneous Tasks

- Update package.json dependencies and versions
- Format code with biome
- Update bun.lockb file
- Format code with biome
- Add CHANGELOG

## [0.98.0] - 2024-10-20

### 🚜 Refactor

- *(go-utils)* Improve goInstall logging and output handling

### ⚙️ Miscellaneous Tasks

- Format code with biome
- Add CHANGELOG

## [0.97.0] - 2024-10-20

### 🎨 Styling

- *(go-utils)* Add newline in success message

### ⚙️ Miscellaneous Tasks

- Format code with biome
- Add CHANGELOG

## [0.96.0] - 2024-10-20

### 🚀 Features

- *(commands)* Add update command for Go packages
- *(go-utils)* Make goInstall function asynchronous

### 🚜 Refactor

- *(go)* Simplify package installation process

### ⚙️ Miscellaneous Tasks

- Clean up package.json file list formatting
- Format code with biome
- Add CHANGELOG

## [0.95.0] - 2024-10-16

### 🚀 Features

- *(release)* Update changelog generation script and config

### 🎨 Styling

- *(package.json)* Format files array for consistency

### ⚙️ Miscellaneous Tasks

- Remove unnecessary command from release-it config
- Format code with biome
- Add CHANGELOG

## [0.94.0] - 2024-10-15

### 🚀 Features

- *(repo)* Add command to view pull request details

### 🐛 Bug Fixes

- *(pr)* Add jq option to gh pr view command

### 🚜 Refactor

- *(pr)* Improve command to trim Git branch output

### 🎨 Styling

- *(seed.ts)* Comment out unused imports and code

### ⚙️ Miscellaneous Tasks

- Update dependencies in package.json
- Update package.json scripts and format files list
- Format code with biome
- Update bun.lockb file
- Format code with biome
- Add CHANGELOG

## [0.93.0] - 2024-10-06

### 💼 Other

- Add git-cliff dependency to package.json

### ⚙️ Miscellaneous Tasks

- Update changelog command in release-it config
- Format code with biome
- Update bun.lockb file
- Format code with biome
- Add CHANGELOG

## [0.92.0] - 2024-10-06

### ⚙️ Miscellaneous Tasks

- Update package.json and refactor import path
- Format code with biome
- Add CHANGELOG

## [0.91.0] - 2024-10-06

### ⚙️ Miscellaneous Tasks

- Update formatting commands and imports in files
- Format code with biome
- Add CHANGELOG

## [0.90.0] - 2024-10-06

### 🚀 Features

- *(py/update)* Add installation of jupyterlab and streamlit to update command
- *(gh-pages)* Add alias for gh-pages command

### 🐛 Bug Fixes

- *(add)* Update deploy script to use nr command

### 🚜 Refactor

- *(biome.json)* Update linter rules and configurations for improved code quality

### 🎨 Styling

- *(biome.json)* Update formatting options and ignore patterns in configuration file
- *(biome.json)* Format whitespace and improve readability in biome.json configuration

### ⚙️ Miscellaneous Tasks

- Update CHANGELOG and increment version to 0.89.0 with various improvements and fixes
- Format code with Prettier
- Update package scripts and dependencies in package.json, enhance code imports and formatting
- Update ts-morph dependency version in package.json
- *(package.json)* Update npm-check-updates command to use bun update --latest
- Update prepublishOnly script to use nr build instead of yarn build
- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.89.0] - 2024-10-05

### 🐛 Bug Fixes

- *(commands)* Await formatTsFile in add command

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.88.0] - 2024-10-05

### 🚀 Features

- *(add/threejs)* Add leva to threejs libs installation
- *(commands)* Add vite-qr command for QR code support
- Add getViteConfigServer function and update imports

### 🐛 Bug Fixes

- *(vite-config-parser)* Handle missing properties gracefully

### 🚜 Refactor

- *(add vite-qr)* Optimize imports for better performance
- *(vite-qr)* Improve import statements and structure
- *(cli)* Simplify version output handling

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.87.0] - 2024-10-05

### 🚀 Features

- *(react-testing)* Add RTL setup for Vitest configuration
- Add kolorist package for better error handling
- Add getViteConfigTest function and tests
- *(fii)* Update success message for development tools
- Update eslint.config.mjs
- *(react-testing)* Add setup tests file creation function
- *(react-testing)* Add support for react testing library
- *(tests)* Add Text component and its test cases
- Add error handling for non-existent tsconfig path
- Enhance setup tests file with cleanup function
- Update todo
- Add function to list NPM packages from GitHub
- *(add vitest)* Format TypeScript file before writing config
- *(react/testing)* Add alias for testing command
- Add RTL test generation functionality

### 🐛 Bug Fixes

- *(cli)* Handle unknown package manager commands

### 🚜 Refactor

- *(cli)* Use variable for package manager command
- Update react testing lib to use async/await
- Simplify Vite config handling and import method
- Move formatSourceFile to ts-mod module
- Reorganize imports and rename test files
- *(react-testing)* Simplify import and improve logging
- *(react-utils)* Remove unused import and clean up code
- *(ts-mod)* Change type from 'any' to 'unknown'
- Streamline react testing library setup process
- Initialize types array if undefined
- *(react-utils)* Streamline Vitest configuration logic
- *(vite-config-parser)* Streamline property assignment logic

### 🧪 Testing

- *(vite-config-parser)* Improve test setup with path module
- *(vite-config-parser)* Update project initialization options
- Add unit tests for file operations and ts-mod
- *(ts-mod)* Add tests for JSON parsing functionality
- *(react-utils)* Update tests for vitest configuration logic
- *(react-utils)* Add memory source file creation test
- Add Vitest config tests for React setup

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Update package dependencies to latest versions
- Rename test and component files to .ejs format
- Update dependencies and fix file path reference
- Update CHANGELOG with recent changes and features
- Update bun.lockb with latest changes
- Update package dependencies to latest versions
- Format code with Prettier
- Update bun.lockb binary file
- Format code with Prettier
- Add CHANGELOG
- Add todo for environment check in vite config parser
- Remove commented code from react-utils.ts
- Format code with Prettier
- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.85.0] - 2024-09-22

### ⚙️ Miscellaneous Tasks

- Update dependencies in package.json
- Format code with Prettier
- Add CHANGELOG

## [0.84.0] - 2024-09-22

### 🚀 Features

- *(cli)* Add script management to package.json functionality

### 🐛 Bug Fixes

- *(cli)* Replace pnpm with npm in script commands

### 🚜 Refactor

- *(git-utils)* Trim output of git flow init command

### 🧪 Testing

- *(cli)* Update tests for packageJsonScript function
- *(cli)* Add tests for cli script functions
- *(cli)* Update implementation in cli tests and functions
- *(cli)* Update test descriptions and add new cases
- *(cli)* Update systemSpy implementation in tests

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.83.0] - 2024-09-21

### 📚 Documentation

- *(release-it)* Update documentation links and types
- Update token generation and documentation links
- Update documentation links and add schema reference

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.82.0] - 2024-09-21

### ⚙️ Miscellaneous Tasks

- Update changelog command for unreleased changes
- Format code with Prettier
- Add CHANGELOG

## [0.81.0] - 2024-09-21

### 🚀 Features

- Add biome config
- Add react-testing-config command
- *(react/testing)* Add react testing library support
- Add update command

### 💼 Other

- Add simple-git dependency to package.json

### 🚜 Refactor

- Simplify import addition in vite config parser
- Update filesystem import to use os module

### 🧪 Testing

- Add initial tests for react-utils functions
- *(react-utils)* Add test for tsconfig types addition
- *(git)* Add tests for git status functionality

### ⚙️ Miscellaneous Tasks

- Update pip install command in update.ts
- Add conventional changelog dependency to package.json
- Format code with Prettier
- Add changelog command for git cliff
- Format code with Prettier
- Add CHANGELOG

## [0.80.0] - 2024-09-21

### 🚀 Features

- Add config command
- Add python outdated command
- Add python update command
- Add more comments

### 🐛 Bug Fixes

- Resolve dayjs import error in index.ts

### 🚜 Refactor

- Make compilerOptions optional in tsconfig type
- Update config command and reorganize imports

### ⚙️ Miscellaneous Tasks

- Remove husky pre-commit hook configuration
- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.79.0] - 2024-09-19

### 🚀 Features

- *(commands)* Add threejs command for library integration
- Add vitest config
- Add index tests
- *(cli-extension)* Add Python binary detection logic

### 🐛 Bug Fixes

- *(add tailwind)* Update command to use nlx for init
- *(gh-pages)* Correct error message for vite project check

### 💼 Other

- Add vitest dependency and update tsconfig types

### 🚜 Refactor

- Clean up code and update comments across files
- Move git flow init to helper function
- *(index.ts)* Streamline import and function syntax

### 🧪 Testing

- Add tests for getRepoBaseName and getRepoUrl
- *(get-repo-url)* Update tests for repo URL functionality
- *(get-repo-url)* Add tests for getRepoUrl function
- *(get-repo-url)* Update tests for repo URL functionality
- Update test framework to use vitest

### ⚙️ Miscellaneous Tasks

- Update dependencies in package.json
- Format code with Prettier
- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.78.0] - 2024-09-18

### 🚀 Features

- Add @cspell/eslint-plugin dependency and config

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.77.0] - 2024-09-15

### 📚 Documentation

- Update todo

### ⚙️ Miscellaneous Tasks

- Update dependencies in package.json to latest versions
- Update package versions and file modes
- Update dependencies in package.json
- *(eslint)* Update eslint config imports and formatting
- Format code with Prettier
- Format code with Prettier
- Format code with Prettier
- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.76.0] - 2024-08-11

### 🚀 Features

- *(commands)* Add 'pny' command to kill all node and python processes

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.75.0] - 2024-07-18

### 🚀 Features

- Add commitlint
- Add ping subcommand

### 🚜 Refactor

- Update module.exports to export default in .release-it.mjs

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.74.0] - 2024-06-18

### 🚀 Features

- Add  '@typescript-eslint/consistent-type-imports': 'error',

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.73.0] - 2024-06-17

### 🚀 Features

- Add new ESLint plugins and Vite plugin for pages

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.72.0] - 2024-06-17

### 🚀 Features

- Add  '@typescript-eslint/consistent-type-imports': 'error',

### 🎨 Styling

- Update import to use 'type' for BrowserCookiesSingleton

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.71.0] - 2024-06-17

### 🚜 Refactor

- Update eslint imports and configurations to use the latest packages and settings

### ⚙️ Miscellaneous Tasks

- Update commit messages to indicate CI process for formatting and changelog addition
- Format code with Prettier
- Add CHANGELOG

## [0.70.0] - 2024-06-16

### 🚀 Features

- Add npmrc file
- Update config
- Switch to tsx
- Update packages
- Switch to tsx for speed
- Add paths subcommand
- Add paths subcommand
- Add BrowserCookiesSingleton import from @ax-sh/browser-cookies

### ⚙️ Miscellaneous Tasks

- Fix formatting
- Format files
- Format code with Prettier
- Add CHANGELOG

## [0.69.0] - 2024-06-16

### 🚀 Features

- Add prettier scripts to package.json and update npmrc documentation
- Add prettier:fix script to package.json and use it before eslint in release-it configuration file

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.68.0] - 2024-06-16

### 🚀 Features

- Add tsx

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.67.0] - 2024-06-16

### 🚜 Refactor

- Update import path for ExtendedToolbox in command template

### 🎨 Styling

- Update string interpolation to use backticks

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.66.0] - 2024-06-16

### 🚀 Features

- Add function to retrieve and modify Vite config plugins array
- Add functions to parse and modify Vite config imports
- Add spinner for adding <%= props.name %> in command template
- Add vite plugin vite-pages

### 🚜 Refactor

- Improve code formatting in vite-config-parser test files
- Update type definition for GluegunCommand to include ExtendedToolbox

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.65.0] - 2024-06-16

### 🚀 Features

- Add oxlint as a devDependency in package.json
- Add eslint-plugin-security to improve code security

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.64.0] - 2024-06-14

### 📚 Documentation

- Add instructions for cleaning up Docker resources in TODO file
- Update TODO.md with docker-compose commands and explanations

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.63.0] - 2024-06-14

### 🚀 Features

- Add linting scripts to package.json

### 📚 Documentation

- Update .npmrc.ejs with pnpm login instructions

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.62.0] - 2024-06-14

### 🚀 Features

- Add global node configuration in eslint config
- Add .npmrc template for GitHub npm package registry

### 📚 Documentation

- Update .npmrc.ejs with additional comments and instructions

### 🎨 Styling

- Remove unnecessary semicolons and comments from eslint configuration

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.61.0] - 2024-06-14

### 🐛 Bug Fixes

- Update AWS S3 bucket names in CLI commands

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.60.0] - 2024-06-14

### 🚀 Features

- Add AWS S3 commands to TODO list

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.59.0] - 2024-06-14

### 🐛 Bug Fixes

- Tests
- Tests
- Extend code

### 📚 Documentation

- Update TODO.md with vitest snapshot update instructions

### 🎨 Styling

- Remove extra newline at end of file

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.58.0] - 2024-06-13

### 🚀 Features

- Add webstorm launch command in vite/m.ts

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.57.0] - 2024-06-13

### 🚀 Features

- Add release command in Vite setup script

### 🎨 Styling

- Remove unused import and update console message
- Update formatting and add missing semicolons to msw-helpers file

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.56.0] - 2024-06-13

### 🚀 Features

- Add vite subcommand
- Improve vite project setup by installing additional dependencies and changing directory
- Add tailwind templates
- Add tailwind subcommand
- Update Vite installation command to include Tailwind CSS

### 🚜 Refactor

- Rename files in vite commands folder

### ⚙️ Miscellaneous Tasks

- Remove old eslint file
- Format code with Prettier
- Add CHANGELOG

## [0.55.0] - 2024-06-13

### 🐛 Bug Fixes

- Enable git push for master branch in release script

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.54.0] - 2024-06-13

### 🚀 Features

- *(cli)* Add functionality to fetch and display remote version info
- Add husky subcommand

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.53.0] - 2024-06-13

### 🚀 Features

- Add husky subcommand
- Add husky subcommand

### 🐛 Bug Fixes

- Update dependencies versions in package.json
- Add system to toolbox and run command to echo ni -D husky

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.52.0] - 2024-06-13

### 🚀 Features

- Add config file
- Add description to the release command

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.51.0] - 2024-06-13

### 🚀 Features

- Add command.ts.ejs
- Update types
- Update command generation logic
- Add msw subcommand

### 🐛 Bug Fixes

- Fix trimming of command name and add validation for empty name

### 🎨 Styling

- Update print method to print.success for consistency

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.50.0] - 2024-06-13

### 🚀 Features

- Add rule to disable 'unicorn/prefer-top-level-await' for files in 'src/templates/**'

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.49.0] - 2024-06-13

### 🚜 Refactor

- Update eslint configuration to export an array of eslintConfigs

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.48.0] - 2024-06-13

### 🚀 Features

- Add cli for bunx gitignore -types

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.47.0] - 2024-06-13

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.46.0] - 2024-06-13

### 🚀 Features

- Add release-it configuration file with git, npm, github, and gitlab settings
- Add release-it configuration settings for GitHub, npm, and git tasks
- Add new 'add' command for extending functionality and update file structure
- Add template generation for release-it configuration file

### 📚 Documentation

- Update release-it configuration comments

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.45.0] - 2024-06-13

### 🐛 Bug Fixes

- Update success message for adding release

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.44.0] - 2024-06-13

### 🚀 Features

- Add lodash command to install lodash package and its type definitions

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.43.0] - 2024-06-09

### 🚀 Features

- Update command name to 'format' with aliases 'fmt' and 'f'

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.42.0] - 2024-06-09

### 🚀 Features

- Add eslint config file generation
- Add eslint-plugin-sonarjs to eslint config and package.json

### 🐛 Bug Fixes

- Update test script to use "nr test" instead of "bun run test"

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.41.0] - 2024-06-09

### 🚀 Features

- Add eslint command and configuration files
- Add eslint-plugin-unicorn to eslint config and dev dependencies

### 🎨 Styling

- Remove unnecessary dev dependency from package.json

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.40.0] - 2024-06-09

### 🚀 Features

- Add eslint configuration and update @eslint/js dependency

### 🐛 Bug Fixes

- Update drizzle-kit version to 0.22.6
- Update eslint version to 9.4.0
- Update eslint command in format script to fix all files

### 🎨 Styling

- Fix typo in ignored file extension

### ⚙️ Miscellaneous Tasks

- Remove unused cmd
- Rename eslint config file to .eslintrc.js
- Formatting
- Formatting
- Format code with Prettier
- Add CHANGELOG

## [0.39.0] - 2024-06-09

### 🚀 Features

- Enable GitHub release in .release-it configuration

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.38.0] - 2024-06-09

### 🚀 Features

- Add new script for releasing with different options

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.37.0] - 2024-06-09

### 🚀 Features

- Add android status command to format project status

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.36.0] - 2024-06-08

### 🚀 Features

- Add lodash

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.35.0] - 2024-06-08

### 🚀 Features

- Add dotenv-cli package to the project and update test scripts

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.34.0] - 2024-06-08

### 🚀 Features

- Update dependencies for better performance

### 🎨 Styling

- Format code for better readability

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.33.0] - 2024-06-08

### 🚀 Features

- Add faker with drizzle
- Add faker with drizzle

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.32.0] - 2024-06-08

### 🚀 Features

- *(cli)* Add database setup and schema for sqlite using drizzle-orm
- Add new 'drizzle' command to the project's CLI
- Update drizzle command to use proper generation syntax
- Add template generation for drizzle schema

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.31.0] - 2024-06-07

### 🚀 Features

- Add overrides for '@typescript-eslint/no-unsafe-argument' in 'src/cli.ts'
- Disable '@typescript-eslint/dot-notation' rule
- Disable '@typescript-eslint/member-delimiter-style' and 'object-shorthand' rules

### 🐛 Bug Fixes

- Newline
- Newline
- Newline
- Newline
- Newline
- Type
- Type
- Type
- Type
- Type

### 🚜 Refactor

- Improve type safety in reading package.json file

### 📚 Documentation

- Update comments in .xo-config.js
- Add description for the 'extend' command

### 🎨 Styling

- Remove unnecessary semi-colon and update type definition
- Disable prefer-global/process rule in .xo-config.js
- Turn off arrow-parens rule in .xo-config.js
- Update typescript comment in books.ts file
- Remove unnecessary array brackets from process variable in kill command
- Update type assertion to specify the type of an object

### ⚙️ Miscellaneous Tasks

- Disable unicorn/catch-error-name rule in xo-config
- Format code with Prettier
- Add CHANGELOG

## [0.30.0] - 2024-06-07

### 🚀 Features

- Add XO configuration file with ESLint rules
- Ignore rule in xo

### 🐛 Bug Fixes

- Update dependencies versions in package.json
- Newline

### 📚 Documentation

- Add comment for disabling unicorn/prefer-module rule

### 🎨 Styling

- Remove unnecessary comment and fix typo in semicolon option
- Add prettier option and remove unnecessary comment in .xo-config.js
- Update prettier configuration to use comment instead of string value
- Update xo-config to disable object-curly-spacing rule

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.29.0] - 2024-06-07

### 🚀 Features

- Add rimraf package to dependencies

### 🐛 Bug Fixes

- Fix typo in CLI extension file path

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.28.0] - 2024-06-07

### 🚀 Features

- Add vitest command for adding vitest test framework and configuration files

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.27.0] - 2024-06-07

### 🐛 Bug Fixes

- Correct CLI commands in readme for package installation

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.26.0] - 2024-06-07

### 🚀 Features

- Add gh-pages command and utility functions for Vite config base property

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.25.0] - 2024-06-06

### 🚀 Features

- Add command to kill all chrome processes
- Add 'creators' command to display cache directory information

### 🐛 Bug Fixes

- Error message

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.24.0] - 2024-06-06

### 🚀 Features

- *(src)* Add extend command and cliAppDir function for filesystem directory access
- Add kill commands

### 🚜 Refactor

- Update import statements to use single quotes and improve code formatting

### 🎨 Styling

- Update import statement in types.ts

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.23.0] - 2024-06-06

### 🎨 Styling

- Update Prettier template file extension and remove unnecessary properties
- Update trailingComma to "es5" in .prettierrc files

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.22.0] - 2024-06-06

### 🚀 Features

- *(types)* Add new classes and types for extended GluegunToolbox
- Add new command to retrieve and print the repository URL
- Add commands to create bun cli and ts projects
- Add mk cli command
- *(add)* Add prettier command and templates for prettier config files
- Add prettier auto-formatting on "nr add prettier" command
- Add commands for adding biome and prettier to toolbox

### 🚜 Refactor

- Update CLI extension to use ExtendedToolbox and add new functionalities

### 🎨 Styling

- Remove unused import and commented code, update search command in books.ts
- Remove unnecessary import and console.log, update print message
- Update message in spin function to include 'cli' prefix
- Update formatting in Prettier configuration files
- Remove unnecessary trailing comma in .prettierrc config file
- Remove commented out code in .eslintrc.js and fix object formatting in prettier.ts

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.21.0] - 2024-06-06

### 🚀 Features

- Add db
- Add push to develop branch in release script

### 🚜 Refactor

- Update variable declaration to improve code readability

### 📚 Documentation

- Update code comments in books command file
- Add link to drizzle guide in TODO list
- Update links in TODO.md

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.20.0] - 2024-06-06

### 📚 Documentation

- Update documentation links in books command

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.19.0] - 2024-06-06

### 🚀 Features

- Update book command to search for books based on provided name

### 📚 Documentation

- Add reference link to the source code

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.18.0] - 2024-06-06

### 🚀 Features

- Add command to fetch and display books
- Add new 'status' command for books
- Add alias 'book' to books command
- Add spinner for displaying status of servers

### ⚙️ Miscellaneous Tasks

- Update comments and log message in books command function
- Format code with Prettier
- Add CHANGELOG

## [0.17.0] - 2024-06-06

### 🚀 Features

- Add day.ts file with dayjs library and plugins
- Import day module in fii command

### 🐛 Bug Fixes

- Update build script commands in package.json
- Fix binary file difference in bun.lockb

### 🎨 Styling

- Comment out sourceMap option
- Fix indentation and update tsconfig exclude pattern

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.16.0] - 2024-06-06

### 🚀 Features

- Add database generation script and create history table in schema file

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.15.0] - 2024-06-06

### 🚀 Features

- Add query execution and logging in db module

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.14.0] - 2024-06-06

### 🚀 Features

- Add drizzle-kit and drizzle-orm dependencies, create new db.ts file with SQLite database integration
- Add @types/bun dependency to devDependencies

### 📚 Documentation

- Update installation instructions in readme.md

### 🎨 Styling

- Update CLI description in readme

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.13.0] - 2024-06-06

### 🐛 Bug Fixes

- Enable push to origin HEAD after successful release

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.12.0] - 2024-06-06

### 🚜 Refactor

- Remove generate command and model template files

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.11.0] - 2024-06-06

### 🚀 Features

- Add new file src/lib/index.ts

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.10.0] - 2024-06-06

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.9.0] - 2024-06-06

### 🐛 Bug Fixes

- Add missing command to fetch all tags before running the release process
- Fix git flow release finish command options to keep remote branch

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.8.0] - 2024-06-06

### 🐛 Bug Fixes

- Update release-it configuration for git flow release finish option

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.7.0] - 2024-06-06

### ⚙️ Miscellaneous Tasks

- Update release-it configuration to comment out unnecessary git push command
- Format code with Prettier
- Add CHANGELOG

## [0.6.0] - 2024-06-06

### 🎨 Styling

- Update variable order in before:bump stage to match latestVersion first

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.5.0] - 2024-06-06

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.4.0] - 2024-06-06

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.3.0] - 2024-06-06

### 🐛 Bug Fixes

- Update release process to push changes to master branch

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Add CHANGELOG

## [0.2.0] - 2024-06-06

### 🧪 Testing

- Mark tests as todos for future implementation

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

## [0.1.0] - 2024-06-06

### 🚀 Features

- Init
- Add npm script for updating dependencies
- Add prettier config
- Add release script for automated version release and changelog generation
- Add release-it configuration and update TODO.md with jest commands
- Add test script to package.json

### 🐛 Bug Fixes

- Update devDependencies versions in package.json

### 🚜 Refactor

- Remove unused Jest and TypeScript Jest configurations

### 🎨 Styling

- Remove unnecessary white spaces and comments
- Remove duplicate test scripts from package.json and add them to TODO.md

### ⚙️ Miscellaneous Tasks

- Format code with Prettier
- Format code with Prettier
- Add CHANGELOG

<!-- generated by git-cliff -->
