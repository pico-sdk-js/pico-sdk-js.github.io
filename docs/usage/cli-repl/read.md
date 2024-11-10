---
title: .read
layout: default
nav_order: 8
parent: CLI REPL Usage
---

# Read

Reads a remote file stored on the Pico device and either prints to the screen or saves to a local file.

## Usage

```bash
.read <remote-path> [--local-path <path> [--overwrite]]
```

## Examples 

### Example 1

Read from the Pico with the file name "file.js" and save the local "myFile.js" if it does not already exist.

```bash
.read file.js --local-path ./myFile.js
```

### Example 2

Read the remote `file.js` and output the contents to the screen.

```bash
.read file.js
```

## Options

`remote-path`

* The name of the file to read from the Pico device
* Required.

`--local-path <path>`

* The name of the local file to save the file to.
* Optional. If this parameter is omitted, then the file contents will be outputed to the console.

`--overwrite`

* When `--local-path` is provided, this argument will allow the output file to clobber an existing file with the same file name.
* Optional. If this parameter is omitted, then an existing file will cause an error and prevent being overwritten.
