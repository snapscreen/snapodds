import React, { useState } from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Tab } from '@headlessui/react'
import { Layout, Container, Hero, Button, Seo } from "@/components";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const HowItWorks: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  let [categories] = useState({
    "SnapOdds SDK" : [
      {
        id: 1,
        description: "tbd",
      },
    ],
    "Webbanner solution": [
      {
        id: 1,
        description: "Our snap interface works also in webbrowsers. As trigger for action also a standard webbanner does the job.",
      },
    ],
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="How SnapOdds works." />
      <Hero
        title="Get odds with just a snap of the live TV screen."
        lead="SnapOdds is a service from Snapscreen that helps you to aquire betting players instantly. SnapOdds is easily integrated into your app as SDK or Webbanner into your website."
      >
        <div className="text-center">
          <Button
            as="link"
            styleType="primary"
            to="/try-now"
          >
            Try now
          </Button>
        </div>
      </Hero>
      <Container>
        <div className="grid grid-cols-2">
          <div className="col-span-1 col-start-2">
            <Tab.Group>
              <Tab.List className="flex p-1 space-x-1 bg-skin-base-flash rounded-full">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full py-2.5 leading-5 font-medium rounded-full',
                        'focus:outline-none focus:ring-2 focus:ring-skin-focus focus:bg-skin-focus focus:text-skin-fg-focus',
                        selected
                          ? 'bg-skin-primary text-skin-base shadow'
                          : 'hover:bg-skin-base-muted'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels as="section">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className="p-8 text-lg focus:bg-skin-base"
                  >
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className=""
                        >
                          <p>{post.description}</p>
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default HowItWorks;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
