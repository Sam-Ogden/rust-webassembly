#![feature(use_extern_macros)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// Functions passed to rust/wasm through js in index.html
#[wasm_bindgen(module = "/domUtils.js")]
extern {
    // fn appendToBody(x: u32);
    // fn alert(x: u32);
    fn appendStringToBody(s: &str);
}

// Tell rust compiler not to mangle the name of the function.
// #[no_mangle]
#[wasm_bindgen]
pub extern fn addOne(x: u32) -> u32 {
    x + 1
}

// #[no_mangle]
#[wasm_bindgen]
pub extern fn run() {
    // Rust compiler cant guarentee memory safety of external function
    unsafe {
        // appendToBody(10);
        appendStringToBody("Hello, World!");
        // alert(123);
    }
}