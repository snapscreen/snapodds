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
            <Disclosure.Button className="text-left w-full flex justify-between items-start focus:outline-none">
              <div className="flex items-start space-x-4">
                <img
                  className="rounded-full w-12 h-12 mt-2"
                  src={
                    "https://f.hubspotusercontent20.net/hubfs/7433878/team/" +
                    author +
                    ".png"
                  }
                  alt={author}
                />
                <div className="">
                  <span className="inline-flex text-sm text-skin-fg-muted">
                    {category}
                  </span>
                  <p className="my-1 text-2xl font-semibold">{q}</p>
                  {team
                    .filter((person) => person.user === author)
                    .map((filteredPerson, key) => (
                      <span
                        key={key}
                        className="inline-flex text-sm text-skin-fg-muted"
                      >
                        {filteredPerson.name} ({filteredPerson.role})
                      </span>
                    ))}
                </div>
              </div>
              <span className="ml-6 h-7 flex items-center">
                <ChevronDownIcon
                  className={classNames(
                    open ? "-rotate-180" : "rotate-0",
                    "h-5 w-5 transform"
                  )}
                  aria-hidden="true"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="pl-16 pr-8">
            <p className="mt-0 mb-2">{a}</p>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};
