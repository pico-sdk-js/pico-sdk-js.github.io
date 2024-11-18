---
title: 3 - Connect CLI
layout: default
nav_order: 2
parent: Getting Started
---

# Step 3 - Connect to your Pico-SDK-JS via the CLI

1. Run `psj` to start the CLI
1. Make sure your Raspberry Pi Pico is connected via USB and enter the command `.connect`

    {: .note}
    Running `.connect` will automatically attempt to connect to `/dev/ttyACM0`. If your Raspberry Pi Pico is listed as a different device name, then connect to it via `.connect --device <device name>`. For more information on connecting see [CLI REPL Usage/Connect](/docs/usage/cli-repl/connect)

1. Test out the connection by running [`.ls`](/docs/usage/cli-repl/ls) or [`.stats`](/docs/usage/cli-repl/stats)