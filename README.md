# template ts preact htm app ![tests](https://github.com/nichoth/template-ts-preact-htm-app/actions/workflows/nodejs.yml/badge.svg)

A template for applications using `preact`, `htm`, and typescript. Uses `tape-run` for tests in a browser environment. See [template-ts-preact-htm](https://github.com/nichoth/template-ts-preact-htm) for something similar but for dependency modules.

## use
1. Use the template button in github. Or clone this then `rm -rf .git && git init`. Then `npm i && npm init`.

2. Edit the source code in `src/`.

## featuring

* `preversion` npm hook -- lint via `standardx`.
* `postversion` npm hook -- `git push && git push --tags`
* eslint via [standardx](https://www.npmjs.com/package/standardx) -- `npm run lint`
* test in a browser environment via `tape-run` -- see `npm test`. Includes `tap` testing tools -- [tapzero](https://github.com/nichoth/tapzero) and [tap-arc](https://www.npmjs.com/package/tap-arc)
* CI via github actions
* routing via [route-event](https://github.com/nichoth/route-event) and [@nichoth/routes](https://github.com/nichoth/routes)


## architecture

See [this article](https://gomakethings.com/easier-state-management-with-preact-signals/) for more details about application architecture.

We create application state and logic in the file [./src/state.ts](./src/state.ts). This exports static functions, creates a state object, and sets up URL routing.

In the view code, you would call the functions exposed here with a state object, in response to application events.
