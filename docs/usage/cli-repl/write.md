---
title: .write
layout: default
nav_order: 9
parent: CLI REPL Usage
---

# Write

Writes to a remote file store on the connected Pico device.

## Usage

```bash
.write <remote-path> [--local-path <path>] [--content <text>]
```

## Examples

### Example 1

Write the local "myFile.js" to the Pico with the file name "file.js".

```bash
.write file.js --local-path ./myFile.js
```

### Example 2

Write the local "file.js" to the Pico with the file name "file.js".

```bash
.write file.js
```

### Example 3

Write the string "Hello, World!" to the Pico with the file name "hi.txt".

```bash
.write hi.txt --content "Hello, World!"
```

## Options

`remote-path`

* The name of the file to write to the Pico device
* Required.

`--local-path <path>`

* The name of the local file to write.
* Optional. If this parameter is omitted, then `remote-path` file will be used to look in the same directory.

`--content <text>`

* A string content to write to the `remote-path` file.
* Optional. Cannot be used in conjunction with `--local-path`
