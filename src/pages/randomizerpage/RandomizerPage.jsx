import { useEffect, useMemo, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LoadingScreen from '../../components/loadingscreen/LoadingScreen.jsx';

import {
  getKillers,
  getKillerPerks,
  getBuilds,
  createBuild,
  updateBuild,
  deleteBuild,
} from "../../services/RandomizerServices";
import "./RandomizerPage.css";

function pickOne(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickManyUnique(array, count) {
  const copy = [...array];
  copy.sort(() => Math.random() - 0.5);
  return copy.slice(0, count);
}

const emptyForm = {
  title: "",
  description: "",
  killerId: "",
  killerName: "",
  perkIds: [],
  perkNames: [],
};

export default function RandomizerPage() {
  const [killers, setKillers] = useState([]);
  const [killerPerks, setKillerPerks] = useState([]);
  const [builds, setBuilds] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  async function loadData() {
    try {
      const [killersData, perksData, buildsData] = await Promise.all([
        getKillers(),
        getKillerPerks(),
        getBuilds(),
      ]);

      setKillers(killersData);
      setKillerPerks(perksData);
      setBuilds(buildsData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const killersMap = useMemo(() => {
    return Object.fromEntries(killers.map((killer) => [killer.nameId, killer]));
  }, [killers]);

  const perksMap = useMemo(() => {
    return Object.fromEntries(killerPerks.map((perk) => [perk.nameId, perk]));
  }, [killerPerks]);

  function generateRandomBuild() {
    if (killers.length === 0 || killerPerks.length < 4) return;

    const randomKiller = pickOne(killers);
    const randomPerks = pickManyUnique(killerPerks, 4);

    setForm({
      title: "Random Build",
      description: "Randomly generated",
      killerId: randomKiller.nameId,
      killerName: randomKiller.name,
      perkIds: randomPerks.map((perk) => perk.nameId),
      perkNames: randomPerks.map((perk) => perk.name),
    });

    setEditingId(null);
  }

  function handleKillerChange(e) {
    const selectedId = e.target.value;
    const selectedKiller = killers.find((killer) => killer.nameId === selectedId);

    setForm((prev) => ({
      ...prev,
      killerId: selectedId,
      killerName: selectedKiller ? selectedKiller.name : "",
    }));
  }

  function togglePerk(perk) {
    setForm((prev) => {
      const alreadySelected = prev.perkIds.includes(perk.nameId);

      if (alreadySelected) {
        return {
          ...prev,
          perkIds: prev.perkIds.filter((id) => id !== perk.nameId),
          perkNames: prev.perkNames.filter((name) => name !== perk.name),
        };
      }

      if (prev.perkIds.length >= 4) return prev;

      return {
        ...prev,
        perkIds: [...prev.perkIds, perk.nameId],
        perkNames: [...prev.perkNames, perk.name],
      };
    });
  }

  async function handleSaveBuild() {
    if (!form.killerId) {
      alert("You must select a killer.");
      return;
    }

    if (form.perkIds.length !== 4) {
      alert("You must select exactly 4 perks.");
      return;
    }

    const buildData = {
      title: form.title || "Untitled Build",
      description: form.description || "",
      killerId: form.killerId,
      killerName: form.killerName,
      perkIds: form.perkIds,
      perkNames: form.perkNames,
      mode: "killer",
    };

    try {
      if (editingId) {
        await updateBuild(editingId, buildData);
      } else {
        await createBuild(buildData);
      }

      await loadData();
      setForm(emptyForm);
      setEditingId(null);
    } catch (error) {
      console.error("Error saving build:", error);
    }
  }

  function handleEditBuild(build) {
    setEditingId(build.id);
    setForm({
      title: build.title || "",
      description: build.description || "",
      killerId: build.killerId || "",
      killerName: build.killerName || "",
      perkIds: build.perkIds || [],
      perkNames: build.perkNames || [],
    });
  }

  async function handleDeleteBuild(buildId) {
    try {
      await deleteBuild(buildId);
      await loadData();
    } catch (error) {
      console.error("Error deleting build:", error);
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
  }

  return (
    <>
      <LoadingScreen/>
      <Header />
      <div className="randomizer-page">
        <div className="randomizer-container">
          <header className="randomizer-hero">
            <h1 className="randomizer-title">DBD Killer Randomizer</h1>
            <button className="randomizer-button" onClick={generateRandomBuild}>
              Generate random
            </button>
          </header>

          <section className="current-build-section">
            <div className="current-build-card">
              <div className="current-build-left">
                <h2 className="section-title">Current build</h2>

                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input
                    className="form-input"
                    type="text"
                    value={form.title}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-textarea"
                    value={form.description}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, description: e.target.value }))
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Killer</label>
                  <select
                    className="form-select"
                    value={form.killerId}
                    onChange={handleKillerChange}
                  >
                    <option value="">Select a killer</option>
                    {killers.map((killer) => (
                      <option key={killer.id} value={killer.nameId}>
                        {killer.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-buttons">
                  <button className="randomizer-button" onClick={handleSaveBuild}>
                    {editingId ? "Update build" : "Save build"}
                  </button>

                  {editingId && (
                    <button
                      type="button"
                      className="randomizer-button secondary-button"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>

              <div className="current-build-right">
                {form.killerId && killersMap[form.killerId] && (
                  <div className="killer-preview-card">
                    <img
                      className="killer-preview-image"
                      src={killersMap[form.killerId].imageURL}
                      alt={killersMap[form.killerId].name}
                    />
                    <h3 className="killer-preview-name">
                      {killersMap[form.killerId].name}
                    </h3>
                  </div>
                )}

                <div className="selected-perks-box">
                  <h3 className="selected-perks-title">
                    Selected perks ({form.perkIds.length}/4)
                  </h3>

                  <div className="selected-perks-grid">
                    {form.perkIds.map((perkId) => {
                      const perk = perksMap[perkId];
                      if (!perk) return null;

                      return (
                        <div key={perkId} className="selected-perk-card">
                          {perk.imageURL && (
                            <img
                              className="selected-perk-image"
                              src={perk.imageURL}
                              alt={perk.name}
                            />
                          )}
                          <div className="selected-perk-name">{perk.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="perk-selector-section">
            <h2 className="section-title">Choose your perks</h2>
            <div className="perks-grid">
              {killerPerks.map((perk) => {
                const selected = form.perkIds.includes(perk.nameId);

                return (
                  <button
                    key={perk.id}
                    type="button"
                    onClick={() => togglePerk(perk)}
                    className={`perk-card ${selected ? "perk-card-selected" : ""}`}
                  >
                    {perk.imageURL && (
                      <img
                        className="perk-card-image"
                        src={perk.imageURL}
                        alt={perk.name}
                      />
                    )}
                    <div className="perk-card-name">{perk.name}</div>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="saved-builds-section">
            <h2 className="section-title">Saved builds</h2>

            {builds.length === 0 ? (
              <p className="empty-text">There are no builds yet.</p>
            ) : (
              <div className="builds-list">
                {builds.map((build) => (
                  <div key={build.id} className="build-card">
                    <div className="build-card-top">
                      <div>
                        <h3 className="build-card-title">{build.title}</h3>
                        <p className="build-card-description">{build.description}</p>
                        <p className="build-card-killer">
                          <strong>Killer:</strong> {build.killerName}
                        </p>
                      </div>
                    </div>

                    <div className="build-perks-row">
                      {build.perkIds?.map((perkId) => {
                        const perk = perksMap[perkId];
                        if (!perk) return null;

                        return (
                          <div key={perkId} className="build-perk-item">
                            {perk.imageURL && (
                              <img
                                className="build-perk-image"
                                src={perk.imageURL}
                                alt={perk.name}
                              />
                            )}
                            <div className="build-perk-name">{perk.name}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="build-card-actions">
                      <button
                        className="randomizer-button"
                        onClick={() => handleEditBuild(build)}
                      >
                        Edit
                      </button>
                      <button
                        className="randomizer-button danger-button"
                        onClick={() => handleDeleteBuild(build.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}