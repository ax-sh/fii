# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### 🚀 Features

- Add eslint config file generation
- Add eslint-plugin-sonarjs to eslint config and package.json

### 🐛 Bug Fixes

- Update test script to use "nr test" instead of "bun run test"

### ⚙️ Miscellaneous Tasks

- Format code with Prettier

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
