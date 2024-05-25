<span align="center">

<a href="https://www.defactor.com"><img width="360" alt="Defactor Logo" src="https://raw.githubusercontent.com/defactor-com/.github/main/workflows/images/defactor-logo-grey.png"></img></a>

</span>

# Defactor UI Starter Kit

A frontend UI template for new projects to get started building on Defactor quickly while maintaining consistency in visual design and styles with other Defactor tools.

For more information on how to use the defactor UI Kit please refer to our [developer documentation site](https://defactor.dev/docs/front-end-ui/react-components).

## Installation

Basic knowledge about Docker and NodeJS is required.

### Getting started

Some things you need before getting started:

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/es/)
- [yarn](https://yarnpkg.com/)

### Running for the first time

1.  Clone this repo using `git clone --depth=1 git@github.com:defactor-com/ui-kit.git <YOUR_PROJECT_NAME>`
2.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.

### Quick start

At this point you can execute `yarn storybook` to execute distribute action locally.

## File Structure

We use the following technologies:

- [React](https://es.react.dev/) Library to create components
- [Scss](https://sass-lang.com/) Allow improve styles by component
- [Rollup](https://rollupjs.org/) API for fast compilation of code changes

Within the project repository you will find the following directories and files:

```
ui-kit/
├── public ..................... Public Sources Assets
├── src ..................... Project Source Code
| ├── components ................ Components of Defactor Tools
| ├── scss ................ Customs styles by Component
| ├── stories ................ Use example by Component
├── .gitignore .............. Files Ignored by Git
├── CHANGELOG.md .............. Change log
├── package.json ............ NPM Project Metadata
├── yarn.lock .......... NPM Packages Lock File
├── LICENSE ................. MIT License Terms
└── README.md ............... Project Documentation
```

## Contributing

To contribute, please run `yarn changeset` to make a request to improve the version

Please report bugs big and small by [opening an issue](https://github.com/defactor-com/ui-kit/issues)

## About Defactor

<span align="center">

<a href="https://www.defactor.com"><img width="360" alt="Defactor Logo" src="https://raw.githubusercontent.com/defactor-com/.github/main/workflows/images/defactor-logo-grey.png"></img></a>

As pioneers in the integration of Real-World Assets (RWA) with Decentralized Finance (DeFi), we're dedicated to unlocking liquidity and fostering innovation in the financial sector. Our platform is designed to streamline the adoption of DeFi solutions by businesses, underpinned by the real-world value of tokenized assets.

We're excited to see how you'll leverage Defactor to revolutionize the world of finance!

---

For more information on Defactor and our mission, visit [our website](https://www.defactor.com/).

</span>
