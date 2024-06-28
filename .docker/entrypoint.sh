#!/bin/sh
npm install

if [ -d "../.husky" && "$(ls -A ../.husky)" ]; then
	npm run husky:prepare &&
else
	npm run husky:prepare && \
		npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1' && \
		npx husky add .husky/pre-commit "npx lint-staged"
	npm run start:dev
fi
