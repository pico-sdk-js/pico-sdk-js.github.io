---
title: 6 - Run your Application
layout: default
nav_order: 5
parent: Getting Started
---

# Run your Application

## Run once

After uploading your JavaScript to the Raspberry Pi Pico, run the script by running the below command in REPL to [run](https://pico-sdk-js.github.io/docs/usage/cli-repl/run.html) the file saved to your Pico's flash.

```bash
.run index.js
```

## Run automatically

If you'd like to have your script run automatically whenever the device starts, then you can set the [autorun configuration option](../usage/cli-repl/config.md#configuration-options) through the [.config](../usage/cli-repl/config.md) REPL command.

```bash
.config autorun index.js
.restart
```
