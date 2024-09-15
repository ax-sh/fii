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

aws s3 mb s3://abc123-2024
aws s3api list-buckets | jq
aws s3 cp hello.txt s3://abc123-2024/hello.txt --acl public-read
aws s3api get-bucket-policy --bucket abc123-2024
https://docs.localstack.cloud/user-guide/aws/cloudfront/

```shell
This removes all the containers, networks, volumes and images defined in the docker-compose.

docker-compose down -v --rmi all
"-v" is for all the volumes

"--rmi all" is for all the images
```

pnpm install git+ssh://git@github.com:ax-sh/browser-cookies.git
