# Tech task frontend — @davelovemartin

Created with Vite template [vite-complete-react-app](https://github.com/ChrisUser/vite-complete-react-app).

## ⚗️ Technologies list

- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [ESlint](https://eslint.org/) & [Prettier](https://prettier.io/)

I also added:

- [Vitest](https://vitest.dev/)
- [Zod](https://zod.dev/)
- [Husky](https://typicode.github.io/husky/)

---

## 💻 Node version

Created with node v20.11.0.

## 🚀 Available Scripts

In the project directory, you can run:

---

## ⚡️ start

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🧪 test

`npm t`

Launches the test runner.

---

## 🦾 build

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

---

## 🧶 lint

`npm run lint`

Creates a `.eslintcache` file in which ESLint cache is stored. Running this command can dramatically improve ESLint's running time by ensuring that only changed files are linted.

---

## 🎯 validate

`npm run validate`

Runs `ts-lint` && `npm run lint` && `npm run build`

---

## 🪝 Commit hook

The precommit hook runs `npm run validate` to ensure that code commited is valid.

---

## 🧬 Project structure

This is the structure of the files in the project:

```sh
    │
    ├── public                  # public files (favicon, .htaccess, manifest, ...)
    ├── src                     # source files
    │   ├── __tests__           # unit test files for components
    │   ├── components
    │   ├── pages
    │   ├── resources           # images, constants and other static resources
    │   ├── styles
    │   ├── utility             # utilities functions and loaders
    │   ├── index.tsx
    │   ├── Router.tsx   # React component with all the routes
    │   ├── setup.ts
    │   └── vite-env.d.ts
    ├── .env
    ├── .gitignore
    ├── .prettierrc
    ├── babel.config.json
    ├── .eslint.config.js
    ├── index.html
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── vite.config.ts
```

---

## 💭 Ideas for improvements

- use useQuery to cache data from API.
- create custom hook to clean up Skills page.
- end-to-end tests.
