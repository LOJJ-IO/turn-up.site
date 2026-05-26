import { ImageResponse } from "next/og";

export const size = {
  width: 128,
  height: 128,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: 112,
            height: 112,
            display: "flex",
            position: "relative",
            borderRadius: 28,
            background: "#14130f",
            boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 20,
              width: 72,
              height: 18,
              borderRadius: 999,
              background: "#5cd982",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 47,
              width: 18,
              height: 64,
              borderRadius: 999,
              background: "#5cd982",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
