import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tanatswa data portfolio";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top, rgba(29, 78, 216, 0.14), transparent 26%), linear-gradient(135deg, #eff6ff 0%, #f8fafc 42%, #dbeafe 100%)",
          padding: "72px"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "fit-content",
            borderRadius: "999px",
            border: "1px solid rgba(30, 41, 59, 0.1)",
            background: "rgba(255, 255, 255, 0.7)",
            padding: "12px 24px",
            color: "#1d4ed8",
            fontSize: 24,
            fontWeight: 600
          }}
        >
          Berlin-based Data Automation Analyst
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#0f172a",
              width: "84%"
            }}
          >
            Turning Data into Automated Intelligence
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#475569",
              width: "70%",
              lineHeight: 1.35
            }}
          >
            Python pipelines, ETL workflows, analytics systems, and business-ready
            reporting.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#334155"
          }}
        >
          <span>Tanatswa</span>
          <span>tanatswaportfolio.de</span>
        </div>
      </div>
    ),
    size
  );
}
