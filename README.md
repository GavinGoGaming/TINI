# TINI
Try-it Node Injector is a bypass to use the Try-It editor as a cloud server.

## How to Use
First, head to the [Node.JS TryIt Editor](https://www.w3schools.com/tryit/trycompiler.asp?filename=demo_nodejs)

Then, copy the code from `demo.js` and paste it in.

Edit the code where it says "put your code here" and boom!

## The TINI Api
TINI has a few functions for use.
```js
// Runs your shell command in the server.
async shell("input command"); // (NEEDS TO BE AWAITED) Returns an array containing [stdout, stderr] as strings.
// Writes & runs a node file unsandboxed from tryit.
async node("node file content"); // (NEEDS TO BE AWAITED) Returns an array containing [stdout, stderr] as strings.
```
