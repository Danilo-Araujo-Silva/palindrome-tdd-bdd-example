# WoW Palindromes

WoW Palindrome is a simple application to check if a entry is a palindrome or not.

This project uses NodeJS, Yarn, Express, React and Material UI.

## Another related projects
In the same vein of this project, there are another projects of mine that aims to propose
a skeleton/boilerplate to create applications with react, angular or rails (using webpack, react and angular).

These projects are currently in development, but the source code of them could show a little of it's
potential.

All of them are using webpack 2 and integrating several UI libraries like: Material UI,
Materialize CSS, Material Components Web, Material Design Lite, Bootstrap, Bootstrap Material, Ant Design, Angular Material, PrimeNG, React Toolbox and another ones, and including some extras like Google Material Icons, Font Awesome, Roboto font, Hover CSS, Animate CSS, etc.

- [startup-mvp-boilerplate](https://github.com/Danilo-Araujo-Silva/startup-mvp-boilerplate/tree/dev/server/ruby/rails/startup-mvp-boilerplate-rails/app/assets/javascripts): Boilerplat to create startup mvps.
- [ReactSkeleton](https://github.com/Danilo-Araujo-Silva/ReactSkeleton/tree/dev/src/model/react/component): Boilerplate to create react applications.
- [AngularSkeleton](https://github.com/Danilo-Araujo-Silva/AngularSkeleton/tree/cli/src/js/main): Boilerplate to create Angular 2+ applications.

## Installation

### Simple Installation
- git clone https://github.com/Danilo-Araujo-Silva/wow.git
- cd wow
- yarn install
- npm start

### Detailed Installation

#### Install NodeJS (Optional)
If you don't have NodeJS and NPM installed yet you can follow
[these instructions](https://nodejs.org/en/download/package-manager/) in the
official documentation.

#### Install Latest NPM (Optional)
If you already have npm installed and you would like update it to the latest
version you can do it as follows:

- npm install npm@latest -g

#### Install Latest NodeJS (Optional)
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

To test only the express server you can use something like these:
- `http://localhost:10001/checkPalindrome/A MAN A PLAN A CANAL PANAMA`
- `http://localhost:10001/checkPalindrome/socorram-me subi no ônibus em marrocos`

The server only allows traffic coming from `localhost:10000`.
I did a little modification on the express server api pre-requisites. Instead of returning
a 400 response to non palindrome entries I still return a 200 response, but with
a message saying that the entry is not a palindrome.

## Author
[Danilo Araújo Silva (silva.danilo.araujo@gmail.com)](https://docs.google.com/document/d/1jcflnEmzOL6t-LWoXQrx0mbNNaSoyA8n9F30msUXMuc#).
