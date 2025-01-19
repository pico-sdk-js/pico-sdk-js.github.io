---
title: 3 - Connect CLI
layout: default
nav_order: 2
parent: Getting Started
---

# Step 3 - Connect to your Pico-SDK-JS via the CLI

1. Make sure your Raspberry Pi Pico is connected via USB and run `psj` to start the CLI

    {: .note}
    Running `psj` will automatically attempt to connect to the first device running the Pico-SDK-JS engine. If you have multiple devices running the Pico-SDK-JS engine, then you can connect to a specific device via `psj --connection <device name>`. For more information on connecting see [CLI Command Line Usage](/docs/usage/cli-command)

1. Test out the connection by running [`.ls`](/docs/usage/cli-repl/ls) or [`.stats`](/docs/usage/cli-repl/stats)