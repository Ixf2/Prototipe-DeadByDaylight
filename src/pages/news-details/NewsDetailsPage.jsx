import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function NewsDetailPage() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const ref = doc(db, "news", id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setNewsItem({ id: snap.id, ...snap.data() });
        }
      } catch (error) {
        console.error("Error loading news:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!newsItem) return <p>News not found.</p>;

  return (
    <div style={{ padding: "2rem", color: "white", background: "#191919", minHeight: "100vh" }}>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.categoryLabel}</p>
      {newsItem.imageURL && (
        <img
          src={newsItem.imageURL}
          alt={newsItem.title}
          style={{ maxWidth: "600px", width: "100%", borderRadius: "12px" }}
        />
      )}
      <p style={{ marginTop: "1rem" }}>{newsItem.description}</p>
    </div>
  );
}