/**
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters
 */
 export const ansi = {
  
  // Attributes

  Normal: 0,
  Bold: 1,
  Faint: 2,
  Italic: 2,
  Underline: 4,
  Blink: 5,
  Reverse: 7,
  Conceal: 8,
  CrossedOut: 9,
  DoublyUnderlined: 21,

  // Foreground colors

  FgBlack: 30,
  FgRed: 31,
  FgGreen: 32,
  FgYellow: 33,
  FgBlue: 34,
  FgMagenta: 35,
  FgCyan: 36,
  FgWhite: 37,
  FgBrightBlack: 90,
  FgBrightRed: 91,
  FgBrightGreen: 92,
  FgBrightYellow: 93,
  FgBrightBlue: 94,
  FgBrightMagenta: 95,
  FgBrightCyan: 96,
  FgBrightWhite: 97,
  
  // Background colors

  BgBlack: 40,
  BgRed: 41,
  BgGreen: 42,
  BgYellow: 43,
  BgBlue: 44,
  BgMagenta: 45,
  BgCyan: 46,
  BgWhite: 47,
  BgBrightBlack: 100,
  BgBrightRed: 101,
  BgBrightGreen: 102,
  BgBrightYellow: 103,
  BgBrightBlue: 104,
  BgBrightMagenta: 105,
  BgBrightCyan: 106,
  BgBrightWhite: 107,
};

/**
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters
 */
export function esc(...args) {
  const last = args.pop();
  const params = args.join(';');
  return `\x1B[${params}m${last}\x1B[0m`;
}
