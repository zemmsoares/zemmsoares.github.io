## Building Your First Rust Project

Rust projects have a specific layout for their files and directories. Here's a quick run-through:

Compile your project:

```bash
$ rustc src/hello.rs
```
After the compilation, there should be an executable file called 'hello' in your directory. Use the 'tree' command to visualize your directory structure:

```bash
$ tree
.
├── hello
└── src
└── hello.rs
```

This forms the skeleton of a basic Rust project!

## Utilizing Cargo



```bash
$ cargo new hello
```
This command sets up a new directory called 'hello'. Move into this directory and list its contents:

```bash
$ cd hello
$ tree
.
├── Cargo.toml
└── src
└── main.rs
```

Here, 'Cargo.toml' is the configuration blueprint for your project. The 'src' directory is the home for your Rust source code files. 'main.rs' acts as the primary entry point for your Rust programs.

When you're all set, you can use Cargo to compile your source code and run your program in a single command:

```bash
$ cargo run
```

The typical output will resemble:

```bash
*[main][~/Git/command-line-rust/hello]$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.00s
     Running `target/debug/hello`
Hello, world!
```

The first three lines shed light on Cargo's operations, succeeded by the output from your program. If you fancy a less verbose output without Cargo's compilation messages, employ the '--quiet' option:

```bash
$ cargo run --quiet
Hello, world!
```

And voila! You're now equipped with the basics of setting up a Rust project and operating with Cargo.

# need check
## Writing and Running Integration Tests

The convention in Rust projects is to create a **tests** directory parallel to the src directory for testing code

```rust
#[test] //tells Rust to run this function when testing
fn works() {
    assert!(true);
}
```
To run the tests:

```bash
$ cargo test
```

