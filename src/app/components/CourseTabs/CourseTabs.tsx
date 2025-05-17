"use client";
import styles from "./CourseTabs.module.scss";
import { useState } from "react";

type Course = {
  title: string;
  type: string;
};

type Tab = {
  title: string;
  courses: Course[];
};

const TABS: Tab[] = [
  {
    title: "Tecnologia",
    courses: [
      { title: "Big Data Ecosystem", type: "REMOTO • LIVE" },
      { title: "Creating Dashboards for BI", type: "REMOTO • LIVE" },
      {
        title: "Big Data Science - Machine Learning & Data Mining",
        type: "REMOTO • LIVE • MULTIMÍDIA",
      },
      { title: "Storytelling", type: "REMOTO • LIVE" },
    ],
  },
  {
    title: "Inovação",
    courses: [
      { title: "UX", type: "Digital" },
      { title: "UX Writing", type: "LIVE" },
      { title: "Storytelling para Negócios", type: "LIVE" },
      { title: "Chatbots", type: "LIVE" },
    ],
  },
  {
    title: "Negócios",
    courses: [
      { title: "Agile Culture", type: "Digital" },
      { title: "DPO Data Protection Officer", type: "LIVE" },
      { title: "IT Business Partner", type: "LIVE" },
      { title: "Perícia Forense Computacional", type: "LIVE" },
    ],
  },
];

export function CourseTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleMobileClick = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.desktopTabs}>
        <div>
          <h5 className={styles.title}>Cursos</h5>
          <h6 className={styles.subtitle}>Cursos de Curta Duração</h6>
        </div>

        <div className={styles.tabHeaders}>
          {TABS.map((tab, index) => (
            <button
              key={tab.title}
              className={`${styles.tabButton} ${
                activeTab === index ? styles.active : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tabsContainer}>
        <div>
          <div className={styles.tabContents}>
            {TABS.map((tab, index) => (
              <div
                key={tab.title}
                className={`${styles.tabContent} ${
                  activeTab === index ? styles.active : ""
                }`}
              >
                <h6 className={styles.tabTitle}>{tab.title}</h6>
                {tab.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className={styles.courseItem}>
                    <p className={styles.courseTitle}>{course.title}</p>
                    <span className={styles.courseType}>{course.type}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className={styles.mobileAccordion}>
          {TABS.map((tab, index) => (
            <div
              key={tab.title}
              className={`${styles.accordionItem} ${
                expandedMobile === index ? styles.expanded : ""
              }`}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => handleMobileClick(index)}
              >
                {tab.title}
                <div className={styles.expandIcon}>
                  <span className={styles.horizontalLine} />
                  <span className={styles.verticalLine} />
                </div>
              </button>

              <div className={styles.accordionContent}>
                {tab.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className={styles.courseItem}>
                    <p className={styles.courseTitle}>{course.title}</p>
                    <span className={styles.courseType}>{course.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
