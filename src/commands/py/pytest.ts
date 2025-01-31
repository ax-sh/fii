import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

// To use `pytest` in watch mode with colored and simplified output, you can leverage a few tools and configurations. Here's a step-by-step guide:
//
// ### 1. Install `pytest` and required plugins
//
// First, ensure that you have `pytest` installed. You can install it using `pip`:
//
// ```bash
// pip install pytest
// ```
//
// To enable watch mode and improve the readability of the output, you'll need additional plugins:
//
// - **`pytest-watch`**: This plugin allows you to run `pytest` in watch mode, automatically re-running tests when files change.
// - **`pytest-sugar`**: This plugin improves the test output by adding colors, progress bars, and simplifying the output.
//
// Install these plugins using `pip`:
//
// ```bash
// pip install pytest-watch pytest-sugar
// ```
//
// ### 2. Running `pytest` in Watch Mode
//
// Once you have `pytest-watch` installed, you can run your tests in watch mode using the following command:
//
// ```bash
// ptw
// ```
//
// This will monitor your project directory for changes and automatically re-run the tests whenever a file is modified.
//
// ### 3. Enabling Colored and Simplified Output with `pytest-sugar`
//
// `pytest-sugar` automatically enhances the output of `pytest` with colors and a progress bar. To activate it, simply run `pytest` or `ptw` as usual. `pytest-sugar` should automatically take effect without any additional configuration.
//
// If you want to customize the behavior of `pytest-sugar`, you can create a `pytest.ini` file in your project root and add the following configuration:
//
// ```ini
// [pytest]
// addopts = --color=yes
// ```
//
// This ensures that colors are always enabled.
//
// ### 4. Example: Running Tests with Watch Mode and Enhanced Output
//
// Here’s how you can combine everything:
//
// ```bash
// ptw
// ```
//
// This command will:
// - Run your tests in watch mode (thanks to `pytest-watch`).
// - Display colorful, simplified output with a progress bar (thanks to `pytest-sugar`).
//
// ### 5. Optional: Customize `pytest-watch` Behavior
//
// You can customize the behavior of `pytest-watch` by passing additional arguments. For example:
//
// - **Run specific tests**: You can specify a directory or file to watch and test:
//
//     ```bash
//     ptw tests/
//     ```
//
// - **Pass additional `pytest` options**: You can pass any `pytest` options through `ptw`. For example, to stop on the first failure:
//
//     ```bash
//     ptw -- -x
//     ```
//
//     The `--` separates `ptw` options from `pytest` options.
//
// ### 6. Example Project Structure
//
// Here’s an example of a simple project structure:
//
// ```
// my_project/
// ├── src/
// │   └── my_module.py
// ├── tests/
// │   └── test_my_module.py
// ├── pytest.ini
// └── requirements.txt
// ```
//
// ### 7. Troubleshooting
//
// - **Colors not showing up**: Ensure that your terminal supports colors. If you're using Windows, you may need to enable ANSI color support in your terminal or use a terminal emulator like `Windows Terminal`.
//
// - **pytest-sugar not working**: Make sure `pytest-sugar` is installed correctly. You can check by running `pytest --help` and looking for `sugar` in the list of plugins.
//
// ### Summary
//
// - Use `pytest-watch` (`ptw`) for watch mode.
// - Use `pytest-sugar` for colorful, simplified output.
// - Combine them for a smooth development experience with automatic test reruns and clear, readable output.
//
// With this setup, you should have a pleasant testing experience with `pytest`!
const command: GluegunCommand<ExtendedToolbox> = {
  name: 'pytest',
  run: async (toolbox) => {
    const { print, system } = toolbox

    const spinner = print.spin(`Adding pytest pytest-watch pytest-sugar`)

    await system.run('uv add --dev pytest pytest-watch pytest-sugar')

    spinner.succeed(`Added pytest pytest-watch pytest-sugar`)
  },
}

module.exports = command
