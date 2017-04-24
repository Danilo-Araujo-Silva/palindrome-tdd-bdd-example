# Shaw and Partners Challenge 2 - TDD and BDD with a REST API

This project is a simple application to test if a word, phrase or number is palindrome.

It uses TDD and BDD with [jest](https://facebook.github.io/jest/) to test the application.

This project is created from a ejected version of the facebook [create-react-app](https://github.com/facebookincubator/create-react-app)
and another best practices. Some of the code is not required to create this solution
but could be a good fit to a growing application.

It uses essentially NodeJS, Yarn, Express and Jest.

## Installation

### Simple Installation
- git clone https://github.com/Danilo-Araujo-Silva/shaw-and-partners-challenge-2.git
- cd shaw-and-partners-challenge-2
- yarn install
- npm run test

### Detailed Installation

#### Install NodeJS
If you don't have NodeJS and NPM installed yet you can follow
[these instructions](https://nodejs.org/en/download/package-manager/) in the
official documentation.

#### Install Latest NPM
If you already have npm installed and you would like update it to the latest
version you can do it as follows:

- npm install npm@latest -g

#### Install Latest NodeJS
If you already have npm installed and you would like to update the NodeJS to the
latest version you can do it as follows:

- sudo npm cache clean -f
- sudo npm install -g n
- sudo n stable

Important! The option `-f` is used to force clean the npm cache. Take care about it.
Anyway, I usually do this when I would like to install the latest NodeJS.

#### Install Yarn
If you don't have yarn installed yet you can follow [these instructions](https://yarnpkg.com/lang/en/docs/install/) in the official documentation.

#### Install NPM Dependencies
These instructions is used to install the local npm dependencies. The dependencies
will be placed in the `node_modules` folder (already ignored by `.gititnore`).

- yarn install

#### Usage

- npm run test

Running `npm run test` two tasks (a server and a test one) will run simultaneously.
The server express application will run at `localhost:10001`.

The server allows traffic from everywhere for now, but this could be changed when
needed.

## Author
[Danilo Araújo Silva (silva.danilo.araujo@gmail.com)](https://goo.gl/XW7hi3).
