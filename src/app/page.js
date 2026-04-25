import chapters from "@/data/chapters";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto"
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}
      >
        📚 ISTQB Learning
      </h1>

      <p
        style={{
          color: "#555",
          marginBottom: "30px"
        }}
      >
        Learn software testing step by step based on ISTQB Foundation syllabus.
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        {chapters.map((c) => (
          <div
            key={c.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "25px",
              background: "white"
            }}
          >
            <h2 style={{ marginBottom: "8px" }}>
              {c.title}
            </h2>

            <p style={{ color: "#666" }}>
              {c.description || "Learn key concepts and examples."}
            </p>

            <Link href="/chapters">
              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 14px",
                  background: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Start Learning →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}