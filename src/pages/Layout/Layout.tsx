import styles from "./Layout.module.css";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import github from "../../assets/github.svg";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header} role={"banner"}>
        <div className={styles.headerContainer}>
          <Link to="/" className={styles.headerTitleContainer}>
            <img
              src={search}
              alt="Azure Cognitive Search logo"
              className={styles.headerLogo}
            />
            <h3 className={styles.headerTitle}>Vector Search Demo</h3>
          </Link>
          <nav>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavLeftMargin}>
                <a
                  href="https://aka.ms/entgptsearch"
                  target={"_blank"}
                  title="Github repository link"
                >
                  <img
                    src={github}
                    alt="Github logo"
                    aria-label="Link to github repository"
                    className={styles.githubLogo}
                  />
                </a>
              </li>
            </ul>
          </nav>
          <h4 className={styles.headerRightText}>
            Azure OpenAI + Cognitive Search
          </h4>
        </div>
      </header>
    </div>
  );
};
