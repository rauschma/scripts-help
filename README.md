# scripts-help

`package.json`:

```json
{
  "private": true,
  "scripts": {
    "help": "scripts-help",
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

Output of `npm run` (without arguments):

```
  help
    scripts-help

========== Building ==========

  tsc
    tsc
  tscwatch
    tsc --watch

========== Serving ==========

  serve
    serve ./site/
```


Output of `npm run help`:

```
Package “demo”

╔══════╤════════════════════════════════════════════════════════════════════════╗
║ help │                                                                        ║
╚══════╧════════════════════════════════════════════════════════════════════════╝

Building

╔══════════╤════════════════════════════════════════════════════════════════════════╗
║ tsc      │ Compile the TypeScript to JavaScript.                                  ║
╟──────────┼────────────────────────────────────────────────────────────────────────╢
║ tscwatch │ Watch the TypeScript source code and compile it incrementally when and ║
║          │ if there are changes.                                                  ║
╚══════════╧════════════════════════════════════════════════════════════════════════╝

Serving

╔═══════╤════════════════════════════════════════════════════════════════════════╗
║ serve │ Serve the generated website via a local server.                        ║
╚═══════╧════════════════════════════════════════════════════════════════════════╝
```