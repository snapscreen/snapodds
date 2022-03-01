import { Location } from "history";

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
  a: any;
}

interface CardProps {
  link?: any;
  title: string;
  customers?: string;
  description?: any;
  date?: string;
  image?: GatsbyImage;
  type?: string;
  body?: any;
  shortText: string;
  benefits?: string & ReactNode;
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
  benefits: {
    childMdx: {
      body: string;
    };
  };
  shortText: {
    childMdx: {
      body: string;
    };
  };
  title: string;
  link: string;
  slug: string;
  author: string;
  customers: string;
  answer: any;
  publishDate: string;
  createdAt: string;
  question: string;
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
