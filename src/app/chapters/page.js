"use client";

import { useState, useEffect, useRef } from "react";
import chapters from "@/data/chapters";

export default function ChaptersPage() {

  const [selected, setSelected] = useState(() => chapters[0]);
  const [openSection, setOpenSection] = useState(null);
  const [search, setSearch] = useState("");
  const contentRef = useRef(null);

  // 🔍 Highlight text
  const highlightText = (text) => {
  if (!search.trim()) return text;

  const parts = text.split(new RegExp(`(${search})`, "gi"));

  return parts.map((part, i) => {
    if (part.toLowerCase() === search.toLowerCase()) {
      return (
        <span key={i} style={{ background: "yellow" }}>
          {part}
        </span>
      );
    }
    return part;
  });
};

  // 🔍 Build search results
  const results = [];

  if (search.trim()) {
    chapters.forEach((c) => {
      c.sections.forEach((s) => {
        s.children?.forEach((child) => {
          if (
            child.title.toLowerCase().includes(search.toLowerCase()) ||
            child.content.toLowerCase().includes(search.toLowerCase())
          ) {
            results.push({
              chapter: c,
              section: s,
              child
            });
          }
        });
      });
    });
  }

  // 🔄 Auto open section when search match
  useEffect(() => {
    if (!search.trim()) return;

    for (let c of chapters) {
      for (let s of c.sections) {
        const found =
          s.title.toLowerCase().includes(search.toLowerCase()) ||
          s.children?.some(
            (child) =>
              child.title.toLowerCase().includes(search.toLowerCase()) ||
              child.content?.toLowerCase().includes(search.toLowerCase())
          );

        if (found) {
          setSelected(c);
          setOpenSection(s.id);
          return;
        }
      }
    }
  }, [search]);

  // 🔄 Reset UI when clear search
  useEffect(() => {
    if (!search.trim()) {
      setOpenSection(null);
    }
  }, [search]);

  // 📍 Auto scroll to match
  useEffect(() => {
    if (search && contentRef.current) {
      const el = contentRef.current?.querySelector("[data-match]");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [search, selected, openSection]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
      <div style={{ width: "300px", borderRight: "1px solid #ddd", padding: "20px" }}>
        <h3>📚 Chapters</h3>

        <input
          placeholder="🔍 Search (e.g. boundary, risk...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            margin: "10px 0",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        {/* Results */}
        {search && (
          <div style={{ marginBottom: "20px" }}>
            <h4>Results</h4>

            {results.length === 0 ? (
              <div style={{ fontSize: "13px", color: "#888" }}>
                No results found
              </div>
            ) : (
              results.slice(0, 5).map((r, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelected(r.chapter);
                    setOpenSection(r.section.id);
                  }}
                  style={{
                    fontSize: "13px",
                    padding: "6px",
                    cursor: "pointer",
                    background: "#f9fafb",
                    marginBottom: "5px",
                    borderRadius: "6px"
                  }}
                >
                  {r.child.title}
                </div>
              ))
            )}
          </div>
        )}

        {/* Chapter list */}
        {chapters.map((c) => (
          <div
            key={c.id}
            onClick={() => {
              setSelected(c);
              setOpenSection(null);
            }}
            style={{
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              borderRadius: "8px",
              background: selected.id === c.id ? "#3b82f6" : "#f3f4f6",
              color: selected.id === c.id ? "white" : "black"
            }}
          >
            {c.title}
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{ flex: 1, padding: "30px", overflowY: "auto" }}
      >
        <h1>{selected.title}</h1>

        {selected.sections.map((s) => (
          <div key={s.id} style={{ marginBottom: "15px" }}>

            {/* Section */}
            <div
              onClick={() =>
                setOpenSection(openSection === s.id ? null : s.id)
              }
              style={{
                padding: "10px",
                background: "#e5e7eb",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              {s.id} - {s.title}
            </div>

            {/* Section content */}
            {openSection === s.id && (
              <div style={{ padding: "15px" }}>
                {s.children?.map((child) => (
                  <div key={child.id} style={{ marginBottom: "15px" }}>
                    <h4>{child.id} - {child.title}</h4>
                    <div data-match>
                      {highlightText(child.content)}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}