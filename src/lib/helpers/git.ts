import { system } from 'gluegun'
import simpleGit from 'simple-git'

import { getJsonFromCmd } from './cmd/cli'

// todo add git log @{u}.. -S"__user" --oneline | wc -l

export async function searchStringInAllCommits(str: string) {
  const cmd = `git log -S"${str}" --all --oneline`
  console.log('Running', cmd, '[Add -p on the cmd for showing the diff]')
  const out = await system.run(cmd, { trim: true })

  return out
}

export const git = simpleGit()

// To search for a string in unpushed commits, you can use git log with the difference between your local branch and the remote branch. Here's how:
// bashCopygit log @{u}.. -G"registered"
// This command breaks down as:
//
// @{u} refers to the upstream (remote) branch
// .. shows commits that are in your current branch but not in the remote
// -G"registered" searches for changes that add or remove the string "registered"

// If you want to see the actual changes containing "registered", add the -p flag:
// bashCopygit log @{u}.. -G"registered" -p

// Alternatively, if you want to search in all the changes (not just the added/removed lines), use -S instead of -G:
// bashCopygit log @{u}.. -S"registered" -p
// Would you like me to explain the difference between -G and -S searching?
export async function searchStringInUnpushedCommits(str: string) {
  const cmd = `git log @{u}.. -S"${str}" --oneline`
  console.log('Running', cmd, '[Add -p on the cmd for showing the diff]')
  const out = await system.run(cmd, { trim: true })

  return out
}

export interface GitPushJSON {
  branches: Branch[]
  tags: string[]
  errors: string[]
  warnings: string[]
}

export interface Branch {
  local: string
  remote: string
  status: string
}

export async function gitPushInfoJson() {
  const cmd = `git push --dry-run --porcelain | awk '
BEGIN {
    print "{"
    print "\\"branches\\": ["
    first = 1
}
/^[^ ]/ {
    if (!first) {
        print "    },"
    }
    branch = $1
    remote = $2
    print "    {"
    print "        \\"local\\": \\"" branch "\\","
    print "        \\"remote\\": \\"" remote "\\","
    print "        \\"status\\": \\"pending\\""
    first = 0
}
END {
    if (!first) {
        print "    }"
    }
    print "],"
    print "\\"tags\\": [],"
    print "\\"errors\\": [],"
    print "\\"warnings\\": []"
    print "}"
}
' | jq .`
  const out = (await getJsonFromCmd(cmd)) as unknown as GitPushJSON
  return out
}
