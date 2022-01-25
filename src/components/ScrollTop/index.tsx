import React, { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { Button } from "@/components";
import { ArrowUpIcon } from "@heroicons/react/outline";
import { EmptyProps } from "@/definitions";

import "./ScrollTop.styles.css";

export const ScrollTop: React.FC<EmptyProps> = () => {
  const [showButton, setShowButton] = useStateIfMounted(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 60) {
        setShowButton(1);
      } else {
        setShowButton(0);
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
