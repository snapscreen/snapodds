import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null;

export const Portal: React.FC<{}> = ({ children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current;
    // We assume `portalRoot` exists with '!'
    portalRoot!.appendChild(current);
    current.setAttribute("role", "dialog");
    current.setAttribute("aria-modal", "true");
    return () => void portalRoot!.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};
