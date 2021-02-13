export interface Theme {
  /**
  *
  * @description list of colors
  * @interface Colors
  * @example colorPrimary?: string
  *
  */
  colors: Colors;
  /**
 *
 * @description list of sizes breakpoints
 * @interface BreakPoints
 * @example mobile: 480px;
 *
 */
  breakpoints: BreakPoints;
}


export interface Colors {
  colorPrimary?: string;
  colorSecondary?: string;
  colorDestructive?: string;
  colorDisabled?: string;
  colorDefault?: string;
}

export interface BreakPoints {
  mobile: string;
  miniTablet: string;
  tablet: string;
  desktop: string;
}