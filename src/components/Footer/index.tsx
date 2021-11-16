import React from "react";
import { EmptyProps } from "@/definitions";
import { Container, Button } from "@/components";

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
          <Button
            as="externalLink"
            styleType="ghost"
            href="https://twitter.com/snapodds"
          >
            <svg
              className="h-16 w-16"
              viewBox="0 0 210 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="210" height="210" rx="30" fill="none" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M183.4 33H163V36.6H183.4V57H187L187 36.6V33H183.4Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48 33H24V33V36.6V57H27.6L27.6 36.6H48V33Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 172.4V176H27.6H48V172.4L27.6 172.4L27.6 152H24L24 172.4Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M187 172.4V152H183.4L183.4 172.4L163 172.4L163 176L183.4 176H187L187 172.4Z"
                fill="currentColor"
              />
              <path
                d="M87.5146 107.238C90.7581 110.849 92.3799 115.225 92.3799 120.365C92.3799 125.506 90.2074 130.126 85.8623 134.227C81.5173 138.327 75.6729 140.392 68.3291 140.423C64.137 140.423 60.3428 139.796 56.9463 138.541C51.0101 136.338 46.6803 132.437 43.957 126.837C42.7943 124.481 42.0752 122.048 41.7998 119.539L53.8711 116.326C54.1771 119.906 55.5693 122.89 58.0479 125.276C60.5264 127.663 63.724 128.856 67.6406 128.856C71.5573 128.856 74.4642 128.107 76.3613 126.607C78.2585 125.139 79.207 123.303 79.207 121.1C79.207 118.896 78.5033 117.091 77.0957 115.684C75.6882 114.276 73.6992 113.312 71.1289 112.792L61.8574 110.91C56.472 109.778 52.2035 107.544 49.0518 104.209C45.9307 100.874 44.3701 96.7428 44.3701 91.8164C44.3701 85.9108 46.6344 80.9538 51.1631 76.9453C55.6917 72.9368 61.1689 70.9326 67.5947 70.9326C78.029 70.9326 85.2656 74.7269 89.3047 82.3154C90.3145 84.182 91.0335 86.1556 91.4619 88.2363L79.8037 91.8164C79.4059 89.4297 78.2279 87.2725 76.2695 85.3447C74.3112 83.417 71.6185 82.4531 68.1914 82.4531C64.7643 82.4531 62.1022 83.264 60.2051 84.8857C58.2467 86.5381 57.2523 88.527 57.2217 90.8525C57.2217 94.9222 59.639 97.4313 64.4736 98.3799L73.791 100.17C79.6966 101.302 84.2712 103.658 87.5146 107.238Z"
                fill="currentColor"
              />
              <path
                d="M109.724 130.83C103.022 124.435 99.6719 116.051 99.6719 105.678C99.6719 95.3047 103.022 86.9206 109.724 80.5254C116.425 74.1302 124.488 70.9326 133.912 70.9326C143.337 70.9326 151.415 74.1302 158.146 80.5254C164.878 86.9206 168.229 95.3047 168.198 105.678C168.198 116.051 164.848 124.435 158.146 130.83C151.415 137.225 143.337 140.423 133.912 140.423C124.488 140.423 116.425 137.225 109.724 130.83ZM119.316 89.2461C115.186 93.1016 113.12 98.5635 113.12 105.632C113.12 112.7 115.186 118.162 119.316 122.018C123.447 125.873 128.312 127.801 133.912 127.801C139.512 127.801 144.392 125.873 148.554 122.018C152.685 118.162 154.75 112.7 154.75 105.632C154.75 98.5635 152.685 93.1016 148.554 89.2461C144.423 85.3906 139.542 83.4629 133.912 83.4629C128.282 83.4629 123.417 85.3906 119.316 89.2461Z"
                fill="var(--color-primary-contrast)"
              />
            </svg>
            <span className="sr-only">SnapOdds</span>
          </Button>
        </div>
      </Container>
    </footer>
  );
};
