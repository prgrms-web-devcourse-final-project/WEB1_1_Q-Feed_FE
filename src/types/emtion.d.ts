import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      sub: string;
      subBg: string;
      kakao: string;
      notice: string;
      blue: string;
      yellow: string;
      textYellow: string;
      background: string;
      white: string;
      white80: string;
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
      fontFamily: {
        korean: string;
        english: {
          header: string;
          body: string;
        };
      };
      header1: {
        fontFamily: {
          korean: string;
          english: string;
        };
        size: string;
        lineHeight: number;
        weight: number;
      };
      header2: {
        fontFamily: {
          korean: string;
          english: string;
        };
        size: string;
        lineHeight: number;
        weight: number;
      };
      title1: {
        fontFamily: {
          korean: string;
          english: string;
        };
        size: string;
        lineHeight: number;
        weight: number;
      };
      title2: {
        fontFamily: {
          korean: string;
          english: string;
        };
        size: string;
        lineHeight: number;
        weight: number;
      };
      body1: {
        fontFamily: {
          korean: string;
          english: string;
        };
        size: string;
        lineHeight: number;
        weight: number;
      };
      body2: {
        fontFamily: {
          korean: string;
          english: string;
        };
        size: string;
        lineHeight: number;
        weight: number;
      };
      body3: {
        fontFamily: {
          korean: string;
          english: string;
        };
        size: string;
        lineHeight: number;
        weight: number;
      };
      buttonText: {
        fontFamily: {
          korean: string;
          english: string;
        };
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
