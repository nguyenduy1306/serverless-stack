---
title: Create a New Project
---

### Setup AWS credentials

If you haven't already, [follow these steps](../advanced/iam-credentials.md#loading-from-a-file) to configure your AWS credentials locally.

### Create a new app

Create a new app using our [`create sst`](../packages/create-sst.md) starter. 

```bash
npx create-sst@latest ideal-stack my-sst-app
cd my-sst-app
```

Install the dependencies.

```bash
npm i
```

Start the local environment.

```bash
npm start
```

The first time the SST command is run, you'll be prompted to enter a default stage name to use. The stage name will be stored locally in a `.sst/` directory. This directory is automatically ignore from Git.

Make sure to use a stage name that is specific to you. If you are sharing an AWS account with another team member, using the same stage name can cause issues locally. You can read more about stage names and the best practices when working with your team [here](../working-with-your-team.md).

The initial deploy can take up to 5-10 minutes to complete. While we wait, let's take a look at the [project structure](/learn/project-structure.md) of an SST app and get our local development environment set up.