---
title: 4 - Examples
layout: default
nav_order: 3
parent: Getting Started
---

# Step 4 - Examples

To try out some examples for yourself, clone [pico-sdk-js-examples](https://github.com/pico-sdk-js/pico-sdk-js-examples) from github.com.

{: .note }
The examples are written in a language called [TypeScript](https://www.typescriptlang.org/) which is a strongly typed language which transpiles into JavaScript providing better tooling and validation. You are welcome to write your code directly in JavaScript which can be directly written to the Pico & run.

## 1) Clone Examples Locally

Navigate to a folder on your local machine & run the below command to clone the examples.

```bash
git clone https://github.com/pico-sdk-js/pico-sdk-js-examples.git
```

## 2) Install Dependencies

As mentioned above, the examples are written in TypeScript, which requires tooling to convert to JavaScript and minify the files as much as possible. This is already built into the Examples' package.json to make it quick and easy to get the Examples running. To install the required dependencies run the below command from within the pico-sdk-js-examples folder that was created in the previous step.

```bash
npm install
```

## 3) Build Examples

You can build either a single example located within the ./examples folder by navigating to those folders or you can build all the examples together by running the below command within the root folder of the pico-sdk-js-examples folder.

```bash
npm run build
```

This will create an `index.js` file and a `index.js.map` file within a `dist` folder in each of the examples (for example, `./examples/01_hello_world/dist/index.js`).

## 4) Publish & Run

{: .note }
If you created your own JS file without using Typescript you can jump straight to this step.

Once you have a JS file built, then you just need to publish it to the Pico and Run it. This can be done using the [@pico-sdk-js/cli](2-install-cli) with the following commands.

```bash
psj
> .write examples/01_hello_world/dist/index.js
> .run index.js
```

To run a different example or javascript file, simply replace the path in the write & run commands with the path to your file.