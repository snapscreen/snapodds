import React, { useState, useCallback, useEffect } from "react";
import { ColorResult, BlockPicker } from "react-color";
import { getColorPalette } from "./colors";
import { MdxProps } from "@/definitions";

const Color: React.FC<MdxProps> = ({
  colorCode,
  colorName,
  colorHEX,
  colorHEXDark,
}) => {
  return (
    <div className="flex-1 mb-4">
      <div
        aria-label={colorCode}
        style={{ backgroundColor: colorCode }}
        className="p-8 mb-1 border border-skin-base-muted"
      />
      <div className="font-bold font-display leading-tight">{colorName}</div>
      <div className="flex flex-col text-sm font-mono">
        <div className="dark:hidden">{colorHEX}</div>
        <div className="hidden dark:block">{colorHEXDark}</div>
      </div>
    </div>
  );
};

export const ColorPicker: React.FC<MdxProps> = () => {
  const [color, setColor] = useState<ColorResult>();
  const [palette, setPalette] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(false);
  const { hex } = color || {};
  const updateColor = useCallback((color: ColorResult) => setColor(color), []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const colors = await getColorPalette();
        setPalette(colors);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>Loading color palette</span>
      ) : palette.length > 0 ? (
        <BlockPicker
          triangle="hide"
          color={hex || "#2dd4bf"}
          colors={palette}
          width="100%"
          onChange={updateColor}
          className="bg-skin-base shadow-lg"
        />
      ) : (
        <span>Sorry, loading failed.</span>
      )}
    </>
  );
};

export const ColorsPrimaryBlock: React.FC<MdxProps> = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color
        colorCode="var(--color-primary-tint)"
        colorName="Primary Tint"
        colorHEX="#99f6e4"
        colorHEXDark="#99f6e4"
      />
      <Color
        colorCode="var(--color-primary)"
        colorName="Primary Hue"
        colorHEX="#2dd4bf"
        colorHEXDark="#2dd4bf"
      />
      <Color
        colorCode="var(--color-primary-shade)"
        colorName="Primary Shade"
        colorHEX="#14b8a6"
        colorHEXDark="#14b8a6"
      />
    </div>
  </>
);

export const ColorsBackgroundsBlock: React.FC<MdxProps> = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color
        colorCode="var(--color-background-flash)"
        colorName="Background Flash"
        colorHEX="#ffffff"
        colorHEXDark="#000000"
      />
      <Color
        colorCode="var(--color-background)"
        colorName="Background"
        colorHEX="#f6f6f7"
        colorHEXDark="#0c171a"
      />
      <Color
        colorCode="var(--color-background-muted)"
        colorName="Background Muted"
        colorHEX="#eff1f3"
        colorHEXDark="#232a30"
      />
      <Color
        colorCode="var(--color-focus"
        colorName="Focus Background"
        colorHEX="#ffdd00"
        colorHEXDark="#ffdd00"
      />
    </div>
  </>
);

export const ColorsTextBlock: React.FC<MdxProps> = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color
        colorCode="var(--color-text)"
        colorName="Text Base"
        colorHEX="#101010"
        colorHEXDark="#ffffff"
      />
      <Color
        colorCode="var(--color-text-muted)"
        colorName="Text Muted"
        colorHEX="#545b6f"
        colorHEXDark="#b8bec6"
      />
      <Color
        colorCode="var(--color-text-focus)"
        colorName="Focus Text"
        colorHEX="#000000"
        colorHEXDark="#000000"
      />
    </div>
  </>
);

export const ColorsAccentBlock: React.FC<MdxProps> = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color
        colorCode="var(--color-accent-peach-tint)"
        colorName="Peach Tint"
        colorHEX="#ffe5dc"
        colorHEXDark="#ffe5dc"
      />
      <Color
        colorCode="var(--color-accent-peach)"
        colorName="Peach Hue"
        colorHEX="#ffd4c4"
        colorHEXDark="#ffd4c4"
      />
      <Color
        colorCode="var(--color-accent-peach-shade)"
        colorName="Peach Shade"
        colorHEX="#997f76"
        colorHEXDark="#997f76"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color
        colorCode="var(--color-accent-copper-tint)"
        colorName="Copper Tint"
        colorHEX="#e4d3bb"
        colorHEXDark="#e4d3bb"
      />
      <Color
        colorCode="var(--color-accent-copper)"
        colorName="Copper Hue"
        colorHEX="#d2b58d"
        colorHEXDark="#d2b58d"
      />
      <Color
        colorCode="var(--color-accent-copper-shade)"
        colorName="Copper Shade"
        colorHEX="#7e6d55"
        colorHEXDark="#7e6d55"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color
        colorCode="var(--color-accent-coral-tint)"
        colorName="Coral Tint"
        colorHEX="#ff9696"
        colorHEXDark="#ff9696"
      />
      <Color
        colorCode="var(--color-accent-coral)"
        colorName="Coral Hue"
        colorHEX="#ff5050"
        colorHEXDark="#ff5050"
      />
      <Color
        colorCode="var(--color-accent-coral-shade)"
        colorName="Coral Shade"
        colorHEX="#993030"
        colorHEXDark="#993030"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Color
        colorCode="var(--color-accent-blue-tint)"
        colorName="Blue Tint"
        colorHEX="#d3e4ff"
        colorHEXDark="#d3e4ff"
      />
      <Color
        colorCode="var(--color-accent-blue)"
        colorName="Blue Hue"
        colorHEX="#b6d2ff"
        colorHEXDark="#b6d2ff"
      />
      <Color
        colorCode="var(--color-accent-blue-shade)"
        colorName="Blue Shade"
        colorHEX="#6d7e99"
        colorHEXDark="#6d7e99"
      />
    </div>
  </>
);
