import styles from './CourseDashboard.module.css';

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <button className={styles.buildCourseBtn}>+ Build a new Course</button>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        <div className={styles.courseList}>
          <div className={styles.courseHeader}>
            <span>Courses</span>
            <button className={styles.addCourse}>+</button>
          </div>
          <div className={styles.courseItem}>Esthetics Practical Traini...</div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h2>Esthetics Practical Training Course</h2>
          <div className={styles.controls}>
            <select className={styles.dropdown}>
              <option>Date created</option>
            </select>
            <div className={styles.viewToggles}>
              <button className={styles.viewBtn}>List</button>
              <button className={styles.viewBtn}>Grid</button>
            </div>
          </div>
        </header>

        <section className={styles.sectionList}>
          <div className={styles.sectionItem}>
            <div className={styles.iconCell}>📅</div>
            <div className={styles.nameCell}>Introduction</div>
            <div className={styles.dateCell}>10 Sept 2024</div>
          </div>
          <div className={styles.sectionItem}>
            <div className={styles.iconCell}>📅</div>
            <div className={styles.nameCell}>Seminar 1</div>
            <div className={styles.dateCell}>15 Sept 2024</div>
          </div>
        </section>
      </main>
    </div>
    );
};