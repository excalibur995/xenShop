import { Border, Elevation } from "../../models/GenericModel";
import { Theme } from "../../models/ThemeModel";



export const AppsTheme: Theme = {
  colors: {
    colorPrimary: "#eee",
    colorSecondary: "#ffdab9",
    colorDefault: "#fff",
    colorDestructive: "#ff2424",
  },
  breakpoints: {
    desktop: "1024px",
    miniTablet: "540px",
    tablet: "760px",
    mobile: "480px"
  }

}

export const handleElevation = (elevation?: Elevation): string => {
  switch (elevation) {
    case "interactive":
      return "0 1.5px 3px #d8e7fd;";
    case "float":
      return "0 2.5px 5px rgba(116, 106, 106, 0.1);";
    case "thicker":
      return "0 3px 6px rgba(0, 0, 0, 0.14);";
    default:
      return "0 1.5px 3px rgba(175, 190, 255, 0.1);";
  }
};


export const handleBorderRadius = (radius?: Border): string => {
  if (radius === 'rounded') {
    return '10px'
  }
  return '0px'
}