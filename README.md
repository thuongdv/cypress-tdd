This automation framework is used for automating both internal and external web applications, so we come up with POM pattern (not Application Actions pattern).

Please spend time reading the [Best Practice](https://docs.cypress.io/guides/references/best-practices)
before working.

# [Organizing tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)

### Fixtures files

Fixtures are used as external pieces of static data that can be used by your tests.
You would typically use them with the cy.fixture() command, and most often when you're stubbing Network Requests.

### Support file

By default, Cypress will automatically include the support file cypress/support/e2e.js. This file runs before every single spec file.
We do this purely as a convenience mechanism, so you don't have to import this file in every single one of your spec files.

# Getting started

- Install dependencies

  `npm install`

- Run test manually

  `npm run open`

- Run test automatically

  `npm run test`

- Run test automatically and then open with Allure report

  `npm run clean-run-all-report`

- Run Cypress run with specific spec, headed mode, don't quite the browser

  `npx cypress run --browser chrome --env configFile=qat --spec "cypress/e2e/todo.feature" --headed --no-exit`

- Run tests by tag

  `npx cypress run --browser chrome --env grepTags=@smoke,grepOmitFiltered=true`

# Parallel execution

Cypress has a Cypress Cloud service playing as a centralization reporting, and distributed running.
There are some inconvenient things that we decided not to use the Cypress Cloud:

1. The Cypress Cloud is a paid service
2. The Cypress Cloud test result does not show correctly the Cucumber steps

Hence, we use the cypress-parallel lib to run the automated suites in a test machine.

# Test execution extension

Parallel running: from the root folder of the repo, the test folder itself has a package.json separately with
the app source code. The following command is running the test with

- 4: concurrent threads
- env: UAT
- browser: Chrome

  ```
  cd test
  npm install
  node_modules/.bin/cypress-parallel -v -s cy:testp -t 4 -m false --delayThreads 180 -d 'cypress/e2e/**/!(_helpers|draft)/!(test).feature' --weightsJson cypress/parallel-weights.json -n node_modules/cypress-multi-reporters -a '"--browser chrome --env configFile=qat"'
  ```

# Test result checking

When you see tests failed, we should do the following steps to analyze they are due to the scripts, or the application under test:

1. Check the screenshot attached under the failed test
2. If the screenshot does not give much information, try to run only the failed test again in the debug mode
3. At this step you know what causes the test failed

# Lint code

```sh
npx eslint .
```

# Format code

```sh
npx prettier . --write
```
