## `Epic React` workshop by [Kent C. Dodds](https://github.com/kentcdodds) 

[https://epicreact.dev/learn/](https://epicreact.dev/learn/)

## Part 6: Testing React Apps

### What's it about:
- basics of testing React components
- `dispatchEvent` as a 'naive' approach to simulate interaction with UI
- `@testing-library` utils, such as:
  - `render`, `rerender` methods to simulate components behaviour
  - `screen` and queries for interaction with DOM
  - `act` wrapper to control for test side effect
  - `userEvent` for ensure different kinds of user interaction with UI are covered
  - and much more
- mock **external modules** and **functions** with `jest.fn()`
- rely on `Snapshot`s to catch unexpected changes of UI
- mock **browser API** not covered with `jsdom`
- use `msw` and `msw/node` to simulate communication with server
- test **React hooks** with a mocked component that is supposed to use it
- test components which use `React.Context`
- `@jackfranklin/test-data-bot` to avoid hardcoding and rely on random data

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `12 || 14 || 15 || 16`
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

```
node setup
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier.

If you get any errors, please read through them and see if you can find out what
the problem is. If you can't work it out on your own then please [file an
issue][issue] and provide _all_ the output from the commands you ran (even if
it's a lot).

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```
npm install
npm run validate
```

If you are still unable to fix issues and you know how to use Docker 🐳 you can
setup the project with the following command:

```
docker-compose up
```

It's recommended you run everything locally in the same environment you work in
every day, but if you're having issues getting things set up, you can also set
this up using [GitHub Codespaces](https://github.com/features/codespaces)
([video demo](https://www.youtube.com/watch?v=gCoVJm3hGk4)) or
[Codesandbox](https://codesandbox.io/s/github/kentcdodds/testing-react-apps).

## Running the app

For this one, there's not much to the app itself. The whole reason we have the
app is just so you can see examples of the components that we'll be testing.
You'll spend most of your time in the tests.

To get the app up and running, run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://testing-react-apps.netlify.app/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode. 
