import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 64,
  height: 64
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18px",
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          color: "white",
          fontSize: 30,
          fontWeight: 700
        }}
      >
        T
      </div>
    ),
    size
  );
}
