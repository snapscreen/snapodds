import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { FaqProps } from "@/definitions";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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

export const Faq: React.FC<FaqProps> = ({ q, a, category, author }) => {
  return (
    <Disclosure as="div" key={q} className="pt-6">
      {({ open }) => (
        <div className="card">
          <dt>
            <Disclosure.Button className="text-left w-full flex flex-col items-start focus:outline-none">
              <div className="flex w-full items-center justify-between space-x-4">
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    className="rounded-full my-0 w-8 h-8 sm:w-12 sm:h-12"
                    src={
                      "https://f.hubspotusercontent20.net/hubfs/7433878/team/" +
                      author +
                      ".png"
                    }
                    alt={author}
                  />
                  {team
                    .filter((person) => person.user === author)
                    .map((filteredPerson, key) => (
                      <span
                        key={key}
                        className="inline-flex text-sm text-skin-fg-muted"
                      >
                        {filteredPerson.name} ({filteredPerson.role}) about{" "}
                        {category}
                      </span>
                    ))}
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
                {q}
              </p>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-4">
            <p className="mt-0 mb-2 max-w-screen-lg sm:pl-16">{a}</p>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};
