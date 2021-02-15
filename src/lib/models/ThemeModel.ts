/**
 * @description structure data of the Theme
 * which hold the data of theming data
 * @param colors: Colors;
 * @param breakpoints: BreakPoints;
 */
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

/**
 * @description structure data of the Colors
 * which hold the data of theming colors
 * @param colorPrimary?: string;
 * @param colorAction?: string;
 * @param colorDestructive?: string;
 * @param colorDestructive?: string;
 * @param colorBackground?: string;
 */
export interface Colors {
  /**
   *
   * @description primary Colors such as backrgound theme color
   *
   */
  colorPrimary?: string;
  /**
   *
   * @description primary Colors such as secondary Color
   *
   */
  colorAction?: string;
  /**
   *
   * @description primary Colors such as deleting color
   *
   */
  colorDestructive?: string;
  /**
   *
   * @description primary Colors such as disabled button
   *
   */
  colorDisabled?: string;
  /**
   *
   * @description primary Colors such as Background color
   *
   */
  colorBackground?: string;
  /**
  *
  * @description secondary Colors such as Background color
  *
  */
  colorBackgroundSecondary?: string;
  /**
  *
  * @description primary Colors such as text color
  *
  */
  colorTextPrimary?: string;
  /**
*
* @description secondary Colors such as text color
*
*/
  colorTextSecondary?: string;
}

export interface BreakPoints {
  /**
   *
   * @description breakpoint for mobile-device
   *
   */
  mobile: string;
  /**
   *
   * @description breakpoint for miniTablet-device
   *
   */
  miniTablet: string;
  /**
   *
   * @description breakpoint for tablet-device
   *
   */
  tablet: string;
  /**
   *
   * @description breakpoint for desktop-device
   *
   */
  desktop: string;
}