# Tech task frontend — @davelovemartin

Created with Vite template [vite-complete-react-app](https://github.com/ChrisUser/vite-complete-react-app), to get a good headstart. It includes Jest and other technologies I wanted to use out of the box (and it seemed to be well maintained too)...

## ⚗️ Technologies list

- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Moment](https://momentjs.com/)
- [ESlint](https://eslint.org/) & [Prettier](https://prettier.io/)

---

## 🚀 Available Scripts

In the project directory, you can run:

---

## ⚡️ start

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🧪 test

`npm test`

Launches the test runner in the interactive watch mode.

---

## 🦾 build

`npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

---

## 🧶 lint

`npm lint`

Creates a `.eslintcache` file in which ESLint cache is stored. Running this command can dramatically improve ESLint's running time by ensuring that only changed files are linted.

---

## 🎯 format

`npm format`

Checks if your files are formatted. This command will output a human-friendly message and a list of unformatted files, if any.

---

## 🧬 Project structure

This is the structure of the files in the project:

```sh
    │
    ├── public                  # public files (favicon, .htaccess, manifest, ...)
    ├── src                     # source files
    │   ├── __tests__           # all test files
    │   ├── components
    │   ├── pages
    │   ├── resources           # images, constants and other static resources
    │   ├── styles
    │   ├── utility             # utilities functions and custom components
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── RootComponent.tsx   # React component with all the routes
    │   ├── serviceWorker.ts
    │   ├── setupTests.ts
    │   └── vite-env.d.ts
    ├── .env
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── index.html
    ├── jest.config.cjs
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── vite.config.json
```
