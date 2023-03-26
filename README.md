⚠️ for education purpose only: this script contains bugs and security issues

# ms-shorturl

this is a code sample of an url-shortener microservice

## what does it do

- post `/api/shorturl` with `{ "url": "http://yahoo.com" }` saves it to the database and returns a `short` ID

- get `/{short}` redirects to the saved url
- post `/api/shorturl/ajnalytics/` with `{ "url": "aB0c" }` returns the number of clicks

## run it locally

- classic `yarn` to install dependencies
- run `yarn load` to set up sqlite3 database and fixtures
- `yarn dev` hosts the backend on port 8001 (see .env API_PORT)

## run tests

- `yarn test` to run tests
- `yarn test --watch` can be useful if you are doing tdd

## troubleshooting

- try `yarn reset && yarn load`

## todo

- [ ] add unit test to test the shortUrl lib in `src/lib/shortUrl.test.ts`
  - bonus: find an error in the code and fix it
- [ ] add functionnal tests in `src/app.tests.ts`
- [ ] be lazy and alongside functionnal tests, add a snapshot test on `/api/shorturl/analytics` with `short: '1'`
- [ ] report dark web links (TDD)
  1. write tests on how to detect dark web urls in `src/lib/isDarkWebUrl.test.ts`
  2. run `yarn test --watch` and implement `src/lib/isDarkWebUrl.ts` till it passes the test
  3. do the same for a report system that sends a report notification to the reporting microservice, see `src/lib/report.test.ts`
