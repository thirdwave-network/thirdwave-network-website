---
layout: post
title: "Why Rust?"
author: Tomasz Waszczyk
tags: ["Rust"]
image: img/rust.png
date: "2019-10-01T15:11:55.000Z"
draft: false
---

#### Introduction to Rust language

I just implemented "Hello World" application in Rust language and want to share my three cents about the language and why I have choosen to learn just Rust not another programming language.

```// This is the main function
fn main() {
    // Statements here are executed when the compiled binary is called

    // Just print text to the console
    println!("Hello World!");
}
```

Rust has some unique suited to creating in a secure way distributed systems and interesting features are:

1. Performace - there is neither garbage collector nor runtime which made memory safety and integrates with other languages easily, it has a competent performance with C++

2. Reliability - fearless concurrency, the ownership model is the unique feature

3. Compiler's responsiveness - I come from Java and currency JavaScript/Typescript world and I think Rust is.. not easy language to learn but compiler's hints are really, really helpfull

Below you can find very good presentation:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=A3AdN7U24iU
" target="_blank"><img src="http://img.youtube.com/vi/A3AdN7U24iU/0.jpg"
alt="IMAGE ALT TEXT HERE" width="840" height="690" border="10" /></a>

#### Rust and WebAssembly and web

I think that WebAssembly (wasm) has potential to replace JavaScript or become one of the major player in web programming in the future, for comming years JavaScript and/or TypeScript (recommend it!!) will rule. One sure thing is that in 2019 Rust has probably the best support of WebAssembly and it is worth to know technology which could be combined with wasm.

#### Rust in Blockchain space

Blockchain technology consists of many areas like: cryptography, mathematics, game theory and economics and the language speedily progressed in the cryptoeconomics world and is really good to rapid prototype.

###### Grin

The project implements MimbleWimble protocol which provides great anonymity and scaling characteristics.

###### Parity Technologies

The company maintains decentralized solutions dealing with P2P networking, consensus algorithms, cryptography and databases. They develop Ethereum client written in Rust as they described "cutting-edge programming language", the client is to be the fastest, lighest and more secure. It is worth also to mention about Substrate which is still in early stage project and is described as "next generation" dynamic, self-defining state-transition light client and is a combination of three technologies: WebAssembly, Libp2p and GRANDPA Consensus.

#### Links and example projects written in Rust

* https://twitter.com/rustlang

* https://research.mozilla.org/rust/

* https://github.com/paritytech/parity-ethereum

* https://github.com/mimblewimble/grin

---

<a href="https://github.com/thirdwave-network/thirdwave-network-website/tree/master/src/content/why-rust.md" target="_blank">Help to improve the page!</a>
