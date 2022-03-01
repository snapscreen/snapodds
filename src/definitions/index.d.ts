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
  data: {
    allContentfulFaq: INode;
    slug: INode;
  };
  image?: GatsbyImage;
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
  edges: IEdge[];
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
}
