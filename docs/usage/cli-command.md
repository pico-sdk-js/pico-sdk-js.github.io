---
title: CLI Command Line Usage
layout: default
nav_order: 0
parent: Usage
---

# Startup

Start up the Pico-SDK-JS REPL by simply running

```bash
psj
```

Use the `--help` arguement to show the various command line options.

## Options

`--help`

Show the command line options help

`--log-level <level>`

Adjust the log level that is output from the REPL. Valid options are "trace", "debug", "warning", or "error" (default). (alias "--ll")

`--auto-connect`

Automatically connect to device on /dev/ttyACM0. (alias "--ac")