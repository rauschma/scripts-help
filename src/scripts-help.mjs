#!/usr/bin/env node

import * as path from 'node:path';
import * as fs from 'node:fs';
import * as util from 'node:util';
import { table } from 'table';

import {ansi, esc} from './simple-color.mjs';

function main() {
  const options = {
    'desc-col-width': {
      type: 'string',
      short: 'w',
    },
    'key': {
      type: 'string',
      short: 'k',
      default: 'scripts-help',
    },
  };
  const parsed = util.parseArgs({options});
  let descColWidth = Number.parseInt(parsed.values['desc-col-width']);
  if (descColWidth <= 0 || Number.isNaN(descColWidth)) {
    descColWidth = 70;
  }

  const pkgPath = process.env.npm_package_json;
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  
  const packageName = pkg.name ?? path.basename(path.dirname(pkgPath));
  console.log(esc(ansi.Bold, `Package “${packageName}”\n`));
  
  const reSection = /^\s*={3,}\s*(.*?)\s*={0,}\s*$/;
  const rows = [];
  for (const [scriptName, scriptDef] of Object.entries(pkg.scripts)) {
    const match = reSection.exec(scriptName);
    if (match) {
      maybeLogRows(rows, {descColWidth});
      rows.length = 0;
  
      const title = match[1];
      console.log(esc(ansi.Underline, title) + '\n');
      continue;
    }
    const row = [esc(ansi.Bold, scriptName)];
    const scriptHelp = pkg[parsed.values['key']][scriptName];
    if (scriptHelp) {
      row.push(scriptHelp.trim());
    } else {
      row.push(esc(ansi.FgBrightBlack, scriptDef.trim()));
    }
    rows.push(row);
  }
  maybeLogRows(rows, {descColWidth});
}

function maybeLogRows(rows, {descColWidth}) {
  const tableConfig = {
    columns: {
      1: { width: descColWidth, wrapWord: true }
    }
  };
  if (rows.length > 0) {
    console.log(table(rows, tableConfig));
  }
}

main();
