# Setting up Development Environment

## Install Node.js

Install Node.js by your favorite method, or use Node Version Manager by following directions at https://github.com/creationix/nvm

```bash
nvm install v4
```

## Fork and Download Repositories

To develop mangacore-node:

```bash
cd ~
git clone git@github.com:<yourusername>/mangacore-node.git
git clone git@github.com:<yourusername>/mangacore-lib.git
```

To develop mangacoin or to compile from source:

```bash
git clone git@github.com:<yourusername>/mangacoin.git
git fetch origin <branchname>:<branchname>
git checkout <branchname>
```
**Note**: See mangacoin documentation for building mangacoin on your platform.


## Install Development Dependencies

For Ubuntu:
```bash
sudo apt-get install libzmq3-dev
sudo apt-get install build-essential
```
**Note**: Make sure that libzmq-dev is not installed, it should be removed when installing libzmq3-dev.


For Mac OS X:
```bash
brew install zeromq
```

## Install and Symlink

```bash
cd mangacore-lib
npm install
cd ../mangacore-node
npm install
```
**Note**: If you get a message about not being able to download mangacoin distribution, you'll need to compile mangacoind from source, and setup your configuration to use that version.


We now will setup symlinks in `mangacore-node` *(repeat this for any other modules you're planning on developing)*:
```bash
cd node_modules
rm -rf mangacore-lib
ln -s ~/mangacore-lib
rm -rf bitcoind-rpc
ln -s ~/bitcoind-rpc
```

And if you're compiling or developing mangacoin:
```bash
cd ../bin
ln -sf ~/mangacoin/src/mangacoind
```

## Run Tests

If you do not already have mocha installed:
```bash
npm install mocha -g
```

To run all test suites:
```bash
cd mangacore-node
npm run regtest
npm run test
```

To run a specific unit test in watch mode:
```bash
mocha -w -R spec test/services/bitcoind.unit.js
```

To run a specific regtest:
```bash
mocha -R spec regtest/bitcoind.js
```

## Running a Development Node

To test running the node, you can setup a configuration that will specify development versions of all of the services:

```bash
cd ~
mkdir devnode
cd devnode
mkdir node_modules
touch mangacore-node.json
touch package.json
```

Edit `mangacore-node.json` with something similar to:
```json
{
  "network": "livenet",
  "port": 3001,
  "services": [
    "mangacoind",
    "web",
    "insight-api",
    "insight-ui",
    "<additional_service>"
  ],
  "servicesConfig": {
    "mangacoind": {
      "spawn": {
        "datadir": "/home/<youruser>/.mangacoin",
        "exec": "/home/<youruser>/mangacoin/src/mangacoind"
      }
    }
  }
}
```

**Note**: To install services [insight-api](https://github.com/bitpay/insight-api) and [insight-ui](https://github.com/bitpay/insight-ui) you'll need to clone the repositories locally.

Setup symlinks for all of the services and dependencies:

```bash
cd node_modules
ln -s ~/mangacore-lib
ln -s ~/mangacore-node
ln -s ~/insight-api
ln -s ~/insight-ui
```

Make sure that the `<datadir>/mangacoin.conf` has the necessary settings, for example:
```
server=1
whitelist=127.0.0.1
txindex=1
addressindex=1
timestampindex=1
spentindex=1
zmqpubrawtx=tcp://127.0.0.1:29332
zmqpubhashblock=tcp://127.0.0.1:29332
rpcallowip=127.0.0.1
rpcuser=mangacoin
rpcpassword=local321
```

From within the `devnode` directory with the configuration file, start the node:
```bash
../mangacore-node/bin/mangacore-node start
```
