# Rust and Webassembly

## Setup 
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# one-stop shop for building and working with Rust-generated WebAssembly that you would like to interop with JavaScript in the browser or with Node.js.
cargo install wasm-pack

rustup target add wasm32-unknown-unknown

# tool to remove all unneeded exports, imports, functions, and so on from a WebAssembly module
cargo install wasm-gc

cargo install https
```