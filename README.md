# scripts-help

## Installation

```
npm install @rauschma/scripts-help
```

## Quickly trying out scripts-help

Directory [`demo/`](https://github.com/rauschma/scripts-help/blob/main/demo/package.json) shows how to set up `package.json`. If you want to see the output of `scripts-help` in your terminal, you can clone this repository and:

```
cd scripts-help/
npm install
cd demo/
npm run help
```

If you do this, you’ll see the font styles and colors that scripts-help uses (which, alas, can’t be shown via GitHub’s Markdown code blocks).

## Setting up `package.json`

`package.json`:

```json
{
  "private": true,
  "scripts": {
    "help": "scripts-help -w 40",
    "\n========== Building ==========": "",
    "tsc": "tsc",
    "tscwatch": "tsc --watch",
    "\n========== Serving ==========": "",
    "serve": "serve ./site/"
  },
  "scripts-help": {
    "tsc": "Compile the TypeScript to JavaScript.",
    "tscwatch": "Watch the TypeScript source code and compile it incrementally when and if there are changes.",
    "serve": "Serve the generated website via a local server."
  }
}
```

Output of `npm run` (without arguments) inside `demo/`:

```
  help
    scripts-help -w 40

========== Building ==========

  tsc
    tsc
  tscwatch
    tsc --watch

========== Serving ==========

  serve
    serve ./site/
```


Output of `npm run help` inside `demo/`:

```
Package “demo”

╔══════╤══════════════════════════════════════════╗
║ help │ node ../src/scripts-help.mjs -w 40       ║
╚══════╧══════════════════════════════════════════╝

Building

╔══════════╤══════════════════════════════════════════╗
║ tsc      │ Compile the TypeScript to JavaScript.    ║
╟──────────┼──────────────────────────────────────────╢
║ tscwatch │ Watch the TypeScript source code and     ║
║          │ compile it incrementally when and if     ║
║          │ there are changes.                       ║
╚══════════╧══════════════════════════════════════════╝

Serving

╔═══════╤══════════════════════════════════════════╗
║ serve │ Serve the generated website via a local  ║
║       │ server.                                  ║
╚═══════╧══════════════════════════════════════════╝
```