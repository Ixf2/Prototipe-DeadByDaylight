import React, { useEffect, useMemo, useState } from "react";
import "./HomeNew.css";

import {
  getNews,
  getNewsByCategoryId,
  NEWS_CATEGORY_IDS,
  NEWS_CATEGORY_LABELS,
} from "../../services/NewsArticles";

const HomeNew = () => {
  const categoryTabs = useMemo(() => {
    const ids = Object.values(NEWS_CATEGORY_IDS);
    return [
      { id: "all", label: "All" },
      ...ids.map((id) => ({ id, label: NEWS_CATEGORY_LABELS[id] || id })),
    ];
  }, []);

  const [selectedCat, setSelectedCat] = useState("all");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    const load = async () => {
      setLoading(true);
      setError("");

      try {
        const data =
          selectedCat === "all"
            ? await getNews({ max: 12 })
            : await getNewsByCategoryId(selectedCat, { max: 12 });

        if (!alive) return;
        setNews(data);
      } catch (e) {
        console.error("NEWS ERROR:", e);
        if (!alive) return;
        setError("Could not load news.");
      } finally {
        if (alive) setLoading(false);
      }
    };

    load();
    return () => {
      alive = false;
    };
  }, [selectedCat]);

  return (
    <section className="home-news-section">
      <div className="home-news-header">
        <h2 className="home-news-title">
          {selectedCat === "all"
            ? "Latest News"
            : NEWS_CATEGORY_LABELS[selectedCat] || "News"}
        </h2>

        <div className="news-filters" role="tablist" aria-label="News categories">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`news-filter-btn ${selectedCat === tab.id ? "active" : ""}`}
              onClick={() => setSelectedCat(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading && <p className="news-status">Loading…</p>}
      {error && <p className="news-status error">{error}</p>}

      {!loading && !error && news.length === 0 && (
        <p className="news-status">No news found for this category.</p>
      )}

      <div className="news-grid">
        {news.map((item) => (
          <article key={item.id} className="news-card">
            {item.imageURL && (
              <img
                src={item.imageURL}
                alt={item.title || "News"}
                className="news-image"
              />
            )}

            <div className="news-content">
              <span className="news-category">
                {item.categoryLabel ||
                  NEWS_CATEGORY_LABELS[item.categoryId] ||
                  item.categoryId}
              </span>

              <h3 className="news-title">{item.title}</h3>

              {item.description && <p className="news-desc">{item.description}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeNew;