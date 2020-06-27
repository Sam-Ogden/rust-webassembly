// Tell rust compiler not to mangle the name of the function.
#[no_mangle]
pub extern fn addOne(x: u32) -> u32 {
    x + 1
}