<br />
<p align="center">

<h3 align="center">FULLTIME FORCE</h3>

  <p align="center">
Take-Home Test   
 <br /> 
    <br />
    </p>
 

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


## Testing

To test the project, you can run:

To run unit test:

```sh
   npm run test:unit
```

To generate the coverage of code:

```sh
   npm run test:coverage
```