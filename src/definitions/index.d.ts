import { Location } from "history";

export interface MdxProps {
  colorCode?: string;
  colorName?: string;
  colorHEX?: string;
  colorHEXDark: string;
  colors?: sting[];
}

interface EmptyProps {}

interface ListProps {
  term?: string;
  definition?: string;
  inline?: boolean;
}

interface HeadingsProps {
  text?: string;
  itemProp?: string;
}

interface FaqProps {
  key: string;
  category: string;
  author?: string;
  q: string;
  a: string;
}

interface CardProps {
  link?: any;
  title: string;
  name?: string;
  description?: any;
  date?: string;
  image?: GatsbyImage;
  type?: string;
  body?: any;
  slug?: string;
}

interface PageProps {
  data: {
    mdx: INode;
    previous: INode;
    next: INode;
    slug: INode;
    allMdx: {
      totalCount: INode;
      edges: IEdge[];
    };
    site: ISite;
  };
  location: Location;
  pageContext: any;
  image?: GatsbyImage;
}

interface ISite {
  siteMetadata: {
    title: string;
    email: string;
    description: string;
    author: {
      name: string;
      summary: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      github: string;
    };
  };
}

interface IEdge {
  node: INode;
}

interface INode {
  id: string;
  excerpt: string;
  body: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    name: string;
    claim: string;
    description: string;
    link: string;
    image?: any;
    type?: string;
  };
}
