import React, { useEffect, useState } from "react";
import { Button } from "@/components";
import { ArrowUpIcon } from "@heroicons/react/outline";
import { EmptyProps } from "@/definitions";

import "./ScrollTop.styles.css";

export const ScrollTop: React.FC<EmptyProps> = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 60) {
        setShowButton(true);
      } else {
        setShowButton(true);
      }
    })
  }, []);

  return (
    <div className="scrollTopContainer">
      {showButton && (
        <Button as="button" styleType="icon" onClick={scrollToTop}>
          <ArrowUpIcon className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};
