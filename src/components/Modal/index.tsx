import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { XIcon } from "@heroicons/react/outline";
import { Portal, Button } from "@/components";

import "./Modal.styles.css";

export const Modal = forwardRef((props: any, ref) => {
  const [display, setDisplay] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    };
  });
  const handleOpen = () => {
    setDisplay(true);
  };
  const handleClose = () => {
    setDisplay(false);
  };

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  if (display) {
    return (
      <>
        <div className="modal">
          <div
            className="modal__body"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="ease-in-cubic"
          >
            <header className="modal__header">
              <div>{props.title}</div>
              <Button
                type="button"
                className="btn icon close"
                onClick={handleClose}
              >
                <XIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Close dialog</span>
              </Button>
            </header>
            {props.children}
          </div>
          <div
            className="modal__backdrop"
            data-aos="fade-in"
            data-aos-delay="0"
            data-aos-duration="200"
            data-aos-easing="ease-in-cubic"
          />
        </div>
      </>
    );
  }

  return null;
});
