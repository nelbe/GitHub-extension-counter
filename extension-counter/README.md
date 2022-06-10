# EXTENSION COUNTER

## Description

The project has been createrd with [create-react-app](https://create-react-app.dev/).

It is a basic project to show the extensions that a github project has. As well as the number of times each extension is repeated. 

## Getting Started

### Dependencies

Make sure have installed:
 - [material-ui v5.8.3](https://mui.com/material-ui/getting-started/installation/)
 - [Node.js](https://nodejs.org)
 - [`npm`](https://npmjs.com)
We support Node >= 10.13 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

### Installing

Clone the repository in your local.

The projects uses master branch as default branch parameter in the request, but it can be modified to set the branch.
Patch: extension-counter/src/components/ExtensionCounter/ExtensionCounter.js.

To have no limit on requests, you must log in to GitHub and use your personal token in the request, like a this:
    headers: new Headers({
        'Authorization': 'token personal_token',
    }).
Patch: extension-counter/src/components/ExtensionCounter/ExtensionCounter.js

See the documentation:
 - https://docs.github.com/en/rest/overview/resources-in-the-rest-api
 - https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

### Executing program

In the project directory /extension-counter, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## License

This project is licensed under the [Belén] License 