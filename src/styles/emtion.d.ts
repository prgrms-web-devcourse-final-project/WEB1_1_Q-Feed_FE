import '@emotion/react';
theme;
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      sub: string;
      red: string;
      blue: string;
      yellow: string;
      textYellow: string;
      background: string;
      white: string;
      black: string;
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
      };
    };
    typography: {
      fontFamily: string;
      header1: {
        size: string;
        lineHeight: number;
        weight: number;
      };
      header2: {
        size: string;
        lineHeight: number;
        weight: number;
      };
      title1: {
        size: string;
        lineHeight: number;
        weight: number;
      };
      title2: {
        size: string;
        lineHeight: number;
        weight: number;
      };
      body1: {
        size: string;
        lineHeight: number;
        weight: number;
      };
      body2: {
        size: string;
        lineHeight: number;
        weight: number;
      };
      body3: {
        size: string;
        lineHeight: number;
        weight: number;
      };
      buttonText: {
        size: string;
        lineHeight: number;
        weight: number;
      };
      weights: {
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
      };
    };
  }
}
