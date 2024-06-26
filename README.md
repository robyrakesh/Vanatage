
# Vantage 

e2e tests for Vantage marketing web app targeting the login and contactUs page functionalities. Tests are written using Playwright and TypeScript and using a page object model. Test report are generated using allure reports and all the test report and artifacts are stored in a github branch 'gh-pages'. Also, as part of this test, a free test reporting dashboard has been created using Allure and hosted on Github Pages

## Allure Reports

There are few jobs defined in the e2e.yml workflow, which will take care of creating a test report using allure and deploying it to the Github Page server. So, we have a publicliy available free test reporting dashboard which can be accessed by anyone. Link to the test report :- [https://robyrakesh.github.io/Vanatge/
](https://robyrakesh.github.io/Vanatage/)
![Screenshot 2024-04-12 at 2 20 14 PM](https://github.com/robyrakesh/Vanatage/assets/47828587/3e1ce27b-017f-4597-ab5e-d3f9b4d46081)

## Available Scripts

In the project directory, you can run:

### `npm install`

installs the dev dependencies

### `npm run test`

script for running the tests and generate allure report

### `npm run clean`

script for deleting all the artifacts generated by allure and other reporters

### `npm run allure:report`

script to run after running the cypress tests (npm run cy:run). This script will generate an allure report in your local environment



## Run the tests locally in interactive mode

To run it locally in interactive mode, you can run the following command from root directory of this project

First install all the dependencies 
### `npm install` 
Then run the tests using 
### `npx playwright test --ui`

