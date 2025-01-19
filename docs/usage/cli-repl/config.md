---
title: .config
layout: default
nav_order: 10
parent: CLI REPL Usage
---

# Config

Get or set a config option to the device.

## Usage

```bash
.config <config-name> [<config-value> | --unset]
```

## Configuration Options

**autorun** - The script to run when the Pico-SDK-JS Engine is started. Note that [`.restart`](restart) will need to be run before this setting takes effect.

## Examples

### Example 1

Reads the "autorun" config setting from the device.

```bash
.config autorun
```

### Example 2

Sets the "autorun" config setting to "index.js".

```bash
.config autorun index.js
```

### Example 3

unsets the "autorun" config setting the default value.

```bash
.config autorun --unset
```

## Options

`config-name`

* The name of the config setting to get or set.
* Required.

`config-value`

* The value of the config setting to set.
* Optional. If this parameter is omitted, then the config setting will be retreived.

`--unset`

* Removes a config setting resetting the value back to the default.
* Optional. If this parameter is used, then a config-value cannot be provided.

