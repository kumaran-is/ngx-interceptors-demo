## What
*  <WHAT CHANGED GOES HERE... >
*  <WHAT CHANGED GOES HERE... >


## How to Test
### Get the code
* Clone the repo and checkout the PR branch

  ```
  git clone https://github.com/kumaran-is/ngx-interceptors-demo.git
  cd ngx-interceptors-demo
  git fetch
  git pull
  git checkout feature/<NEW BRANCH NAME>
  npm install
  ```
### Test the code
* Run static code analyzer and unit test

    ```
    npm run lint
    npm run test
    ```
* Start the Angular SPA

```bash
 npm run start:dev
 
 or

 npm run start:prod
  ```

* Angular SPA gets launched on port 4200. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

## What to Check
Verify that the following are valid

*  `npm run lint` should pass 
*  `npm run test` should pass
*  Code coverage does not drop under 80%
*  Verify the code changes works as expected by testing the Angular SPA.
*  Application runs without any errors.
*  Verify the browser console for any errors.
* Review the code changes to makesure it is written as per Angular coding standard recommended in [angular.io](https://angular.io/) for syntax, conventions, and structuring Angular application.
* Review the test spec changes. Verify test specs covers both happy path and failure path like exceptional or error conditions.
* Review if any changes needed to Readme prescription or any project documents
* Review the changelog and application version
* Delete the branch after merging back with the develop branch.
