<br />
<p align="center">

<h3 align="center">FULLTIME FORCE</h3>

  <p align="center">
Take-Home Test   
 <br /> 
    <br />
    </p>
 
## About The Project

This project contains a web application with server that shows git commit history of this project and also you can search your own project giving a valid github owner and repo.

![Screenshot](https://github.com/zbango/ftf_test/blob/main/app.png?raw=true)

## BACKEND

The server performs a request to `https://api.github.com/repos/${owner}/${repo}/commits` and cast provided data to show in the web application.

## Build with

- [Typescript](https://www.typescriptlang.org)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Mocha](https://mochajs.org)
- [Inversify](https://inversify.io/)


### Installation

1. Clone the repo. <br /> 
    ```sh
    git clone https://github.com/zbango/ftf_test.git
    ```
2. Navigate inside of server folder
    ```sh
    cd server
    ```
3. Install NPM packages
    ```sh
    npm i
    ```
3. Start server
    ```sh
    npm run dev
    ```
4. Server is running on [http://localhost:4000](http://localhost:4000).


### Testing

To test the project, you can run:

To run unit test:

```sh
   npm run test:unit
```

To generate the coverage of code:

```sh
   npm run test:coverage
```

## CLIENT
Graphic UI to display the git commit history given an owner and repo name of GitHub
## Build with

- [RectJS](https://es.reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [Jest](https://jestjs.io/)
- [Material-UI](https://material-ui.com/es/)
- [React-Hook-Form](https://react-hook-form.com/)


### Installation

1. Clone the repo. <br /> 
    ```sh
    git clone https://github.com/zbango/ftf_test.git
    ```
2. Navigate inside of client folder
    ```sh
    cd client
    ```
3. Install NPM packages
    ```sh
    npm i
    ```
3. Start app
    ```sh
    npm run start
    ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

 
### Testing

To test the project, you can run:

```sh
   npm run test
```
