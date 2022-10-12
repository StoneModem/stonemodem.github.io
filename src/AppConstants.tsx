// ***
// Magic-number type declarations used globally in CSSProps

const color_wheel_time_s: number = 80; // seconds
const color_wheel_cycle: string[] = [
  "rgba(100, 100, 255, 1)",
  "rgba(255, 100, 100, 1)",
];
const rev_cwc: string[] = ([] as string[]).concat(color_wheel_cycle).reverse(); // non-destructive way to reverse array of colors.

export const app_constants: { [ConstName: string]: string } = {
  CONTENT_WIDTH: "50vw",
  BACKGROUND_COLOR: "rgba(255, 255, 255, 1)",
  GREY_COLOR: "rgba(230, 230, 230, 1)",
  DEFAULT_SHADOW: "0px 2px 4px rgba(77, 60, 130, 0.2)",
  FLIPPED_DEFAULT_SHADOW:
    "0px 2px 4px rgba(77, 60, 130, 0.2), 0px -1px 2px rgba(77, 60, 130, 0.2)",
  COLOR_WHEEL_CSS: `
  // Color stuff
  background-image: linear-gradient(
    90deg,
    ${color_wheel_cycle.join(",")}
  ); // Green is too harsh.
  background-size: 500%;
  animation: color-transition ${color_wheel_time_s}s infinite alternate;
  `,
  COLOR_WHEEL_CSS_TEXT_CLIP: `
  // add text clip of background image in main title.
  -webkit-background-clip: text;

  color: transparent;
  `,

  // For the SVG animation, the animation should last double the length,
  // and go through the wheel from start to finish and back to start. Note the ';' sep
  SVG_ANIMATE_CW_COLORS:
    color_wheel_cycle.join(";") + ";" + rev_cwc.slice(1).join(";"),
  SVG_ANIMATE_CW_TIME: `${color_wheel_time_s * 2}s`,
};

// ***

// ======= SYNTAX HIGHLIGHTING STUFF =======
//   Winner Ranking
//   - atomOneDark
//   - atomOneDarkReasonable
//   - atomOneLight
//   - anOldHope
//   - a11yLight
//   - atelierSeasideLight

//   Other options:
//   - atelierDuneDark
//   - atelierForestLight
//   - atelierHeathLight

// <SyntaxHighlighter showLineNumbers language="tsx" style={e.jsx}>
//  {codeString}
// </SyntaxHighlighter>; */
// =========================================
