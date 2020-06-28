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

WebAssembly programs operate on a limited set of value types (e.g. cant pass strings, only number). Due to this, the functions bridging between JavaScript and Rust only allow for primitive numeric types, like integer or float. Let me demonstrate this to you.

We can work around this by directly reading or writing to WebAssembly's memory using JavaScript. Each WASM module has a linear memory, which is initialized during instantiation.

This is cumbersome, we use wasm-bindgen to handle this for us.

## wasm-bindgen

```bash
wasm-pack build #creates js output from src/lib.rs to pkg/utils.js.
```

We use `#[wasm-bindgen(module = "/domutils")` in lib.rs to include our appendStringToBody function into wasm output.
We dinamically import the wasm output (webpack limitation) in utils/index.js and load this in our webpackbindgen.html file
