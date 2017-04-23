# Shaw and Partners Challenge 2



This project is created from a ejected version of the facebook [create-react-app](https://github.com/facebookincubator/create-react-app)
project and is integrated with [html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
and another best practices. Some of the code is not required to create this solution
but could be a good fit to a growing application.

It uses essentially NodeJS, Yarn, Express, React and Material UI.

## Installation

### Simple Installation
- git clone https://github.com/Danilo-Araujo-Silva/shaw-and-partners-challenge-2.git
- cd shaw-and-partners-challenge-2
- yarn install
- npm start

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

- npm start

Running `npm start` two tasks (a client and a server one) will run simultaneously.
The client react application will run at `localhost:10000` and the server express
application will run at `localhost:10001`.

The server only allows traffic coming from `localhost:10000`.

## Author
[Danilo Araújo Silva (silva.danilo.araujo@gmail.com)](https://goo.gl/XW7hi3).
