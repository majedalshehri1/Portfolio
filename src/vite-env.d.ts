/// <reference types="vite/client" />

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export const frontmatter: {
    title: string;
    date: string;
    category: string;
    intro: string;
    image?: string;
  };
  export default MDXComponent;
}
