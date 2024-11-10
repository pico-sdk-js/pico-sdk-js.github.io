---
title: .run
layout: default
nav_order: 5
parent: CLI REPL Usage
---

# Run

Execute a remote javascript file stored on the Raspberry Pi Pico previously saved using [.write].

## Usage

```bash
.run <remote-path>
```

## Example

Executes the `main.js` file stored on the Raspberry Pi Pico.

```bash
.run main.js
```

## Options

`remote-path`

* The name of the javascript to load from the Pico device
* Required.


[.write]: write