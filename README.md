# XenShop

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Why React
- Data-binding is one-way, meaning less unwanted side effects.
- Redux, the most popular framework for managing application state in React, is easy to learn and master.
- React implements Functional Programming (FP) concepts, creating easy-to-test and highly reusable code.

### Why Typescript
- data types, prevent you for changing and assign variables from different types that has been assign<br/>
  example <br/>
  ```
  let iTypescriptGood:boolean = true
  iTypescriptGood = 0 <---  IDE will tell you that this cannot be done
  
  ```
- reducing `TypeError` because of type chekcing in the compiler
- typescipt interface prevents you for giving unwanted or undefined data property <br/>
  example <br/>
  ```
  interface User {
    username:string;
  }

  function printUser(user:User) {
    console.log(user.username)
  }
 
  const user = ""
  const user2 = {
    username:""
  }

  printUser(user) <--- Argument of type 'string' is not assignable to parameter of type 'User'.
  printUser(user2) <--- Acceptable
  
  ```
- auto complete make it easier for development

### Theme
if you wish to change theme color of the app please go to `src/lib/shared/helpers/styledTools.ts` and change `AppsTheme`<br/>
the following current theme is <br/>
```
export const AppsTheme: Theme = {
  colors: {
    colorPrimary: "#ffdab9",
    colorAction: "indigo",
    colorBackground: "#fff",
    colorDestructive: "#ff2424",
    colorBackgroundSecondary: "#ffdab9",
    colorTextPrimary: "#000",
    colorTextSecondary: "#eee"
  },
  breakpoints: {
    desktop: "1024px",
    miniTablet: "540px",
    tablet: "760px",
    mobile: "480px"
  }
}
```
