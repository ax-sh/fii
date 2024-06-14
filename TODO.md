migrate to vitest or bun
"test": "jest",
"watch": "jest --watch",
"snapupdate": "jest --updateSnapshot",
"coverage": "jest --coverage",

Or you can use the --update or -u flag in the CLI to make Vitest update snapshots.
vitest -u

https://bun.sh/guides/ecosystem/drizzle
https://balamurugan16.hashnode.dev/blazingly-fast-cli-with-bun

Add cli for
bunx gitignore -types

aws s3 mb s3://abc123
aws s3api list-buckets | jq
aws s3 cp /tmp/hello.txt s3://abc123/hello.txt --acl public-read
