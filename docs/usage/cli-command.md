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

`--connection <device>`

Specifies the target device to connect to: "local" for a local process, "auto" for the first available device, or a specific serial port path (e.g., /dev/tty.XXX or COM1). (alias "--c")