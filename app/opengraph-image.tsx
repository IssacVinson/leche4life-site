import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Leche 4 Life Lactation — Amanda Howell, IBCLC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F1DECD",
          color: "#515142",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              background: "#E6C4BB",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 4 }}>
            LACTATION
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 76, lineHeight: 1, letterSpacing: -1 }}>
            Leche 4 Life
          </div>
          <div style={{ fontSize: 32 }}>
            Holistic lactation support for Charlotte-area families
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24 }}>
          Amanda Howell, IBCLC · Concord, North Carolina
        </div>
      </div>
    ),
    { ...size },
  );
}
