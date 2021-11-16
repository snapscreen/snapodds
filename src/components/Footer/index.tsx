import React from "react";
import { EmptyProps } from "@/definitions";
import { Container, Button, Logo } from "@/components";

import "./Footer.styles.css";

export const Footer: React.FC<EmptyProps> = () => {
  return (
    <footer className="footer">
      <Container>
        {/* Social links */}
        <ul className="social">
          <li>
            <Button
              as="externalLink"
              styleType="ghost"
              href="https://twitter.com/snapodds"
            >
              <svg className="h-10 w-10" viewBox="0 0 49 49" aria-hidden="true">
                <title>Twitter icon</title>
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
              styleType="ghost"
              href="https://www.linkedin.com/company/snapodds/"
            >
              <svg className="h-10 w-10" viewBox="0 0 50 49" aria-hidden="true">
                <title>LinkedIn icon</title>
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
        </ul>
        <div className="base">
          <p className="copyright">
            &copy; {new Date().getFullYear()}{" "}
            <span>A Snapscreen Solution. All rights reserved.</span>
          </p>
          <Logo icon />
        </div>
      </Container>
    </footer>
  );
};
