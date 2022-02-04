import React from "react";
import { EmptyProps } from "@/definitions";
import { Button } from "@/components";

import "./Footer.styles.css";

export const Socials: React.FC<EmptyProps> = () => {
  return (
    <ul className="social">
      <li>
        <Button
          as="externalLink"
          styleType="icon"
          href="https://twitter.com/snapodds"
        >
          <svg className="h-10 w-10" viewBox="0 0 49 49" aria-hidden="true">
            <title>Follow us on Twitter</title>
            <path
              d="M24.081 48.541c13.255 0 24-10.745 24-24 0-13.254-10.745-24-24-24-13.254 0-24 10.746-24 24 0 13.255 10.746 24 24 24z"
              fill="#1B9DF0"
            ></path>
            <path
              d="M19.69 37.201c10.644 0 16.464-8.82 16.464-16.464 0-.252 0-.504-.012-.744a11.855 11.855 0 002.892-3 11.745 11.745 0 01-3.324.912 5.783 5.783 0 002.544-3.204 11.718 11.718 0 01-3.672 1.404 5.758 5.758 0 00-4.224-1.824 5.787 5.787 0 00-5.784 5.784c0 .456.048.9.156 1.32-4.812-.24-9.072-2.544-11.928-6.048a5.805 5.805 0 00-.78 2.904 5.76 5.76 0 002.58 4.812 5.684 5.684 0 01-2.616-.72v.072a5.793 5.793 0 004.644 5.676c-.48.132-.996.204-1.524.204-.372 0-.732-.036-1.092-.108a5.778 5.778 0 005.4 4.02 11.632 11.632 0 01-7.188 2.472c-.468 0-.924-.024-1.38-.084a16.122 16.122 0 008.844 2.616z"
              fill="#fff"
            ></path>
          </svg>
          <span className="sr-only">Visit Twitter Profile</span>
        </Button>
      </li>
      <li>
        <Button
          as="externalLink"
          styleType="icon"
          href="https://www.linkedin.com/products/snapscreen-snapodds/"
        >
          <svg className="h-10 w-10" viewBox="0 0 50 49" aria-hidden="true">
            <title>Follow us on LinkedIn</title>
            <path
              d="M41.901 40.9h-7.099V29.763c0-2.657-.045-6.076-3.699-6.076s-4.285 2.892-4.285 5.881V40.9h-7.1V17.993h6.816v3.131h.097a7.473 7.473 0 016.725-3.699c7.207 0 8.538 4.742 8.538 10.91L41.9 40.9zM11.678 14.862a4.11 4.11 0 11.038-8.22 4.11 4.11 0 01-.038 8.22zM15.235 40.9H8.136V17.993h7.1V40.9zM45.462 0H4.542A3.505 3.505 0 001 3.462v41.073a3.5 3.5 0 003.542 3.463h40.92a3.507 3.507 0 003.557-3.463V3.459A3.51 3.51 0 0045.462 0z"
              fill="#0A66C1"
            ></path>
            <path
              d="M11.87 14.86a4.129 4.129 0 10-.38-8.249 4.129 4.129 0 00.38 8.248zM33.367 17.426a7.473 7.473 0 00-6.725 3.699h-.097v-3.131h-6.841V40.9h7.098V29.569c0-2.99.569-5.881 4.271-5.881 3.703 0 3.699 3.419 3.699 6.075v11.138h7.099V28.336c.034-6.169-1.297-10.91-8.504-10.91zM15.239 17.994H8.118v22.907h7.121V17.994z"
              fill="#fff"
            ></path>
          </svg>
          <span className="sr-only">Visit LinkedIn Profile</span>
        </Button>
      </li>
      <li>
        <Button
          as="externalLink"
          styleType="icon"
          href="https://github.com/snapodds/"
        >
          <svg className="h-10 w-10" viewBox="0 0 1024 1024" aria-hidden="true">
            <title>Follow us on Github</title>
            <path
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
              transform="scale(64)"
              fill="var(--color-text)"
            />
          </svg>
          <span className="sr-only">Visit Github Profile</span>
        </Button>
      </li>
    </ul>
  );
};
