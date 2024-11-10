---
title: .ls
layout: default
nav_order: 7
parent: CLI REPL Usage
---

# LS

Lists all remote files stored on the Pico device

## Usage

```bash
.ls
```

Output will look similar to below:

```bash
> .ls
total 3 file(s)
┌─────────┬────────────┬──────┐
│ (index) │    name    │ size │
├─────────┼────────────┼──────┤
│    0    │ 'main.js'  │ 446  │
│    1    │ 'noop.js'  │  68  │
│    2    │ 'test.txt' │  12  │
└─────────┴────────────┴──────┘
```