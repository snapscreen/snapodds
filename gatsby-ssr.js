const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      defer
      key="darkmode"
      dangerouslySetInnerHTML={{
        __html: `(function() {
            function setTheme(theme) {
              window.__theme = theme;
              if (theme === 'dark') {
                document.documentElement.className = 'dark';
              } else {
                document.documentElement.className = '';
              }
            };
            window.__setPreferredTheme = function(theme) {
              setTheme(theme);
              try {
                localStorage.setItem('color-theme', theme);
              } catch (e) {}
            };
            let preferredTheme;
            try {
              preferredTheme = localStorage.getItem('color-theme');
            } catch (e) {}
            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
          })();`,
      }}
    />,
    <script
      type="text/javascript"
      id="hs-script-loader"
      async defer src="//js.hs-scripts.com/7433878.js"
    />,
  ]);
};
