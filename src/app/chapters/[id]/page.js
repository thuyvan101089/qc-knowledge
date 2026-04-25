import chapters from "@/data/chapters";

export default function ChapterDetail({ params }) {
  const chapter = chapters.find(c => c.id === params.id);

  if (!chapter) {
    return <div>Không tìm thấy chapter</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{chapter.title}</h1>

      <div style={{
        marginTop: "20px",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        whiteSpace: "pre-line"
      }}>
        {chapter.content}
      </div>
    </div>
  );
}