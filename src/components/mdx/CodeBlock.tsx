import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

import "@/styles/prism-theme.css";

interface CodeProps {
  codeString: string;
  className: string;
  language: Language;
}

const Code: React.FC<CodeProps> = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "1rem" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
