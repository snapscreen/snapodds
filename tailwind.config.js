const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}

const themes = {
  skin: {
    base: "var(--color-background)",
    "base-muted": "var(--color-background-muted)",
    "base-flash": "var(--color-background-flash)",
    focus: "var(--color-focus)",
    "fg-focus": "var(--color-text-focus)",
    fg: "var(--color-text)",
    "fg-muted": "var(--color-text-muted)",
    primary: "var(--color-primary)",
    "primary-text": "var(--color-primary-contrast)",
    header: withOpacity("--color-header-background"),
  },
};

module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./content/**/*.tsx",
    "./content/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.fg-muted"),
            a: {
              color: theme("colors.primary"),
              "&:hover": {
                color: theme("colors.anchor-hover"),
              },
              code: { color: theme("colors.focus") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.fg"),
              fontFamily: "Circular",
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.fg"),
              fontFamily: "Circular",
            },
            h3: {
              fontWeight: "700",
              fontFamily: "Circular",
              color: theme("colors.fg"),
            },
            "h4,h5,h6": {
              fontWeight: "600",
              fontFamily: "Circular",
              color: theme("colors.fg"),
            },
            code: {
              fontFamily: "DM Mono",
              color: theme("colors.bg"),
              backgroundColor: theme("colors.focus"),
            },
            details: {
              backgroundColor: theme("colors.bg"),
            },
            hr: { borderColor: theme("colors.base-muted") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.fg-muted"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.fg-muted"),
            },
            strong: { color: theme("colors.fg") },
            thead: {
              color: theme("colors.fg"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.base-muted"),
              },
            },
            blockquote: {
              fontSize: "1.5rem",
              color: theme("colors.fg"),
              borderLeftColor: theme("colors.fg-muted"),
            },
          },
        },
      }),
      colors: themes.skin,
      boxShadow: {
        light:
          "0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)",
      },
      fontFamily: {
        sans: ["Circular", ...defaultTheme.fontFamily.sans],
        display: ["Circular", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        blog: "1fr min(600px, 100%) 1fr",
      },
      backgroundColor: themes,
      textColor: themes,
      borderColor: themes,
      divideColor: themes,
      ringColor: themes,
      divideColor: themes,
      ringOffsetColor: themes,
      placeholderColor: themes,
      gradientColorStops: themes,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
