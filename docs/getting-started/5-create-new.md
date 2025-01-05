---
title: 5 - Create a new application
layout: default
nav_order: 4
parent: Getting Started
---

# Create a new application

## Prerequisites

To complete all the below steps you will need:

* [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your local machine
* A [Raspberry Pi Pico](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html) connected to via USB to your local machine
* The [Pico-SDK-JS Engine](https://pico-sdk-js.github.io/docs/getting-started/1-install-engine.html) installed on your Raspberry Pi Pico
* The [Pico-SDK-JS CLI](https://pico-sdk-js.github.io/docs/getting-started/2-install-cli.html) installed on your local machine

### **Step 1:** Create a repo from this template

To create your own Pico-SDK-JS application using our custom template, start by creating a GitHub repo from our existing template by clicking the below button. 

[Create new Repository on Github](https://github.com/new?template_name=pico-sdk-js-template&template_owner=pico-sdk-js){: .btn .btn-blue}

After creating the new repository, you will need to clone it to your local machine by running:

```bash
git clone <repository path>
```

### **Step 2:** Install tooling for building

This project is built using Typescript and webpack, but this setup has been taken care of for you. Simply run the below command in your cloned directory to install all the tooling you'll need to build this app.

```bash
npm install
```

### **Step 3:** Build the app

This project is written in [Typescript](https://www.typescriptlang.org/), which is a strongly typed programming language built upon JavaScript to provide better error detection and tooling. In order to convert this Typescript project to a JavaScript file that can be executed on your Raspberry Pi Pico, run the below command.

```bash
npm run build
```

### **Step 4:** Deploy the JavaScript to your Raspberry Pi Pico using the Pico-SDK-JS CLI

To execute your script on your Raspberry Pi Pico, you'll need to install the Pico-SDK-JS CLI and upload your script to your Raspberry Pi Pico running the Pico-SDK-JS Engine (see the links above for instructions).

After connecting the [Pico-SDK-JS CLI](https://pico-sdk-js.github.io/docs/getting-started/3-connect.html) to your [Raspberry Pi Pico](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html) run the below command in REPL to [write](https://pico-sdk-js.github.io/docs/usage/cli-repl/write.html) the file to your Pico's flash.

```bash
.write index.js -p ./dist/index.js
```

### **Step 5:** Run your JavaScript

After uploading your JavaScript to the Raspberry Pi Pico, run the script by running the below command in REPL to [run](https://pico-sdk-js.github.io/docs/usage/cli-repl/run.html) the file saved to your Pico's flash.

```bash
.run index.js
```

## Issues?

[Please file any issues to our github page using this link](https://github.com/pico-sdk-js/pico-sdk-js-cli/issues/new?assignees=jt000&labels=&projects=&template=bug_report.md&title=)