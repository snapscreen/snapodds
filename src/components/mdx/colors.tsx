export const getColorPalette = (wait = 200): Promise<string[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(colorPalette), wait);
  });

const colorPalette = [
  "#99f6e4",
  "#2dd4bf",
  "#14b8a6",
  "#ffffff",
  "#f6f6f7",
  "#eff1f3",
  "#545B6F",
  "#101010",
  "#000000",
  "#fd0",
  "#ffe5dc",
  "#ffd4c4",
  "#997f76",
  "#e4d3bb",
  "#d2b58d",
  "#7e6d55",
  "#ff9696",
  "#ff5050",
  "#993030",
  "#d3e4ff",
  "#b6d2ff",
  "#6d7e99",
];
