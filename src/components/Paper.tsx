// PaperDefs.jsx
export default function PaperDefs() {
  return (
    <svg width="0%" height="0%" z-index="-1" aria-hidden="true" style={{ position: "absolute" }}>
      <filter id="crumple" x="0" y="0" width="100%" height="100%"
              colorInterpolationFilters="sRGB">
        <feTurbulence type="turbulence" baseFrequency="0.70" numOctaves="10"
                      seed="3" stitchTiles="stitch" result="n" />
        <feDiffuseLighting in="n" lightingColor="#837a6e" surfaceScale="500">
          <feDistantLight azimuth="592" elevation="8" />
        </feDiffuseLighting>
      </filter>
    </svg>
  );
}