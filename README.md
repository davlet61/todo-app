# Todo App

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/davlet61/task-management-app/blob/main/LICENSE)

A simple Todo application.

The github action will run end-to-end tests on every push.

## Tech Stack

<p align="center">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>

## Demo

The application is live at the following address:

https://task-management-app-orcin.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/davlet61/todo-app.git
```

Go to the project directory

```bash
  cd todo-app
```

Install dependencies

**_NOTE:_** The default package manager for this project is `pnpm`

*If you wish to use a different package manager make sure to **_remove_** the `preinstall` script from the `package.json`.*

```bash
  pnpm install
```

Start dev server

```bash
  pnpm start
```

## Testing

This project has both unit tests and e2e test with Cypress

### To run unit tests

```bash
  pnpm test
```

### To run e2e tests

```bash
  pnpm cypress:run
```