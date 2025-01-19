---
title: .restart
layout: default
nav_order: 10
parent: CLI REPL Usage
---

# Restart

Clear the device context and restart the entry script.

## Usage

```bash
.restart [--hard]
```

## Options

`--hard`

* Do a "hard" restart forcing the entire pico device to reboot.
* Optional. If not provided, the Pico-SDK-JS engine will do a soft restart of all components without restarting the Pico device itself.

## Example

Restart the Pico-SDK-JS engine resetting the javascript context and restarting the entry script.

```bash
.restart
```
