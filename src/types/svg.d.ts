declare module '*.svg?react' {
  import React = require('react');
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default Component;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
