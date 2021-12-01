import React from "react";
import { Link } from "gatsby";
import { EmptyProps } from "@/definitions";

import "./DownloadBadge.styles.css";

export const DownloadBadge: React.FC<EmptyProps> = () => {
  return (
    <>
      <span className="badge">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="text-current underline"
          to="https://apps.apple.com/at/app/snapodds/id1596532274?l=en"
        >
          <img
            className="dark:hidden flex"
            src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            alt="download on the app store"
          />
          <img
            className="hidden dark:flex"
            src="Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
            alt="download on the app store"
          />
        </Link>
      </span>
    </>
  );
};
