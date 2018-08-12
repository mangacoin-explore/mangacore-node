Mangacore Node
============

[![NPM Package](https://img.shields.io/npm/v/mangacore-node.svg?style=flat-square)](https://www.npmjs.org/package/mangacore-node)
[![Build Status](https://img.shields.io/travis/mangacoin-project/mangacore-node.svg?branch=master&style=flat-square)](https://travis-ci.org/mangacoin-project/mangacore-node)
[![Coverage Status](https://img.shields.io/coveralls/mangacoin-project/mangacore-node.svg?style=flat-square)](https://coveralls.io/r/mangacoin-project/mangacore-node)

A Mangacoin full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Mangacoin Core with additional indexing](https://github.com/mangacoin-project/mangacore-mangacoin) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Install

```bash
npm install -g mangacore-node
mangacore-node start
```

Note: For your convenience, we distribute bitcoind binaries for x86_64 Linux and x86_64 Mac OS X. Upon npm install, the binaries for your platform will be downloaded. For more detailed installation instructions, or if you want to compile the project yourself, then please see the Bitcore branch of [Mangacoin Core with additional indexing](https://github.com/mangacoin-project/mangacore-mangacoin).

## Prerequisites

- GNU/Linux x86_32/x86_64, or OSX 64bit *(for bitcoind distributed binaries)*
- Node.js v0.10, v0.12 or v4
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~200GB of disk storage
- ~8GB of RAM

## Configuration

Mangacore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Mangacore Node.

```bash
mangacore-node create -d <bitcoin-data-dir> mynode
cd mynode
mangacore-node install <service>
mangacore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/bitpay/insight-api)
- [Insight UI](https://github.com/bitpay/insight-ui)
- [Bitcore Wallet Service](https://github.com/bitpay/bitcore-wallet-service)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Bitcoind](docs/services/bitcoind.md) - Interface to Bitcoin Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/mangacoin-project/mangacore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/mangacoin-project/mangacore-node/blob/master/LICENSE).

Copyright 2016 The Mangacoin Core Developers

- bitcore: Copyright (c) 2013-2015 BitPay, Inc. (MIT License)
- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
