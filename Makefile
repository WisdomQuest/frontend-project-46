install:	
		npm ci

publish:
	npm publish --dry-run

fix:
	npx eslint --fix .

link:
	sudo npm link

gendiff.js:
	node bin/gendiff.js -h

lint:
	npx eslint .

watch:
	npx jest --watch

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8


