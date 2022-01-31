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
  description?: any;
  tags?: keyof JSX.IntrinsicElements | string;
  date?: string;
  image?: string;
  type: string;
}

interface PageProps {
  data: {
    mdx: INode;
    previous: INode;
    next: INode;
    tag: INode;
    slug: INode;
    allMdx: {
      totalCount: INode;
      edges: IEdge[];
    };
    site: ISite;
  };
  location: Location;
  pageContext: any;
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

interface ITag {
  tags?: keyof JSX.IntrinsicElements | string;
}

interface INode {
  excerpt: string;
  body: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    tags?: string | undefined;
    description: string;
    link: string;
    image?: any;
  };
}
