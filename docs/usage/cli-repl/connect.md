---
title: .connect
layout: default
nav_order: 2
parent: CLI REPL Usage
---

# Connect

Connect to an attached Raspberry Pi Pico via USB with the Pico-Sdk-JS Engine installed.

## Usage

```bash
.connect [--device <devicename>]
```

## Example

Connect to the `/dev/ttyACM0` device.

```bash
.connect --device /dev/ttyACM0
```

## Options

`--device <devicename>`

* The device identifier to connect to. 
* Optional. By default `.connect` will attempt to connect to `/dev/ttyACM0`