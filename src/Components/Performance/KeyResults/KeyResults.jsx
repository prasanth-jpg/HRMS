import React, { useState } from "react";
import styles from "./KeyResults.module.css";
import GoalsTable from "./GoalsTable";
import filter from "../../../assets/filter.png";
import settingicon from "../../../assets/settingicon.png";
import requestedback from "../../../assets/requestedback.png";
import eye from "../../../assets/eye.png";
import CreateGoalModal from "./CreateGoalModal"; 
import OpenModalfilter from "./OpenModalfilter";

const KeyResults = () => {
  const [activeTab, setActiveTab] = useState("individual");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false); 
  const [filterList, setFilterList] = useState(false); 
  const [filtershow, setFilterShow] = useState(true); 
  const [filtermodal, setFilterModal] = useState(false); 

  const tabs = [
    { id: "wishlist", label: "Wishlist" },
    { id: "individual", label: "Individual Goals / Key Result Areas" },
    { id: "template", label: "Template Goals / Key Result Areas" },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>Goals / Key Result Areas Explorer</h2>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tabsbtns}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${
                  activeTab === tab.id ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            className={styles.createBtn}
            onClick={() => setShowCreateModal(true)}
          >
            Create Goals / Key Result Areas
          </button>
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search by Goals / Key Result Areas Name or Owner Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={styles.searchBarimg}>
            <img src={filter} alt="filter" onClick={()=>setFilterList((prev)=>!prev)}/>
            <img src={settingicon} alt="settings"  onClick={()=>setFilterModal((prev)=>!prev)}/>
            <img src={requestedback} alt="requested back"  onClick={()=>setFilterModal((prev)=>!prev)}/>
            <img src={eye} alt="view" onClick={()=>setFilterShow((prev)=>!prev)}/>
          </div>
        </div>

        {activeTab === "individual" && (
          filtershow &&
          <GoalsTable searchTerm={searchTerm} filterList={filterList} filtershow={filtershow}/>
        )}
        {activeTab === "wishlist" && (
          <div className={styles.emptyState}>Wishlist coming soon...</div>
        )}
        {activeTab === "template" && (
          <div className={styles.emptyState}>Template Goals view</div>
        )}
      </main>

      {showCreateModal && (
        <CreateGoalModal onClose={() => setShowCreateModal(false)} />
      )}

      {filtermodal && <OpenModalfilter  onClose={() => setFilterModal(false)}/>}
    </div>
  );
};

export default KeyResults;
