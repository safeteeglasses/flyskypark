# Containers <!-- omit in toc -->

Docker containers for development & production.

## Table of Contents <!-- omit in toc -->

- [Usage](#usage)
  - [Scripts](#scripts)

## Usage

Copy the [example `.env` file](./.env.example) to `.env` (i.e. `cp .env.example .env`). Optionally, edit the values to change the port the Next server runs on, or to add a host mount for node modules.

Build and run the stack. If you are at the repository root, run:

```shell
## Production
docker compose -f containers/compose.yml up -d --build

## Development
docker compose -f containers/dev.compose.yml up -d --build
```

If you are in the `containers/` directory (this directory), run:

```shell
## Production
docker compose up -d --build
## Development
docker compose -f dev.compose.yml up -d --build
```

### Scripts

You can run the [`build.sh`](./scripts/build.sh) or [`start.sh`](./scripts/start.sh) scripts from anywhere in the repository to build & run the stacks. Add a `-h` arg to print the script's help menu.

Examples:

- Build the development container environment: `./scripts/build.sh -e dev`
- Start the development container environment: `./scripts/start.sh -e prod`
