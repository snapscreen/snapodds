import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuAlt2Icon as MenuIcon, XIcon } from "@heroicons/react/outline";
import { Logo, Nav, ThemeSwitch, Button } from "@/components";
import { EmptyProps } from "@/definitions";

import "./Header.styles.css";

const navigation = {
  leftNav: [
    { name: "Try now", to: "/try-now" },
    { name: "How it works", to: "/how-it-works" },
    { name: "Products", to: "/products" },
    { name: "Newsroom", to: "/news" },
    { name: "Contact", to: "/contact" },
  ],
  rightNav: [
    {
      name: "Developers",
      to: "/developers",
    },
  ],
};

export const Header: React.FC<EmptyProps> = () => {
  const { leftNav, rightNav } = navigation;
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Popover className={`headerWrapper ${!top && "sticky"}`}>
      <header className="header">
        <div className="header__left">
          {top ? <Logo className="brand" /> : <Logo icon className="brand" />}
        </div>
        <div className="header__center">
          <div className="hidden lg:flex">
            <Nav links={leftNav} />
          </div>
        </div>
        <div className="header__right">
          <div className="hidden lg:flex">
            <Nav links={rightNav} />
          </div>
          <div className="hidden sm:flex">
            <Button
              as="externalLink"
              styleType="primary"
              href="https://meetings.hubspot.com/willo1/talk-to-snapodds"
              className="mx-4"
            >
              Book a meeting
            </Button>
            <ThemeSwitch />
          </div>
          <div className="lg:hidden">
            <Popover.Button className="btn icon">
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
              <span className="mr-2">Menu</span>
            </Popover.Button>
          </div>
        </div>
      </header>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="header--mobile">
          <div className="shadow-lg ring-1 ring-skin-header ring-opacity-5 bg-skin-header border border-skin-base-muted">
            <div className="p-4">
              <div className="z-50 flex items-center justify-between">
                <div className="-mt-2 order-2 flex flex-row-reverse">
                  <Popover.Button className="btn icon">
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Close menu</span>
                  </Popover.Button>
                  <div className="mr-2">
                    <ThemeSwitch />
                  </div>
                </div>
                <Logo className="brand -ml-2" />
              </div>
            </div>
            <div className="py-6 px-4 space-y-6 divide-y">
              <Nav links={leftNav} />
              <Nav links={rightNav} />
            </div>
            <div className="py-6 px-4">
              <Button
                as="externalLink"
                styleType="primary"
                className="w-full"
                href="https://meetings.hubspot.com/willo1/talk-to-snapodds"
              >
                Book a meeting
              </Button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
