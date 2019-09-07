---
layout: post
title: "Aeternity"
author: Tomasz Waszczyk
tags: ["aeternity"]
image: img/demo4.jpg
date: "2012-08-20T15:11:55.000Z"
draft: false
---

# Developers Page (public draft, work in progress)

Welcome Blockchain application Developers, Node-Operators, Miners and Blockchain protocol researchers. This page helps you to get started with aeternity.

## Why aeternity.

If you are familiar with basic Blockchain principles and Smart Contracts already, start with learning about aeternity's unique features. The aeternity protocol ships with a rich set of features and functionalities out of the box. A full specification and documentation of the protocol can be found on GitHub https://github.com/aeternity/protocol

### Technical Advantages Compared to Major Platforms

- Confirmation times ~3 Seconds
- No scaling limits with built  in trust-less off-chain State Channels
- Highest security standards with a type safe VM and functional Smart Contract Language 
- Low-fees on-chain due to a highly optimized Consensus, VM and native transaction types
- No-fees off-chain for transactions and Smart Contract executions in State Channels
- Private transactions and Smart Contracts in State Channels
- Highly flexible Generalized Account model supporting all-types of signing options
- Built in Oracles for accessing external API's and real world data
- Built in Naming System for human readable names

Reference implementation [written in Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)) by industry experts, the Language that powers 90% of today's world wide web.

### Universal

The aeternity protocol can do everything that you expect from a Smart Contract Blockchain platform like Ethereum or others. It can be used to power **Games, Payments, Identity, Decentralized Finance, Registries, Token-Economy, Logistics and more.** Some of the things are not yet invented that will be built with aeternity. **The future is yours.**

### Secure

aeternity is built with security in mind. The reference implementation is written in Erlang, following all standards of high-quality software engineering. Recurring security audits and intensive property based testing are part of the daily work of the protocol developers.  In its security aspects on Blockchain, the aeternity protocol gets shipped with a type safe virtual machine called FATE (Fast aeternity Transaction Engine) which was engineered to boost efficiency (gas consumption) and security (type safe). Together with Sophia, a functional smart contract language that supports formal verification, the aeternity protocol provides an uniqe take on Blockchain and smart contract security. A highly paid bug bounty program is availabe for security researchers

### Scalable

In order to scale to billions of users and transactions the aeternity protocol provides trustless scaling through off-chain state channels. Without compromising on security state channels allow peer to peer transaction between users and the execution of smart contracts off-chain. This way aeternity has no limits in scaling. The network consensus of the protocol is fast. In average up to 15 times faster with a higher transaction throughput then comparable protocols. The confirmation time is as less as three seconds, which especially comes into account when looking at user experience.

### Efficient low-to-no fees

aeternity is equipped with dozens of unique native transactions types for State Channels, Oracles, Names among others. All functionality is optimized to work with minimal gas cost. Additionally, once established, within off-chain State Channels, there are no fees for transactions or smart contract executions. On-chain, with Bitcoin-NG, the consensus mechanism of the protocol allows for more transactions and gas (smart contract executions) per block. This relaxes the fee and gas market and leads to lower cost. Combined with the execution of smart contracts through the highly effient FATE VM, less overall Gas is needed. Additionally with off-chain State Channels, the aeternity protocol reduces the on-chain transaction and smart contract execution volumes massivly, which lowers the fees.

### Interoperable Oracles

Oracles are a special type of transactions on aeternity to request and provide data from data providers and APIs. If a smart contract for example is in need of todays weather data, a oracle request transaction including a data schema can be broadcasted on chain. Data providers can respond to data and charge a fee for providing the response. The other way around oracle provides can register on-chain and provide all types of data for free or by charging a fee. This allows smart contract developers to interact and build upon all sorts of APIs and create applications which are dependend on outside data (for example the current price of Bitcoin at a certain time).

### Open Source

The protocol and all essential developer resources are fully open source. There is no proprietary license whatsoever. The development is transparent and everyone can start contributing via GitHub, the Forum or physical Meetups.

### Decentralized

With Satoshi's heritage in its core (Nakamoto Consensus) the protocol is build to be decentralized. Everyone can host a node and start mining, connect to the network and help to secure the chain or verify transaction. The network is operated by an community of thousands of nodes. It is fully trustless, there is no central authority, no master nodes or kill-switches. With Cuckoo Circle, aeternity has choosen a highly efficient proof-of-work algorithm which is the first graph-theoretic proof-of-work, and the most memory bound, yet with instant verification.

### Public and Private

The aetrenity protocol is using the accounts model. All transactions are public by default. Aeternity allows a very flexible and open design of accounts, which is called Generalized Accounts that enable signing transactions with a high flexibility. Cryptographically the protocol uses Blake2b (256 bits digest) and ed25519. It supports Schnorr Signatures. The communication between nodes is encrypted with the noise protocol. Off-chain State Channel transactions and smart contract executions are fully private unless published on-chain for dispute resolution. It is easy to setup a private Blockchain network (example for Enterprise or Public Institions).

### User Friendly

A build in Naming System for human readable names allows you to point names to accounts and contracts (Example: ak_XbqHDRYPbuw3eVopLycGLwJY2mJGZfDBinaD1VAo7S4nYhii3 becomes yourname.aet). This makes transacting tokens between peers easiert and can help to make smart contract code more readable and upgradable.

### Governance

The aeternity community is governed by miners, users and developers. Through hard-fork signaling node operators can show their support for hard upgrades. All token holders can join a weighted delegated polling mechanism through an mobile and user friendly app with verifiable results on the aeternity Blockchain. Discussions are taking place in chatrooms, online forums, public events and in the aexpansions repository on GitHub.

### Development Sustainability

The protocol is rebust and reliable and build to last for aeternity even without maintanance or the development of new features. Nevertheless, the aeternity crypto foundation currently receive around 10.8% of the mining reward to support the long-term development and maintanance of the core protocol and essential resources. There is an open R&D Grant program available at www.aternity-foundation.org aswell as a Development Bounty program for contributors. To enable entrepreneurs and business to launch their own startup, there are programs for entrepreneurs www.aeternityStarfleet.com and a venture fund www.aeternity-Ventures.com to kickstart even more.

## Learn about the aeternity protocol

Design and documentation of the core protocol can be found on GitHub in a dedicated repositories

- [Protocol Documentation](https://github.com/aeternity/protocol)
- [Threat Model and Security Review](https://github.com/aeternity/aetmodel)
- [Node API](https://github.com/aeternity/protocol/blob/master/node/api/README.md) and [Swagger API-Documentation](https://api-docs.aeternity.io/)

If you are looking for specific keywords, we are suggesting the search functionality of MKDocs [here](https://aeternity.com/documentation-hub/). Please notice that MKDocs is community maintained and might not contain the newest documentation.

## Safe Smart Contract Development with Sophia

An Æternity BlockChain Language The Sophia is a language in the ML family. It is strongly typed and has restricted mutable state.

Sophia is customized for smart contracts, which can be published to a blockchain (the Æternity BlockChain). Thus some features of conventional languages, such as floating point arithmetic, are not present in Sophia, and some blockchain specific primitives, constructions and types have been added.

Links:
- [Documentation](https://github.com/aeternity/protocol/blob/master/contracts/sophia.md)
- [Examples](https://github.com/aeternity/aepp-sophia-examples) on GitHub
- [Code Highlighting](https://forum.aeternity.com/t/sophia-language-visual-studio-code-extension/2588) for VSCode and other IDE's

### Educational material

- [Online Course from Dacade.org](https://dacade.org/) check out the highly recommended aeternity 101 course on Dacade, a peer learning platform. Courses are free, a certificate will be given and you earn 100 AE token on completition.
- [Tutorials](https://github.com/aeternity/tutorials) about Sophia are available but might be outdated

Buttons:
[Get help](https://forum.aeternity.com/c/development/sophia-smart-contracts) in the Forum
[Chat](https://devchat.aeternity.com) in DevChat
[Contribute](https://github.com/aeternity/aeternity/issues) via GitHub

## Getting started

If you are new to aeternity and want to try out the Sophia Smart Contract Language, is is suggested to use one of the community developed online IDE's. They allow you to write contracts, compile them, post them to the chain on testnet and call its functions.

**Try it in the browser with one of the IDE's**

- [Contracts](https://testnet.contracts.aepps.com/)
- [Playground](https://testing.playground.aepps.com/)
- [FireEditor](http://fireeditor.nikitafuchs.de/)

AEproject is an aeternity framework which helps with setting up a project. The framework makes the development of smart contracts in the aeternity network pretty easy. It provides commands for compilation, deployment of smart contracts, running a local node, local compiler and unit testing the contracts.

**Try it locally and setup your development enviroment in no-time.**

- [AEproject](https://github.com/aeternity/aepp-aeproject-js/blob/develop/README.md)

Buttons:
[Get help](https://forum.aeternity.com/c/development/sophia-smart-contracts) in the Forum
[Chat](https://devchat.aeternity.com) in DevChat
[Contribute](https://github.com/aeternity/aeternity/issues) via GitHub

## Developer Tools

Programming libraries are available. Any Javascript developer can build a simple aeternity app in one day. For a quick start and refrence SDK it is recommended to use the JavaScript one.

**Node HTTP API**

- aeternity [Node API](https://aeternity.com/api-docs/)

**SDK Frontend APIs**
    - [JavaScript](https://github.com/aeternity/aepp-sdk-js/blob/develop/README.md) (recommended)
    - [Python](https://github.com/aeternity/aepp-sdk-python/blob/develop/README.md)
    - [Go](https://github.com/aeternity/aepp-sdk-go)
    - [Java](https://github.com/kryptokrauts/aepp-sdk-java/) (Community Maintained)

**Middleware Backend API**
The [Middleware](https://github.com/aeternity/aepp-middleware/blob/develop/README.md) is a caching and reporting layer which sits in front of the nodesof the aeternity blockchain. Its purpose is to respond to queries faster than the node can do, and to support queries that for reasons of efficiency the node cannot or will not support itself.

**CLI - Command Line Client**
o quickly test all of Aeternity's blockchain features from your Terminal, you can Install and use our [NodeJS CLI](https://github.com/aeternity/aepp-cli-js)!

Buttons:
[Get help](https://forum.aeternity.com/c/aepplications/sdk) in the Forum
[Chat](https://devchat.aeternity.com) in DevChat
[Contribute](https://github.com/aeternity/aepp-sdk-js/blob/develop/docs/contrib/README.md) via GitHub

## Hosted API Server, Public Nodes and Services

For convenience reasons, there are hosted services available to quick start the development of aeternity Blockchain applications on testnet. Even though all services are available for mainnet too, it is not advised to use these services in production. Therefore self-hosting critical infrastructure is recommended.

- Testnet API Gateway Nodes hosted on https://sdk-testnet.aepps.com
- Testnet Middleware API Server https://testnet.mdw.aepps.com
- Sophia Smart Contract Compiler https://compiler.aepps.com/

To get some free AE tokens, use the testnet Token Faucet https://testnet.faucet.aepps.com/

## Resources

- Middleware Explorer (Testnet/Mainnet)
    - Mainnet https://mdw.aepps.com/
    - Testnet https://testnet.mdw.aepps.com/
- Blockchain Explorer (Testnet/Mainnet)
    - Aeternity Explorer
        - Testnet https://testnet.explorer.aepps.com/
        - Mainnet https://explorer.aepps.com/
    - AEknow
        - https://www.aeknow.org/
- Goggles Transaction Inspector
    - Mainnet https://goggles.aepps.com/
    - Testnet https://testnet.goggles.aepps.com/

## Interfaces and Clients

Two major clients to interact with aeternity Blockchain applications, sign contract calls and do transactions.

- Base iOS/Andrios/Web Wallet and Browser
    - https://github.com/aeternity/aepp-base/blob/develop/README.md
- Waellet Browser Extension
    - https://github.com/aeternity/aepp-waellet/blob/master/README.md

A variety of community build wallets are available, such as:
- [Airgap Vault and Wallet](https://airgap.it)
- [Trust Wallet](https://trustwallet.com)

It is possible to buy aeternity tokens on exchanges like Binance, OKex, Huobi, GateIO and many others. A full list of markets can be found via https://coinmarketcap.com/currencies/aeternity/#markets

## Run your own Node and Services.

- How to host a [Node](https://docs.aeternity.io/en/latest/installation/)
- How to host the Sophia Smart Contract [Compiler](https://github.com/aeternity/aesophia)
- How to host a [Middleware](https://github.com/aeternity/aepp-middleware/blob/develop/README.md) API Server

## For Miners, Pools and Node Operators

To get the  latest version of aeternity node, please check out the latest [published packages](https://github.com/aeternity/aeternity/releases) and the [release notes](https://github.com/aeternity/aeternity/tree/master/docs/release-notes) and
- Run a [node](https://github.com/aeternity/aeternity/blob/master/docs/installation.md)
- Run a [mining pool](https://github.com/aeternity/aeternity/blob/master/docs/stratum.md)
- Choose a [mining clients](https://forum.aeternity.com/c/mining)
- Join an existing [mining pool](https://forum.aeternity.com/c/mining)

## Join the Community!

- [Public Developers Update Call](https://www.youtube.com/playlist?list=PLZTjth8D1qBfz8giWgAuMwBr88JCQNHp1)
- [Forum](https://forum.aeternity.com)
- [Devchat](https://devchat.aeternity.com)
- [Devlopment Bounties](https://aeternity-foundation.org)
- [Devlopment Grants](https://aeternity-foundation.org)
