import { useEffect, useState } from "react";
import "./Modal.css";
import { db } from "../../services/Firebase";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const initialForm = {
  title: "",
  description: "",
  categoryLabel: "",
  categoryId: "",
  imageURL: "",
};

const Modal = ({ isOpen, onClose }) => {
  const [newsList, setNewsList] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);

  const newsCollectionRef = collection(db, "news");

  const getNews = async () => {
    try {
      setErrorMsg("");

      const data = await getDocs(newsCollectionRef);

      const newsData = data.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));

      newsData.sort((a, b) => {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;
        return bTime - aTime;
      });

      setNewsList(newsData);
    } catch (error) {
      console.error("Error retrieving news:", error);
      setErrorMsg("The news could not be loaded..");
    }
  };

  useEffect(() => {
    if (isOpen) {
      getNews();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setSelectedId(null);
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleEdit = (news) => {
    setSelectedId(news.id);
    setForm({
      title: news.title || "",
      description: news.description || "",
      categoryLabel: news.categoryLabel || "",
      categoryId: news.categoryId || "",
      imageURL: news.imageURL || "",
    });
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      if (!form.title.trim()) {
        throw new Error("Title is required.");
      }

      if (!form.description.trim()) {
        throw new Error("The description is mandatory.");
      }

      const DEFAULT_IMAGE =
        "https://image.api.playstation.com/vulcan/ap/rnd/202203/1520/peZ5EkC9MxG97T8NF1HQDA9U.jpg";
      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        categoryLabel: form.categoryLabel.trim(),
        categoryId: form.categoryId.trim(),
        imageURL: form.imageURL.trim() || DEFAULT_IMAGE,
      };

      if (selectedId) {
        const newsDoc = doc(db, "news", selectedId);
        await updateDoc(newsDoc, payload);
        setSuccessMsg("News updated correctly.");
      } else {
        await addDoc(newsCollectionRef, {
          ...payload,
          createdAt: serverTimestamp(),
        });
        setSuccessMsg("News item created successfully.");
      }

      await getNews();
      resetForm();
    } catch (error) {
      console.error("Error saving news item:", error);
      setErrorMsg(error.message || "The news item could not be saved.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const newsDoc = doc(db, "news", id);
      await deleteDoc(newsDoc);

      if (selectedId === id) {
        resetForm();
      }

      await getNews();
      setSuccessMsg("News item successfully deleted.");
    } catch (error) {
      console.error("Error deleting news item:", error);
      setErrorMsg("The news item could not be deleted.");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
      resetForm();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={() => {
            onClose();
            resetForm();
          }}
        >
          ×
        </button>

        <h2 className="modal-title">News panel</h2>

        <div className="modal-body">
          <div className="modal-news-section">
            <h3>Latest news</h3>

            <div className="modal-news-list">
              {newsList.length === 0 ? (
                <p className="empty-message">No news yet.</p>
              ) : (
                newsList.map((news) => (
                  <div key={news.id} className="modal-news-card">
                    <div className="modal-news-image-wrapper">
                      {news.imageURL ? (
                        <img
                          src={news.imageURL}
                          alt={news.title}
                          className="modal-news-image"
                        />
                      ) : (
                        <div className="modal-no-image">Sin imagen</div>
                      )}
                    </div>

                    <div className="modal-news-info">
                      <h4>{news.title}</h4>
                      <p>{news.description}</p>
                      <span>{news.categoryLabel || "Uncategorized"}</span>
                    </div>

                    <div className="modal-news-actions">
                      <button type="button" onClick={() => handleEdit(news)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => setDeleteTarget(news.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="modal-form-section">
            <h3>{selectedId ? "Edit news item" : "Create news item"}</h3>

            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="title"
                value={form.title}
                onChange={handleChange}
              />

              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
              />

              <input
                type="text"
                name="categoryLabel"
                placeholder="Category label"
                value={form.categoryLabel}
                onChange={handleChange}
              />

              <input
                type="text"
                name="categoryId"
                placeholder="Category ID"
                value={form.categoryId}
                onChange={handleChange}
              />

              <input
                type="url"
                name="imageURL"
                placeholder="https://example.com/imagen.jpg"
                value={form.imageURL}
                onChange={handleChange}
              />

              {form.imageURL && (
                <img
                  src={
                    form.imageURL ||
                    "https://image.api.playstation.com/vulcan/ap/rnd/202203/1520/peZ5EkC9MxG97T8NF1HQDA9U.jpg"
                  }
                  alt="Preview"
                  className="modal-preview-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://image.api.playstation.com/vulcan/ap/rnd/202203/1520/peZ5EkC9MxG97T8NF1HQDA9U.jpg";
                  }}
                />
              
              )}

              {errorMsg && <p className="modal-message error">{errorMsg}</p>}
              {successMsg && <p className="modal-message success">{successMsg}</p>}

              <div className="modal-form-buttons">
                <button type="submit" disabled={loading}>
                  {loading
                    ? "Saved..."
                    : selectedId
                      ? "Update new"
                      : "Create new"}
                </button>

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={resetForm}
                >
                  Clean
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {deleteTarget && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <p>Are you sure you want to delete this news item?</p>

            <div className="confirm-buttons">
              <button
                className="delete-btn"
                onClick={() => {
                  handleDelete(deleteTarget);
                  setDeleteTarget(null);
                }}
              >
                Delete
              </button>

              <button
                className="secondary-btn"
                onClick={() => setDeleteTarget(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;