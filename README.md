# Defactor UI Starter Kit
A frontend UI template for new projects to get started building on Defactor quickly while maintaining consistency in visual design and styles with other Defactor tools.

## Installation

Basic knowledge about Docker and NodeJS is required.

### Getting started

Some things you need before getting started:

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/es/)
- [docker](https://www.docker.com/)

### Running for the first time

1.  Clone this repo using `git clone --depth=1 git@github.com:defactor-com/ui-kit.git <YOUR_PROJECT_NAME>`
2.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3.  Copy and rename the `.env.example` to `.env` then update the environment variables according to your needs

### Quick start

At this point you can execute `make run` to execute distribute action locally.

## File Structure

Within the project repository you will find the following directories and files:

```
ui-kit/
├── src ..................... Project Source Code
| ├── config ................ Configuration Parameters
├── package.json ............ NPM Project Metadata
├── yarn-lock.json .......... NPM Packages Lock File
├── .env.example ............ Environmental Variables Example File
├── .gitignore .............. Files Ignored by Git
├── Dockerfile .............. Docker Build 
├── LICENSE ................. MIT License Terms
└── README.md ............... Project Documentation
```

## Contributing

Please Read EOS Costa Rica's [Open Source Contributing Guidelines](https://developers.eoscostarica.io/docs/open-source-guidelines).

Please report bugs big and small by [opening an issue](https://github.com/edenia/eden-UI-kit/issues)