import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { FaqProps, INode } from "@/definitions";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export const team = [
  {
    user: "willo",
    name: "Thomas Willomitzer",
    role: "Founder, CEO",
  },
  {
    user: "matthias",
    name: "Matthias Grieder",
    role: "Co-Founder, Design",
  },
  {
    user: "markus",
    name: "Markus Rumler",
    role: "Co-Founder, Head of Marketing",
  },
  {
    user: "kevin",
    name: "Kevin Escalera",
    role: "Product Marketing",
  },
];

const Bold = ({ children }: { children }) => <strong>{children}</strong>;
const Text = ({ children }: { children }) => (
  <p className="mt-0">{children}</p>
);
const options = {
  renderMark: {
    [MARKS.BOLD]: (text:string) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;
      return (
        <div className="my-1 max-w-screen-md">
          <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
        </div>
      );
    },
  },
};

export const FaqList: React.FC<FaqProps> = ({ data }) => {
  return (
    <dl className="prose prose-lg max-w-full mx-auto mb-8 divide-y divide-skin-base-muted">
      {data.allContentfulFaq.edges.map(({ node }: { node: INode }) => {
        return (
          <Disclosure as="div" key={node.id} className="pt-6">
            {({ open }) => (
              <div className="card">
                <dt>
                  <Disclosure.Button className="text-left w-full flex flex-col items-start focus:outline-none">
                    <div className="flex w-full items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <img
                          className="rounded-full my-0 w-8 h-8 sm:w-12 sm:h-12"
                          src={
                            "https://f.hubspotusercontent20.net/hubfs/7433878/team/" +
                            node.author +
                            ".png"
                          }
                          alt={node.author}
                        />
                        <span className="inline-flex text-sm text-skin-fg-muted">
                          {team
                            .filter((person) => person.user === node.author)
                            .map((filteredPerson, key) => (
                              <span
                                key={key}
                                className="flex text-sm text-skin-fg-muted"
                              >
                                {filteredPerson.name} ({filteredPerson.role})
                              </span>
                            ))}
                        </span>
                      </div>
                      <span className="ml-auto h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-5 w-5 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <p className="font-semibold my-1 text-xl max-w-screen-lg sm:text-2xl sm:pl-16">
                      {node.question}
                      <time className="sr-only font-normal text-sm text-skin-fg-muted">
                        {new Date(node.createdAt).toLocaleDateString()}
                      </time>
                    </p>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-4">
                  <div className="mt-0 mb-2 max-w-screen-lg sm:pl-16">
                    {renderRichText(node.answer, options)}
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        );
      })}
    </dl>
  );
};
