import { exec, execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)

interface GitResponse {
  success: boolean
  message: string
  error?: string
}

interface CleanerOptions {
  repoPath?: string
}

class GitStringCleaner {
  private searchString: string
  private currentBranch: string
  private tempBranch: string
  private hasStashedChanges: boolean
  private repoPath: string

  constructor(searchString: string, options: CleanerOptions = {}) {
    this.searchString = searchString
    this.currentBranch = ''
    this.tempBranch = ''
    this.hasStashedChanges = false
    this.repoPath = options.repoPath ? path.resolve(options.repoPath) : process.cwd()
  }

  private async isGitRepo(): Promise<boolean> {
    try {
      const gitPath = path.join(this.repoPath, '.git')
      const stats = await fs.promises.stat(gitPath)
      return stats.isDirectory()
    } catch {
      return false
    }
  }

  private async executeGitCommand(command: string): Promise<GitResponse> {
    try {
      const { stdout, stderr } = await execAsync(command, { cwd: this.repoPath })
      return {
        success: true,
        message: stdout.trim(),
        error: stderr.trim(),
      }
    } catch (error) {
      return {
        success: false,
        message: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }

  // ... [Previous methods remain the same, just remove the actual executeGitCommand calls] ...

  public async clean(): Promise<GitResponse> {
    try {
      // Validate repository path
      if (!(await this.isGitRepo())) {
        return {
          success: false,
          message: '',
          error: `Not a git repository: ${this.repoPath}`,
        }
      }

      // Rest of the clean method remains the same...
      // [Previous implementation]
    } catch (error) {
      await this.cleanup(true)
      return {
        success: false,
        message: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }
}

describe('test cheaner', () => {
  it('should ', () => {
    const searchString = 'user'
    const repoPath = '/Users/axm/Desktop/CODE/own-social-api'
    const cleaner = new GitStringCleaner(searchString, { repoPath })
  })
})
//
// // Example usage
// async function main() {
//   if (process.argv.length < 3) {
//     console.log('Usage: ts-node script.ts <string-to-remove> [repository-path]')
//     process.exit(1)
//   }
//
//   const searchString = process.argv[2]
//   const repoPath = process.argv[3] // Optional repository path
//
//   const cleaner = new GitStringCleaner(searchString, { repoPath })
//   const result = await cleaner.clean()
//
//   if (!result.success) {
//     console.error('Error:', result.error)
//     process.exit(1)
//   }
//
//   console.log(result.message)
// }
//
// if (require.main === module) {
//   main().catch(console.error)
// }
